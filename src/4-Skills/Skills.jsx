import React from "react";
import Image from "./Image";

import react from "/img/svg/react_js.svg";
import vue from "/img/svg/vue_js.svg";
import node from "/img/svg/node_js.svg";
import mongoDB from "/img/svg/mongo_db.svg";
import laravel from "/img/svg/laravel.svg";
import css from "/img/svg/css.svg";
import html from "/img/svg/html.svg";
import js from "/img/svg/js.svg";
import mySql from "/img/svg/my_sql.svg";
import postgre from "/img/svg/postgre_sql.svg";
import sqlServer from "/img/svg/sql_server.svg";
import r from "/img/svg/r.svg";
import python from "/img/svg/python.svg";
import tableau from "/img/svg/tableau.svg";

const Skills = () => {
  return (
    <div className="p-3">
      <h1 className="cursor-default my-8 font-bold text-center w-full text-4xl px-5 py-3 tracking-tight">Skills</h1>
      <div className="w-full grid grid-cols-1 justify-items-center items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <Image nama={"React JS"} url={react} />
        <Image nama={"Vue JS"} url={vue} />
        <Image nama={"Node JS"} url={node} />
        <Image nama={"Mongo DB"} url={mongoDB} />
        <Image nama={"Laravel"} url={laravel} />
        <Image nama={"HTML"} url={html} />
        <Image nama={"CSS"} url={css} />
        <Image nama={"Javascript"} url={js} />
        <Image nama={"My SQL"} url={mySql} />
        <Image nama={"Postgre SQL"} url={postgre} />
        <Image nama={"SQL Server"} url={sqlServer} />
        <Image nama={"R"} url={r} />
        <Image nama={"Python"} url={python} />
        <Image nama={"Tableau"} url={tableau} />
      </div>
    </div>
  );
};

export default Skills;
