import React from "react";

const Projects = () => {
  return (
    <div className="px-3 mb-3">
      <h1 className="cursor-default my-8 font-bold text-center w-full text-4xl px-5 py-3 tracking-tight">Projects</h1>
      <div className="wrap-card cursor-defaul p-4">
        <div className="card">
          <div className="img-card relative w-full my-3">
            <img className="max-w-[300px] max-h-[300px] mx-auto pt-5 bg-center bg-cover" src="https://source.unsplash.com/random/?Cryptocurrency&1" alt="Project 1" />
            <span className="absolute bottom-3 left-20 text-white tracking-wide opacity-100 z-99">Project 1</span>
          </div>
          <div className="content-card bg-white max-w-[300px] text-center px-5 pt-10 pb-5 mx-auto -mt-10 mb-3 text-sm flex items-center">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam ex voluptatum nemo esse aperiam numquam consequatur quos nesciunt saepe ratione!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
