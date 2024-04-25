import React from "react";
import {Link} from "react-router-dom";
import { works } from "../data/works";

export const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>
      {works.map((work) => {
        return (
          <article key={work.id}>
            <h2><Link to={"/work/"+ work.id}>{work.nombre}</Link></h2>
            <h3>{work.stack}</h3>
          </article>
        );
      })}
    </div>
  );
};

export default Portfolio; 