import React, { useState } from "react";

import { IoSearchSharp, IoArrowBack } from "react-icons/io5";
import Section from "./Section";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2"></div>
      <div className="col-span-8 my-10 h-full">
        <h1 className="text-center py-10 text-3xl">
          Cappsule web development test
        </h1>
        <div className="relative flex flex-row items-center">
          {!searchTerm ? (
            <IoSearchSharp className="absolute top-1/2 left-5 -translate-y-1/2 text-3xl" />
          ) : (
            <IoArrowBack className="absolute top-1/2 left-5 -translate-y-1/2 text-3xl" />
          )}
          <input
            type="text"
            placeholder="Type your medicine here"
            className="w-[100%] p-5 pl-20 rounded-full"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button className="absolute right-10 font-bold text-blue-500">
            Search
          </button>
        </div>
        <hr className="mt-5 mb-10 text-black/50 border-b-2" />
        <Section />
      </div>
      <div className="col-span-2"></div>
    </div>
  );
};

export default Header;
