import React from "react";
import logo from "../assets/adım1/logo.svg";
import { useLocation } from "react-router-dom";
import "../css/Header.css";
import { Nav } from "reactstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const location = useLocation();
  return (
    <div className="header-content">
      <img className="header-content-img" src={logo} alt={logo}></img>
      {location.pathname === "/order" && (
        <Nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Ana Sayfa
              </Link>
              <span> -</span>
            </li>
            <li className="nav-item">
              <Link to="/order" className="nav-link">
                Sipariş Oluştur
              </Link>
            </li>
          </ul>
        </Nav>
      )}
    </div>
  );
}
