import React from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./navbar.css";
import logo from '../../assets/Logo.svg'

function Navbar() {
  return (
    <div className="content__navbar">
      <div className="content__navbar-links">
        <div className="content__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
