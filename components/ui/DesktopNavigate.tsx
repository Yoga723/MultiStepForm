"use client";
import { navigateProps } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopNavigate = ({ backTo, headTo }: navigateProps) => {
  const pathName = usePathname();
  return (
    <div className="max-md:hidden w-full h-16 mb-2 flex justify-between items-center">
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
        className="flex items-center justify-center bg-[rgb(1,41,91)] text-white text-base font-Ubuntu rounded-xl py-4 px-6 h-12"
      >
        Next Step
      </Link>
    </div>
  );
};

export default DesktopNavigate;
