import React from 'react';
import "./index.css";
import { NavLink } from 'react-router-dom';
import { Button, Form } from "react-bootstrap";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <header>
      <h2 className="logo">Hindu Library</h2>
      <form className="search-form">
        <input className="search-input" type="text" placeholder="Enter The Book Name" />
        <a type="submit" className="search-btn"><IoIosSearch className="search-ico" /></a>
      </form>
      <nav className="nav-links">
        <ul>
          <li className="links">
            <NavLink to="#" className="hyperlink">Popular</NavLink>
          </li>
          <li className="links">
            <NavLink to="#" className="hyperlink">Must Read</NavLink>
          </li>
          <li className="links">
            <NavLink to="#" className="hyperlink">Newest</NavLink>
          </li>
        </ul>
      </nav>
      <div className="open-navigation-container"> 
        <GiHamburgerMenu className="open-navigation" />
      </div>
    </header>
  );
}

export default Header;