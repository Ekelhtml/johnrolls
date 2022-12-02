import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <nav className="navbar">
        <ul>
          <li className="nav-item">
            <a href="/">Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#bio">Bio</a>
          </li>
          <li className="nav-item">
            <a href="#slider-container">Galeria</a>
          </li>
          <li className="nav-item">
            <a href="#demo">Demo</a>
          </li>
          <li className="nav-item">
            <a href="#social-container">Media</a>
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
