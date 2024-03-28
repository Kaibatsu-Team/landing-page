import React, { forwardRef } from "react";
import Cards from "./Cards";
import listProjects from "./listProjects.json";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="px-3 mb-3">
      <h1 className="cursor-default my-8 font-bold text-center w-full text-4xl px-5 py-3 tracking-tight">Projects</h1>
      <div className="wrap-card cursor-default p-4 grid grid-cols-1">
        {listProjects.map((item, index) => {
          return <Cards key={`${item.link}-${index}`} nama={item.nama} link={item.link} gambar={item.gambar} deskripsi={item.deskripsi} />;
        })}
      </div>
    </div>
  );
});

export default Projects;
