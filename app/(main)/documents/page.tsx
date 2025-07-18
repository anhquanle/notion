"use client";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import { toast } from "sonner";
import { useUser } from "@clerk/clerk-react";
import { useRouter } from "next/navigation";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";

const DocumentsPage = () => {
  const { user } = useUser();
  const create = useMutation(api.documents.create);
  const router = useRouter();

  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) => {
      router.push(`/documents/${documentId}`);
    });

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created!",
      error: "Failed to create a new note.",
    });
  };

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center space-y-4">
        <Image src="/empty.svg" height="300" width="300" alt="Empty" priority />
        <h2 className="text-lg font-medium">
          Welcome to {user?.firstName}&apos;s Notion{" "}
        </h2>
        <Button onClick={onCreate}>
          <PlusCircle className="h-4 w-4 mr-2" />
          Create a note
        </Button>
      </div>
    </>
  );
};

export default DocumentsPage;
