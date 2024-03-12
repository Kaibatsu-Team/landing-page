import React from "react";
import Image from "./Image";

import listSkills from "./listSkills.json";

const Skills = () => {
  return (
    <div className="p-3 my-5">
      <h1 className="heading-section">Skills</h1>
      <div className="w-full grid grid-cols-1 justify-items-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {listSkills.map((item, index) => {
          return <Image key={`${item.nama}-${index}`} nama={item.nama} url={item.url} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
