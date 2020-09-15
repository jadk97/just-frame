import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = (props) => {

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        <NavLink to="/">JUST FRAME</NavLink>
      </div>

      <div className="navbar-elements">
        <ul>
          <li>Select a character</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;