import React from "react";
import { NavLink } from "react-router-dom";
import "./css/header.css";
import { FaInfinity, FaWallet } from "react-icons/fa";

const Header = () => {
  return (
    <div className="App-Header">
      <div className="header_Left">
        <FaInfinity />
        <p className="separ">ethernity</p>
      </div>
      <nav className="header_Right">
        <ul className="header_List">
          <li>
            <NavLink to="/">Marketplace</NavLink>
          </li>
          <li>
            <NavLink to="/">Get ERN</NavLink>
          </li>
          <li>
            <NavLink to="/">Polygon Bridge</NavLink>
          </li>
          <li>
            <NavLink to="/">Farm Stones</NavLink>
          </li>
          <li>
            <NavLink to="/">Staking</NavLink>
          </li>
          <FaWallet className="icon-color" />
          <li>
            <NavLink to="/">Sign-In</NavLink>
          </li>
          <li>
            <NavLink to="/">Sign-Up</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
