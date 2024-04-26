import React from "react";
import { Link } from "react-router-dom";
import { works } from "../data/works";

export const ListWork = ({limit}) => {
  return (
      <section className="works">
        {works.slice(0,limit).map((work) => {
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
 
  );
};

export default ListWork;