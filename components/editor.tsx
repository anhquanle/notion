"use client";

// import { BlockNoteEditor, PartialBlock } from "@blocknote/core";
// import { BlockNoteview, useBlockNote } from "@blocknote/react";

interface EditerProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

export const Editor = ({ onChange, initialContent, editable }: EditerProps) => {
  return (
    <>
      <div>Editor</div>
    </>
  );
};
