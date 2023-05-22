// components/Header.js
import React from 'react';
import {NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center justify-content-between">
      <h1 className="logo"><a href="/">Bikin</a></h1>
      <nav id="navbar" className="navbar">
      <ul>
        <li>
          <NavLink exact to="/" className="nav-link action" aria-current="page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" className="nav-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="nav-link">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav> 
    </div>
  </header>
  );
};

export default Header;
