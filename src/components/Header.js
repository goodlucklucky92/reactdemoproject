// components/Header.js
import React from 'react';
import {NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center justify-content-between">
      <h1 class="logo"><a href="/">Bikin</a></h1>
      <nav id="navbar" class="navbar">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="nav-link action" aria-current="page">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="nav-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" activeClassName="nav-link">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="nav-link">
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
