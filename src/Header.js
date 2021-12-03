import React from "react";
import "./css/header.css";
import { FaInfinity, FaWallet } from "react-icons/fa";

function Header() {
  return (
    <div className="App-Header">
      <div className="header_Left">
        <FaInfinity />
        <p>ethernity</p>
      </div>
      <navbar className="header_Right">
        <ul>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Get ERN</a></li>
            <li><a href="#">Polygon Bridge</a></li>
            <li><a href="#">Farm Stones</a></li>
            <li><a href="#">Staking</a></li>
            <FaWallet/>
            <li><a href="#">Sign-In</a></li>
            <li><a href="#">Sign-Up</a></li>
        </ul>
      </navbar>
    </div>
  );
}

export default Header;
