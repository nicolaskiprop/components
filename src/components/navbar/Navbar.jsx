import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from "../../assets/Logo.svg";

function Navbar() {
  return (
    <div className="content__navbar">
      <div className="content__navbar-links">
        <div className="content__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="content__navbar-links_container">
          <p>
            <a href="#Home">Home</a>
            <a href="#whatisthis">what is this?</a>
            <a href="#Home">Open AI</a>
            <a href="#Home">Case Studies</a>
            <a href="#Home">Library</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
