"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Toolbar } from "@/components/toolbar";
import { Cover } from "@/components/cover";
import { Skeleton } from "@/components/ui/skeleton";
import Editor from "@/components/editor";
// import dynamic from "next/dynamic";
// import { useMemo } from "react";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
  });

  const update = useMutation(api.documents.update);

  // const Editor = useMemo(() => {
  //   dynamic(() => import("@/components/editor"), { ssr: false });
  // }, []);

  const onChange = (newContent: string) => {
    update({
      id: params.documentId,
      content: newContent,
    });
  };

  if (document === undefined) {
    return (
      <>
        <div>
          <Cover.Skeleton />
          <div className="md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
            <div className="space-y-4 pl-8 pt-4">
              <Skeleton className="h-14 w-[50%]" />
              <Skeleton className="h-4 w-[80%]" />
              <Skeleton className="h-4 w-[40%]" />
              <Skeleton className="h-4 w-[60%]" />
            </div>
          </div>
        </div>
      </>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }

  return (
    <>
      <div className="pb-40">
        <Cover url={document.coverImage} />
        <div className="md:max-w-3xl lg:max-w-4xl mx-auto">
          <Toolbar initialData={document} />
          <Editor
            key={document._id}
            onChange={onChange}
            initialContent={document.content}
            editable={true}
          />
        </div>
      </div>
    </>
  );
};

export default DocumentIdPage;
