"use client";

import { Spinner } from "@/components/spinner";
import { SearchCommand } from "@/components/search-command";

import React from "react";
import { redirect } from "next/navigation";
import { Navigation } from "@/app/(main)/_components/navigation";
import { useConvexAuth } from "convex/react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <>
        <div className="h-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      </>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <div className="h-full flex dark:bg-[#1f1f1f]">
      <Navigation />
      <main className="flex-1 h-full overflow-y-auto">
        <SearchCommand />
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
