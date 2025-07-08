"use client";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import { useTheme } from "next-themes";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/mantine";
import { useEffect } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { useEdgeStore } from "@/lib/edgestore";
import { BlockNoteEditor } from "@blocknote/core";

interface EditorProps {
  initialContent?: string;
  editable?: boolean;
  onChange: (content: string) => void;
}

export default function Editor({
  editable,
  onChange,
  initialContent = "",
}: EditorProps) {
  const { edgestore } = useEdgeStore();
  const { resolvedTheme } = useTheme();

  const handleUploadFile = async (file: File) => {
    const res = await edgestore.publicFiles.upload({ file });

    return res.url;
  };

  const editor: BlockNoteEditor = useCreateBlockNote({
    uploadFile: handleUploadFile,
  });

  // Parse initial content to BlockNote editor view
  useEffect(() => {
    async function loadInitialHTML() {
      const blocks = await editor.tryParseHTMLToBlocks(initialContent);
      editor.replaceBlocks(editor.document, blocks);
    }
    loadInitialHTML();
  }, []);

  // Update data to convex DB
  const debouncedSave = useDebounceCallback((newContent: string) => {
    onChange(newContent);
  }, 1000);

  return (
    <>
      <BlockNoteView
        spellCheck={false}
        editor={editor}
        editable={editable}
        theme={resolvedTheme === "dark" ? "dark" : "light"}
        onChange={async (editor) => {
          const html = await editor.blocksToHTMLLossy(editor.document);
          debouncedSave(html);
        }}
      />
    </>
  );
}
