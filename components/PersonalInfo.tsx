"use client";
import React, { useState } from "react";
import DesktopNavigate from "./ui/DesktopNavigate";
import { summaryData } from "@/utils";

const PersonalInfo = () => {
  const [showError, setShowError] = useState(false);
  const [personalFormData, setPersonalFormData] = useState({
    name: summaryData.name ? summaryData.name : "",
    email: summaryData.email ? summaryData.email : "",
    phoneNumber: summaryData.phoneNumber ? summaryData.phoneNumber : "",
  });

  const handleInputChange = (e: any) => {
    // Nyokot property "id" jeng "value" tina input tag
    const { id, value } = e.target;
    const numberRegex = /^$|^\d+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Ke di pindahken

    if (id === "phoneNumber" && !numberRegex.test(value)) {
      setShowError(true);
      return;
    }
    setShowError(false);
    setPersonalFormData({ ...personalFormData, [id]: value });
  };

  return (
    <section className="z-20 relative w-11/12 md:w-10/12 overflow-hidden ">
      <h1 className="text-3xl font-Ubuntu-700 text-[rgb(1,41,91)] my-2 mt-6">
        Personal info
      </h1>
      <h2 className="text-[#9699ab] font-Ubuntu leading-normal">
        Please provide your name, email address, and phone number.
      </h2>
      <div className="flex flex-col justify-between  md:h-[31rem] px-1 ">
        <form className="grid md:grid-rows-10 h-full pt-6 gap-5 pb-8 md:pb-0">
          <div className="flex flex-col row-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="font-Ubuntu text-base text-[rgb(1,41,91)]"
              >
                Name
              </label>
              {showError && (
                <p className="text-[0.85rem] font-bold text-red-600">
                  This field is required
                </p>
              )}
            </div>
            <input
              id="name"
              onChange={handleInputChange}
              value={personalFormData.name}
              type="text"
              placeholder="e.g. Stephen King"
              className={`personalInputStyle ${
                showError ? "border-red-500" : "border-gray-300 "
              }`}
            />
          </div>
          <div className="flex flex-col row-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="font-Ubuntu text-base text-[rgb(1,41,91)]"
              >
                Email
              </label>
              {showError && (
                <p className="text-[0.85rem] font-bold text-red-600">
                  This field is required
                </p>
              )}
            </div>
            <input
              id="email"
              onChange={handleInputChange}
              value={personalFormData.email}
              type="text"
              placeholder="e.g. Stephenking@lorem.com"
              className={`personalInputStyle ${
                showError ? "border-red-500" : "border-gray-300 "
              }`}
            />
          </div>
          <div className="flex flex-col row-span-2">
            <div className="flex justify-between">
              <label
                htmlFor="name"
                className="font-Ubuntu text-base text-[rgb(1,41,91)]"
              >
                Phone Number
              </label>
              {showError && (
                <p className="text-[0.85rem] font-bold text-red-600">
                  This field is required
                </p>
              )}
            </div>
            <input
              id="phoneNumber"
              onChange={handleInputChange}
              value={personalFormData.phoneNumber}
              type="text"
              placeholder="+62 812 334 566"
              className={`personalInputStyle ${
                showError ? "border-red-500" : "border-gray-300 "
              }`}
            />
          </div>
          {/* Hidden if mobile */}
          <div className="max-md:hidden row-span-4 flex items-end">
            <DesktopNavigate
              headTo={"plan"}
              stepState={"personalInfo"}
              formData={personalFormData}
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default PersonalInfo;
