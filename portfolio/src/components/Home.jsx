import React from "react";
import {Link} from "react-router-dom"
export const Home = () => {
  return (
    <div className="home">
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt <strong>ut labore et dolore</strong> magna aliqua. Pellentesque
        habitant morbi tristique senectus. 
      </h1>
      <h2>
        Tellus id interdum velit laoreet id donec. Ut lectus arcu bibendum at
        varius vel pharetra.<Link to="/contact">Contacto</Link>
      </h2>

<section className="last-works">
<h2 className="heading">Algunos de mis proyectos</h2>
<p> Estos son algunos de mis trabajos de desarrollo web</p>
<div className="works"></div>
</section>

    </div>
  );
};
export default Home; 
