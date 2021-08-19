import React from "react";
import logo from "../img/LOGO.svg";
import icon from "../img/Group.svg";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>

      <div className="links">
        <p className="active">HOME</p>
        <p>ABOUT</p>
        <p>MENU</p>
      </div>

      <div className="buttons">
        <a href="/" className="button-brown">
          Order Online
        </a>
        <a href="/">
          <img src={icon} alt="icon-shop" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
