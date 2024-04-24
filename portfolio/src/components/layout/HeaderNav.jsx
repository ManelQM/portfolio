import React from "react";
import { NavLink } from "react-router-dom";

export const HeaderNav = () => {
  return (
    <header className="header">
        <div className="logo">
            <span>M</span>
      <h3>Manel Montalbán Portfolio</h3>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home" className={({isActive }) => isActive ? "active" : ""}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({isActive }) => isActive ? "active" : ""}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({isActive }) => isActive ? "active" : ""}>Skills</NavLink>
          </li>
          <li>
            <NavLink to="/cv" className={({isActive }) => isActive ? "active" : ""}>CV</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({isActive }) => isActive ? "active" : ""}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderNav;
