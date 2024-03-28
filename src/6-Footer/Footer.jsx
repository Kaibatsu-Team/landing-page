import React from "react";

const Footer = () => {
  return (
    <div className="footer bg-[#2e3745] text-white cursor-default p-10">
      <div className="grid grid-cols-1 mb-16 xl:mb-10">
        <h1 className="font-bold m-5 text-2xl text-center tracking-wider">Kaibatsu</h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center align-center md:grid-cols-2">
        <div className="page-1 text-center m-2 text-sm">
          <p className="p-2">Team</p>
          <p className="p-2">Skills</p>
          <p className="p-2">Projects</p>
        </div>
        <div className="page-2 text-sm my-5">
          <p className="italic mt-3 mb-5 pl-10">Hubungi Kami</p>
          <div className="w-100">
            <input className="w-[70%] text-[#2e3745] p-1 rounded-sm xl:w-[80%]" type="text" name="contact" id="contact" autoComplete="off" />
            <button className="p-2 ml-3 w-[10%]" type="submit">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
