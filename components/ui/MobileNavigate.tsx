"use client";
import { navigateProps } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MobileNavigate = ({ backTo, headTo,stepState }: navigateProps) => {
  const pathName = usePathname();
  return (
    <div className="md:hidden w-full h-20 flex justify-between items-center absolute right-0 bottom-0 border-t-2 shadow-inner bg-[hsl(0,0%,100%)] px-4">
      <div className={`${pathName != "/" ? "visible" : "invisible"}`}>
        <Link
          href={`/${backTo}`}
          className="text-[#9699ab] font-Ubuntu text-base"
        >
          Go Back
        </Link>
      </div>
      <Link
        href={`/${headTo}`}
        className="flex items-center justify-center bg-[rgb(1,41,91)] text-white text-base font-Ubuntu rounded-lg py-4 px-6 h-12"
      >
        Next Step
      </Link>
    </div>
  );
};

export default MobileNavigate;
