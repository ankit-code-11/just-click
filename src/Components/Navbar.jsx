import React from "react";
import "../Styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="header">Just Click</h1>
      <div className='navbar-list'>
        <ul className='list'>
          <li>Home</li>
          <li>Drop</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
