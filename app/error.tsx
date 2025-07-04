"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <>
      <div className="h-full flex flex-col items-center justify-center space-y-4 dark:bg-[#1f1f1f]">
        <Image
          src="/not-found-error-alert-svgrepo-com.svg"
          height="256"
          width="256"
          alt="Error"
        />
        <h2 className="text-3xl font-medium mb-10">Something went wrong!</h2>
        <Button>
          <Link href="/documents">
            <p>Go back</p>
          </Link>
        </Button>
      </div>
    </>
  );
};

export default Error;
