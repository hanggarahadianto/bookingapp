"use client";

import clsx from "clsx";
import { useState } from "react";
import Search from "./Search";
import Logo from "./Logo";
import {
  BeakerIcon,
  MagnifyingGlassIcon,
  MicrophoneIcon,
} from "@heroicons/react/24/solid";
import Dashboard from "@/app/dashboard/Dashboard";

const Navbar = () => {
  const [isExpanded, setIsExtended] = useState(false);

  const toggleExpanded = () => {
    setIsExtended((prevIsExpanded) => !prevIsExpanded);
  };

  const headerContainerClasses = clsx(
    "container",
    "mx-auto",
    "flex",
    "justify-between",
    "bg-white",
    "py-8",
    {
      "h-[7.5rem]": !isExpanded,
      "h-[13rem]": isExpanded,
    }
  );

  const searchContainerClasses = clsx(
    "search-container",
    "flex",
    "flex-row",
    "rounded-full",
    "p-4",
    "justify-center",
    "items-center",
    "border",
    "drop-shadow-md",
    "bg-white",
    {
      "border-b-0": !isExpanded,
      "border-b-8": isExpanded,
    }
  );

  return (
    <div className="flex border-b bg-white z-50 w-full">
      <div className={headerContainerClasses}>
        <Logo />
        {isExpanded ? (
          <Search />
        ) : (
          <button onClick={toggleExpanded} className={searchContainerClasses}>
            <div className="input flex items-center border-r px-4">
              <p>Anywhere</p>
            </div>
            <div className="input flex items-center border-r px-4">
              <p>Anydate</p>
            </div>
            <div className="input flex items-center border-r px-4">
              <p>Add Guests</p>
            </div>
            <div className="search-btn px-4 rounded-full bg-primary h-10 w-10 relative">
              <MagnifyingGlassIcon className="h-5 w-5 text-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
          </button>
        )}
        <div>user</div>
      </div>
    </div>
  );
};

export default Navbar;
