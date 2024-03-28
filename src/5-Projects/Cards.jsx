import React from "react";

const Cards = ({ nama, link, gambar, deskripsi }) => {
  return (
    <div className="card">
      <div className="img-card relative w-full my-3 group">
        {/* <img className="max-w-[350px] mx-auto pt-5 bg-center bg-cover" src="https://source.unsplash.com/random/500x500" alt="Project 1" /> */}
        <img className="projects-img" src={gambar} alt={nama} />
        <span className="projects-label">
          <a href={link}>{nama}</a>
        </span>
      </div>
      <div className="projects-deskripsi">
        <p>{deskripsi}</p>
      </div>
    </div>
  );
};

export default Cards;
