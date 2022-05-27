import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  render() {
    return (
      <nav className="header-container">
        <NavLink exact className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/products">
          Products
        </NavLink>
      </nav>
    );
  }
}

export default Header;
