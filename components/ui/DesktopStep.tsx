"use client";
import Image from "next/image";
import React from "react";
import StepsCounter from "./StepsCounter";
import bgDesktopSide from "@/assets/images/bg-sidebar-desktop.svg";

const DesktopStep = () => {
  return (
    <aside className="max-md:hidden relative z-10 flex-[0.26] p-4 rounded-xl overflow-hidden">
      <Image
        src={bgDesktopSide}
        alt="bg-mobile"
        className={`max-md:hidden absolute left-0 top-0 h-full w-full object-cover`}
      />
      <StepsCounter />
    </aside>
  );
};

export default DesktopStep;
