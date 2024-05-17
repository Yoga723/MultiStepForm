import DesktopStep from "@/components/ui/DesktopStep";
import MobileStep from "@/components/ui/MobileStep";
import React from "react";
import Plans from "@/components/Plans";
import MobileNavigate from "@/components/ui/MobileNavigate";

const page = () => {
  return (
    <main className="mainStyle">
      <MobileStep />
      <section className="formSection">
        <DesktopStep />
        <div className="flex flex-[1] w-full h-full  justify-center">
          <Plans />
        </div>
      </section>
      <MobileNavigate
        backTo="/"
        headTo="add-ons"
      />
    </main>
  );
};

export default page;
