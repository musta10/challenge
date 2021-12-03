import React from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";
import { FaInfinity, FaWallet } from "react-icons/fa";

function Header() {
  return (
    <div className="App-Header">
      <div className="header_Left">
        <FaInfinity />
        <p className="separ">ethernity</p>
      </div>
      <nav className="header_Right">
        <ul className="header_List">
          <li>
            <NavLink activeClassName="active" to="/">Marketplace</NavLink>
          </li>
          <li>
           <NavLink activeClassName="active"  to="/">Get ERN</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active"  to="/">Polygon Bridge</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active"  to="/">Farm Stones</NavLink>
          </li>
          <li>
            <NavLink activeClassName="active"  to="/">Staking</NavLink>
          </li>
          <FaWallet className="icon-color" />
          <li>
            <NavLink activeClassName="active"  to="/">Sign-In</NavLink>
          </li>
          <li>
            <NavLink  activeClassName="active" to="/">Sign-Up</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
