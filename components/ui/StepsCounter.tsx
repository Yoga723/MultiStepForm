"use client";
import React from "react";
import { circleArr } from "@/utils";
import { usePathname } from "next/navigation";
const StepsCounter = () => {
  const pathName = usePathname();
  return (
    <aside className="relative flex md:flex-col justify-center gap-4 md:gap-8 mt-8 z-20">
      {circleArr.map((circle, index) => {
        return (
          <div
            key={index}
            className="flex gap-3"
          >
            <div
              className={`flex items-center justify-center border-2 border-[#D6D9E6] rounded-full w-10 h-10 font-Ubuntu ${
                pathName == circle.pathName
                  ? "bg-[#BFE2FD] text-black"
                  : "text-white"
              }`}
            >
              <p className="font-Ubuntu-500">{circle.number}</p>
            </div>
            <div className="text-white font-Ubuntu-700 max-md:hidden">
              <p className="flex flex-col">
                <span className="text-xs font-Ubuntu">
                  STEP {circle.number}
                </span>
                {circle.title}
              </p>
            </div>
          </div>
        );
      })}
    </aside>
  );
};

export default StepsCounter;
