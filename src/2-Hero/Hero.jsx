import React from "react";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section className="mx-auto my-32 max-w-4xl text-center">
      <h1 className="uppercase font-bold text-4xl lg:text-7xl">
        We Create you the
        <TypewriterComponent
          options={{
            strings: ["best application", "best solution", "best of the best"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="text-xs mx-5 lg:text-sm text-[#898989] font-light mt-3">
        If you need a modern, interactive, and eye catching application. You’re
        in the right place
      </p>
      <button className="relative px-4 py-3 mt-10 font-semibold rounded-lg overflow-hidden border border-[#2E3745] text-[#2E3745] shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#2E3745] before:duration-300 before:ease-out hover:text-white hover:shadow-[#2E3745] hover:before:h-40 hover:before:w-40">
        <span class="relative z-10">Contact Us</span>
      </button>
    </section>
  );
};

export default Hero;
