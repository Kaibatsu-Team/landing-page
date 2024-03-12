import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center my-16 max-w-7xl mx-auto w-full">
      <p className="font-semibold text-4xl">Kaibatsu</p>
      <ul className="flex list-none gap-x-28 hover:cursor-pointer">
        <li className=" hover:underline text-xl">Team</li>
        <li className=" hover:underline text-xl">Skills</li>
        <li className=" hover:underline text-xl">Project</li>
      </ul>
      <button className="bg-[#2E3745] font-semibold text-white px-4 py-3 rounded-lg">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
