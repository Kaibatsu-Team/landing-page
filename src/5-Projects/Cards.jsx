import React from "react";

const Cards = ({ nama, link, gambar, deskripsi }) => {
  return (
    <div className="card">
      <div className="img-card w-full my-3 group mx-auto">
        <img className="projects-img" src={gambar} alt={nama} />
        <div className="relative text-center w-50 mx-auto -mt-6">
          <span className="projects-label">
            <a href={link}>{nama}</a>
          </span>
        </div>
      </div>
      <div className="projects-deskripsi">
        <p>{deskripsi}</p>
      </div>
    </div>
  );
};

export default Cards;
