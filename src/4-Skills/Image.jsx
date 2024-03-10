import React from "react";

const Image = ({ nama, url }) => {
  return <img className="skills-img" src={url} alt={nama} />;
};

export default Image;
