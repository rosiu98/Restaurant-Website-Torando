import React from "react";
import logo from "../img/LOGO.svg";
import icon from "../img/Group.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  // const currentRoute = useHistory().location.pathname.toLowerCase();

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="LOGO" />
      </div>

      <div className="links">
        {/* <Link className={currentRoute.includes("/") && "active"} to="/home">
          HOME
        </Link> */}
        <NavLink activeClassName="active" to="/" exact>
          HOME
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          ABOUT
        </NavLink>
        <NavLink activeClassName="active" to="/menu">
          MENU
        </NavLink>
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
