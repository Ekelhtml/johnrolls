import React from "react";
import {Link} from 'react-scroll';
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <nav className="navbar">
        <ul>
          <li className="nav-item">
          <Link to="hero" spy={true} smooth={true} offset={-100} duration={1000} >Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to="bio" spy={true} smooth={true} offset={-100} duration={700} >Bio</Link>
          </li>
          <li className="nav-item">
          <Link  to="slider-container" spy={true} smooth={true} offset={-100} duration={700} >Galeria</Link>
          </li>
          <li className="nav-item">
          <Link  to="demo" spy={true} smooth={true} offset={-100} duration={700} >Demo</Link>
          </li>
          <li className="nav-item">
          <Link  to="social-container" spy={true} smooth={true} offset={-180} duration={700} >Media</Link>
          </li>
        </ul>
      </nav>
      <div className="bottom">
        <span className="line"></span>
        <p>Ekel Leal 2022 - Todos los derechos reservados</p>
      </div>
    </div>
  );
};

export default Footer;
