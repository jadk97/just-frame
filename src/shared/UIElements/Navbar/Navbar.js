import React from "react";
import "./Navbar.css";

const Navbar = (props) => {

  return (
    <nav className="navbar">
      <div className="navbar-logo-container">
        JUST FRAME
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