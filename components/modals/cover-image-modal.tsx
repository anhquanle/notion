"use client";

import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";

import * as React from "react";
import { useMutation } from "convex/react";
import { useCoverImage } from "@/hooks/use-cover-image";

import { SingleImageDropzone } from "@/components/upload/single-image";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  UploaderProvider,
  type UploadFn,
} from "@/components/upload/uploader-provider";

import { useParams } from "next/navigation";
import { useEdgeStore } from "@/lib/edgestore";

export const CoverImageModal = () => {
  const update = useMutation(api.documents.update);
  const params = useParams();
  const coverImage = useCoverImage();
  const { edgestore } = useEdgeStore();

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const uploadFn: UploadFn = React.useCallback(
    async ({ file, onProgressChange, signal }) => {
      setIsSubmitting(true);

      const res = await edgestore.publicFiles.upload({
        file,
        signal,
        onProgressChange,
        options: {
          replaceTargetUrl: coverImage.url,
        },
      });

      // Update vào database (Convex)
      await update({
        id: params.documentId as Id<"documents">,
        coverImage: res.url,
      });

      setIsSubmitting(false);
      coverImage.onClose();

      return res;
    },
    [edgestore, update, params.documentId, coverImage]
  );

  return (
    <Dialog open={coverImage.isOpen} onOpenChange={coverImage.onClose}>
      <DialogContent>
        <DialogTitle>
          <p className="text-center text-lg font-semibold">Cover Image</p>
        </DialogTitle>

        <UploaderProvider uploadFn={uploadFn} autoUpload>
          <SingleImageDropzone
            className="w-full outline-none mt-4"
            disabled={isSubmitting}
          />
        </UploaderProvider>
      </DialogContent>
    </Dialog>
  );
};
