import React, { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

const Header = ({
  scrollEffect,
  teamRef,
  skillRef,
  projectRef,
  contactRef,
}) => {
  const [isOpen, setOpen] = useState(false);

  const handleScroll = (ref) => {
    scrollEffect(ref);
    setOpen(false);
  };

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
          <li
            className="my-8 uppercase"
            onClick={() => {
              handleScroll(teamRef);
            }}
          >
            Team
          </li>
          <li
            className="my-8 uppercase"
            onClick={() => {
              handleScroll(skillRef);
            }}
          >
            Skills
          </li>
          <li
            className="my-8 uppercase"
            onClick={() => {
              handleScroll(projectRef);
            }}
          >
            Project
          </li>
        </ul>
      </div>

      <div className="hidden lg:flex justify-between items-center my-16 max-w-7xl mx-auto w-full">
        <a className="font-semibold text-4xl" href={"/"}>
          Kaibatsu
        </a>
        <ul className="flex list-none gap-x-28 hover:cursor-pointer">
          <li
            className="hover:underline text-xl"
            onClick={() => {
              handleScroll(teamRef);
            }}
          >
            Team
          </li>
          <li
            className="hover:underline text-xl"
            onClick={() => {
              handleScroll(skillRef);
            }}
          >
            Skills
          </li>
          <li
            className="hover:underline text-xl"
            onClick={() => {
              handleScroll(projectRef);
            }}
          >
            Project
          </li>
        </ul>
        <button
          className="bg-[#2E3745] font-semibold text-white px-4 py-3 rounded-lg hover:opacity-90"
          onClick={() => {
            handleScroll(contactRef);
          }}
        >
          Contact Us
        </button>
      </div>
    </header>
  );
};

export default Header;
