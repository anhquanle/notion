import { Navbar } from "./_components/navbar";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="min-h-screen dark:bg-[#1f1f1f]">
        <Navbar />
        <main className="h-full pt-40">{children}</main>
      </div>
    </>
  );
};

export default MarketingLayout;
