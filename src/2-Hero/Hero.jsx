import React from "react";
import TypewriterComponent from "typewriter-effect";

const Hero = () => {
  return (
    <section className="mx-auto my-32 max-w-4xl text-center">
      <h1 className="uppercase font-bold text-7xl">
        We Create you the
        <TypewriterComponent
          options={{
            strings: ["best application", "best solution", "best of the best"],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
      <p className="text-sm text-[#898989] font-light mt-3">If you need a modern, interactive, and eye catching application. You’re in the right place</p>
      <button className="border border-[#2E3745] font-semibold px-4 py-3 mt-10 rounded-lg">Contact Us</button>
    </section>
  );
};

export default Hero;
