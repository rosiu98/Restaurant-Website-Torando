import React from "react";
import logo from "../img/LOGO.svg";
import icon from "../img/Group.svg";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  // const currentRoute = useHistory().location.pathname.toLowerCase();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
        <Link to="/cart">
          <img src={icon} alt="icon-shop" />
          {cartItems.length > 0 && <span>{cartItems.length}</span>}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
