import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header>
      <div className="relative flex items-center justify-end mr-5 mt-5 lg:hidden">
        <div className="z-20">
          <Hamburger rounded toggled={isOpen} toggle={setOpen} />
        </div>
        <ul
          className={`absolute bg-slate-100 left-0 right-0 top-0 flex-col items-center justify-between w-screen min-h-[350px] ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li className="my-8 uppercase">Team</li>
          <li className="my-8 uppercase">Skills</li>
          <li className="my-8 uppercase">Project</li>
        </ul>
      </div>

      <div className="hidden lg:flex justify-between items-center my-16 max-w-7xl mx-auto w-full">
        <p className="font-semibold text-4xl">Kaibatsu</p>
        <ul className="flex list-none gap-x-28 hover:cursor-pointer">
          <li className="hover:underline text-xl">Team</li>
          <li className="hover:underline text-xl">Skills</li>
          <li className="hover:underline text-xl">Project</li>
        </ul>
        <button className="bg-[#2E3745] font-semibold text-white px-4 py-3 rounded-lg">
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;