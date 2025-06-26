import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative flex items-center justify-center w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:h-[250px] md:w-[250px]">
          <Image
            src="/folders.png"
            width={128}
            height={128}
            className="object-contain "
            alt="Document"
          />
        </div>
        <div className="relative items-center justify-center w-[250px] h-[250px] hidden md:flex">
          <Image
            src="/read.png"
            width={128}
            height={128}
            className="object-contain"
            alt="Document"
          />
        </div>
      </div>
    </div>
  );
};
