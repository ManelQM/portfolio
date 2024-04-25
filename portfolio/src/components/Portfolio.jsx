import React from "react";
import { Link } from "react-router-dom";
import { works } from "../data/works";

export const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>
      <section className="works">
        {works.map((work) => {
          return (
            <article key={work.id} className="work-item">
              <div className="mask">
                <img src={"/images/" + work.id + ".png"}/>
              </div>
              <h2>
                <Link to={"/work/" + work.id}>{work.nombre}</Link>
              </h2>
              <h3>{work.stack}</h3>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Portfolio;
