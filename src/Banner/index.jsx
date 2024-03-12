import React from "react";

const Index = () => {
  return (
    <section className="relative mb-60">
      <div className="bg-[#2E3745] h-[581px] -z-10 absolute left-0 right-0 -bottom-32"></div>
      <div className="flex justify-around mb-20">
        <div className="relative overflow-hidden h-fit border-[18px] border-white">
          <img
            className="w-[300px] h-[400px] object-cover"
            src="img/sandi.jpg"
            alt="Arisandi Satria Jeujanan"
          />
          <div className="absolute bottom-3 left-5 font-semibold text-white flex flex-col gap-y-3 inset-x-0 leading-4">
            <p className="text-2xl">Arisandi S. J.</p>
            <p className="text-sm">Frontend Developer</p>
          </div>
        </div>
        <div className="relative overflow-hidden h-fit border-[18px]">
          <img
            className="w-[300px] h-[400px] object-cover"
            src="img/pandu.jpg"
            alt="Ilham Pandu Prasetyo"
          />
          <div className="absolute bottom-3 left-5 font-semibold text-white flex flex-col gap-y-3 inset-x-0 leading-4">
            <p className="text-2xl">I. Pandu P.</p>
            <p className="text-sm">Backend Developer, Data Analyst</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center text-center text-white">
        <div>
          <p className="text-8xl mb-6">6</p>
          <p className="font-extralight text-xl">Project Finished</p>
        </div>
        <div>
          <p className="text-8xl mb-6">94%</p>
          <p className="font-extralight text-xl">Client Satisfaction</p>
        </div>
        <div>
          <p className="text-8xl mb-6">24</p>
          <p className="font-extralight text-xl">Consultation</p>
        </div>
      </div>
    </section>
  );
};

export default Index;
