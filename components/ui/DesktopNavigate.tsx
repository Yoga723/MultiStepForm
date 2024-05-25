"use client";
import { navigateProps, handlePersonalData, summaryData } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopNavigate = ({
  backTo,
  headTo,
  stepState,
  formData,
}: navigateProps) => {
  const pathName = usePathname();

  const saveData = () => {
    event?.preventDefault();
    switch (stepState) {
      case "personalInfo":
        handlePersonalData(formData);
        break;

      case "step":
        console.log("Ini State Dari Step");
      default:
        break;
    }
  };

  return (
    <div className=" max-md:hidden w-full h-16 mb-2 flex justify-between items-center">
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
        <button
          type="submit"
          onClick={saveData}
        >
          Next Step
        </button>
      </Link>
    </div>
  );
};

export default DesktopNavigate;
