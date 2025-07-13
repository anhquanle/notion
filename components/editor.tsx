"use client";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { BlockNoteView } from "@blocknote/mantine";
import {
  BlockNoteSchema,
  defaultBlockSpecs,
  filterSuggestionItems,
  insertOrUpdateBlock,
  PartialBlock,
} from "@blocknote/core";
import { useDebounceCallback } from "usehooks-ts";

import {
  BasicTextStyleButton,
  BlockTypeSelect,
  ColorStyleButton,
  CreateLinkButton,
  FileCaptionButton,
  FileReplaceButton,
  FormattingToolbar,
  FormattingToolbarController,
  NestBlockButton,
  TextAlignButton,
  UnnestBlockButton,
  useCreateBlockNote,
  getDefaultReactSlashMenuItems,
  SuggestionMenuController,
  blockTypeSelectItems,
  BlockTypeSelectItem,
  SideMenuController,
  SideMenu,
  DragHandleButton,
  DragHandleMenuProps,
  DragHandleMenu,
  BlockColorsItem,
  TableCellMergeButton,
  FileRenameButton,
  FileDeleteButton,
  FileDownloadButton,
  FilePreviewButton,
} from "@blocknote/react";

// import { codeBlock } from "@blocknote/code-block";
import { CodeBlockCustom } from "@/components//blocknote-custom/code-block/codeblock";

import { RiAlertFill } from "react-icons/ri";

import { RemoveBlockButton } from "@/components/blocknote-custom/RemoveBlockButton";
import { BlueButton } from "@/components/blocknote-custom/blueButton";
import { Alert } from "@/components/blocknote-custom/alert-block/alert";
import { ResetBlockTypeItem } from "@/components/blocknote-custom/ResetBlockTypeItem";
import { ArrowConversionExtension } from "@/components/blocknote-custom/extensions/ArrowConversionExtension";

interface EditorProps {
  initialContent?: object;
  editable?: boolean;
  onChange: (content: object) => void;
}

const schema = BlockNoteSchema.create({
  blockSpecs: {
    ...defaultBlockSpecs,
    alert: Alert,
  },
});

const insertAlert = (editor: typeof schema.BlockNoteEditor) => ({
  title: "Alert",
  subtext: "Alert for emphasizing text",
  onItemClick: () =>
    insertOrUpdateBlock(editor, {
      type: "alert",
    }),
  aliases: [
    "alert",
    "notification",
    "emphasize",
    "warning",
    "error",
    "info",
    "success",
  ],
  group: "Basic blocks",
  icon: <RiAlertFill />,
});

const CustomDragHandleMenu = (props: DragHandleMenuProps) => (
  <DragHandleMenu {...props}>
    <BlockColorsItem {...props}>Colors</BlockColorsItem>
    <ResetBlockTypeItem {...props}>Reset Type</ResetBlockTypeItem>
  </DragHandleMenu>
);

export default function Editor({
  editable,
  onChange,
  initialContent,
}: EditorProps) {
  const { edgestore } = useEdgeStore();
  const { resolvedTheme } = useTheme();

  const editor = useCreateBlockNote({
    schema,
    // codeBlock: codeBlock,
    codeBlock: CodeBlockCustom,
    uploadFile: handleUploadFile,

    tables: {
      splitCells: true,
      cellBackgroundColor: true,
      cellTextColor: true,
      headers: true,
    },

    initialContent: initialContent as PartialBlock[],

    _tiptapOptions: {
      extensions: [ArrowConversionExtension],
    },
  });

  const debouncedSave = useDebounceCallback((newContent: object) => {
    onChange(newContent);
  }, 1000);

  async function handleUploadFile(file: File) {
    const res = await edgestore.publicFiles.upload({ file });

    return res.url;
  }

  return (
    <>
      <BlockNoteView
        editor={editor}
        spellCheck={false}
        editable={editable}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={(editor) => {
          debouncedSave(editor.document);
        }}
        formattingToolbar={false}
        slashMenu={false}
        sideMenu={false}
      >
        {/* Replaces the default Formatting Toolbar */}
        <FormattingToolbarController
          formattingToolbar={() => (
            <FormattingToolbar>
              <BlockTypeSelect
                key={"blockTypeSelect"}
                items={[
                  // Gets the default Block Type Select items.
                  ...blockTypeSelectItems(editor.dictionary),
                  // Adds an item for the Alert block.
                  {
                    name: "Alert",
                    type: "alert",
                    icon: RiAlertFill,
                    isSelected: (block) => block.type === "alert",
                  } satisfies BlockTypeSelectItem,
                ]}
              />
              {/* Extra button to toggle blue text & background */}
              <BlueButton key={"customButton"} />
              <TableCellMergeButton key={"tableCellMergeButton"} />
              <FileCaptionButton key={"fileCaptionButton"} />
              <FileReplaceButton key={"replaceFileButton"} />
              <FileRenameButton key={"fileRenameButton"} />
              <FileDeleteButton key={"fileDeleteButton"} />
              <FileDownloadButton key={"fileDownloadButton"} />
              <FilePreviewButton key={"filePreviewButton"} />
              <BasicTextStyleButton
                basicTextStyle={"bold"}
                key={"boldStyleButton"}
              />
              <BasicTextStyleButton
                basicTextStyle={"italic"}
                key={"italicStyleButton"}
              />
              <BasicTextStyleButton
                basicTextStyle={"underline"}
                key={"underlineStyleButton"}
              />
              <BasicTextStyleButton
                basicTextStyle={"strike"}
                key={"strikeStyleButton"}
              />
              {/* Extra button to toggle code styles */}
              <BasicTextStyleButton
                key={"codeStyleButton"}
                basicTextStyle={"code"}
              />
              <TextAlignButton
                textAlignment={"left"}
                key={"textAlignLeftButton"}
              />
              <TextAlignButton
                textAlignment={"center"}
                key={"textAlignCenterButton"}
              />
              <TextAlignButton
                textAlignment={"right"}
                key={"textAlignRightButton"}
              />
              <ColorStyleButton key={"colorStyleButton"} />
              <NestBlockButton key={"nestBlockButton"} />
              <UnnestBlockButton key={"unnestBlockButton"} />
              <CreateLinkButton key={"createLinkButton"} />
            </FormattingToolbar>
          )}
        />

        {/* Replaces the default Slash Menu. */}
        <SuggestionMenuController
          triggerCharacter={"/"}
          getItems={async (query) => {
            // Gets all default slash menu items.
            const defaultItems = getDefaultReactSlashMenuItems(editor);
            // Finds index of last item in "Basic blocks" group.
            const lastBasicBlockIndex = defaultItems.findLastIndex(
              (item) => item.group === "Basic blocks"
            );
            // Inserts the Alert item as the last item in the "Basic blocks" group.
            defaultItems.splice(
              lastBasicBlockIndex + 1,
              0,
              insertAlert(editor)
            );

            // Returns filtered items based on the query.
            return filterSuggestionItems(defaultItems, query);
          }}
        />

        {/* Replaces the default Side Menu. */}
        <SideMenuController
          sideMenu={(props) => (
            <SideMenu {...props}>
              {/* Button which removes the hovered block. */}
              <RemoveBlockButton {...props} />
              <DragHandleButton
                {...props}
                dragHandleMenu={CustomDragHandleMenu}
              />
            </SideMenu>
          )}
        />
      </BlockNoteView>
    </>
  );
}
