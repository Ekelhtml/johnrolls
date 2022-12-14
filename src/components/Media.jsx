import React from "react";
import { FaInstagram, FaYoutube, FaFacebookSquare, FaSpotify } from "react-icons/fa";
import "./Media.css";
import "../index.css";

const Media = () => {
  return (
    <div class="social-container" id="social-container">
      <h1>Social Follow</h1>
      <ul>
        {" "}
        <li>
          <a
            href="https://www.instagram.com/johnrollscomposer/"
            className="instagram social"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.youtube.com/@johnrollsComposer"
            className="youtube social"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.facebook.com/Juanerolls"
            className="facebock social"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="#?"
            className="spotify social"
            target="_blank"
            rel="noreferrer"
          >
           <FaSpotify/>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Media;
