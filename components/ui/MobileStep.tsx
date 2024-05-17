import React from "react";
import StepsCounter from "./StepsCounter";
import Image from "next/image";

import bgMobileSide from "@/assets/images/bg-sidebar-mobile.svg";
const MobileStep = () => {
  return (
    <aside>
      <div className="md:hidden">
        <StepsCounter />
      </div>
      <Image
        src={bgMobileSide}
        alt="bg-mobile"
        className={`md:hidden absolute -z-10 w-full left-0 top-0`}
      />
    </aside>
  );
};

export default MobileStep;
