import React from "react";
import DesktopNavigate from "./ui/DesktopNavigate";

const Plans = () => {
  return (
    <section className="z-20 relative w-11/12 md:w-10/12  overflow-hidden">
      <h1 className="text-3xl font-Ubuntu-700 text-[rgb(1,41,91)] my-2 mt-6">
        Personal info
      </h1>
      <h2 className="text-[#9699ab] font-Ubuntu leading-normal">
        Please provide your name, email address, and phone number.
      </h2>
      <div className="flex flex-col justify-between  md:h-[31rem] px-1">
        <form>
          <div className="flex flex-col mt-6">
            <label
              htmlFor="name"
              className="font-Ubuntu text-base text-[rgb(1,41,91)]"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Stephen King"
              className="border border-gray-300 rounded p-2 font-Ubuntu-500 text-[rgb(1,41,91)]"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label
              htmlFor="name"
              className="font-Ubuntu text-base text-[rgb(1,41,91)]"
            >
              Email
            </label>
            <input
              id="email"
              type="text"
              placeholder="e.g. Stephenking@lorem.com"
              className="border border-gray-300 rounded p-2 font-Ubuntu-500 text-[rgb(1,41,91)]"
            />
          </div>
          <div className="flex flex-col mt-6">
            <label
              htmlFor="name"
              className="font-Ubuntu text-base text-[rgb(1,41,91)]"
            >
              Phone Number
            </label>
            <input
              id="phone"
              type="number"
              placeholder="+62 812 334 566"
              className="border remove-arrow border-gray-300 rounded p-2 font-Ubuntu-500 text-[rgb(1,41,91)]"
            />
          </div>
        </form>
        {/* Hidden if mobile */}
        <DesktopNavigate backTo={`/`} headTo={"add-ons"} />
      </div>
    </section>
  );
};

export default Plans;
