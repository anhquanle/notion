"use client";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/spinner";
import { ConfirmModal } from "@/components/modals/confirm-modal";

import { toast } from "sonner";
import { useState } from "react";
import { useEdgeStore } from "@/lib/edgestore";
import { Search, Trash, Undo } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useMutation, useQuery } from "convex/react";

export const TrashBox = () => {
  const router = useRouter();
  const params = useParams();
  const { edgestore } = useEdgeStore();
  const documents = useQuery(api.documents.getTrash);
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);
  const removeCoverImage = useMutation(api.documents.removeCoverImage);

  const [search, setSearch] = useState("");
  const filteredDocuments = documents?.filter((document) => {
    return document.title.toLowerCase().includes(search.toLowerCase());
  });

  const onClick = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  const onRestore = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentId: Id<"documents">
  ) => {
    event.stopPropagation();
    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring note...",
      success: "Note restored!",
      error: "Failed to restore note.",
    });

    onClick(documentId);
  };

  const onRemove = async (documentId: Id<"documents">) => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting note...",
      success: "Note deleted!",
      error: "Failed to delete note.",
    });

    if (params.documentId === documentId) {
      router.push("/documents");
    }

    if (document === undefined) {
      return (
        <>
          <div className="h-full flex items-center justify-center p-4">
            <Spinner size="lg" />
          </div>
        </>
      );
    }
  };

  const onRemoveImage = async (url: string) => {
    if (url) {
      await edgestore.publicFiles.delete({
        url: url,
      });
    }

    removeCoverImage({ id: params.documentId as Id<"documents"> });
  };

  return (
    <>
      <div className="text-sm">
        <div className="flex items-center gap-x-1 p-2">
          <Search className="h-4 w-4" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-7 px-2 focus-visible:ring-transparent bg-secondary/"
            placeholder="Filter by page title..."
          />
        </div>
        <div className="mt-2 px-1 pb-1">
          <p className="hidden last:block text-xs text-center text-muted-foreground pb-2">
            No parameters found.
          </p>
          {filteredDocuments?.map((document) => (
            <div
              key={document._id}
              role="button"
              onClick={() => onClick(document._id)}
              className="text-sm rounded-sm w-full hover:bg-primary/5 flex items-center text-primary justify-between"
            >
              <span className="truncate pl-2">{document.title}</span>
              <div className="flex items-center">
                <div
                  onClick={(e) => onRestore(e, document._id)}
                  role="button"
                  className="rounded-sm p-2 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                >
                  <Undo className="h-4 w-4 text-muted-foreground" />
                </div>
                <ConfirmModal
                  onConfirm={() => {
                    onRemove(document._id);
                    onRemoveImage(document.coverImage ?? "");
                  }}
                >
                  <div
                    role="button"
                    className="rounded-sm p-2 hover:bg-neutral-300 dark:hover:bg-neutral-600"
                  >
                    <Trash className="h-4 w-4 text-muted-foreground" />
                  </div>
                </ConfirmModal>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
