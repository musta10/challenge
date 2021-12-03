import React from "react";
import { Link } from "react-router-dom";
import "./css/header.css";
import { FaInfinity, FaWallet } from "react-icons/fa";

function Header() {
  return (
    <div className="App-Header">
      <div className="header_Left">
        <FaInfinity />
        <p>ethernity</p>
      </div>
      <nav className="header_Right">
        <ul>
          <li>
            <Link to="/">Marketplace</Link>
          </li>
          <li>
           <Link to="/">Get ERN</Link>
          </li>
          <li>
            <Link to="/">Polygon Bridge</Link>
          </li>
          <li>
            <Link to="/">Farm Stones</Link>
          </li>
          <li>
            <Link to="/">Staking</Link>
          </li>
          <FaWallet />
          <li>
            <Link to="/">Sign-In</Link>
          </li>
          <li>
            <Link to="/">Sign-Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
