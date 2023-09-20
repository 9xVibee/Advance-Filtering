/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

const Nav = ({query, handleInputChange}) => {
  return (
    <nav>
      <div className="nav-container">
        <input
          type="text"
          placeholder="Enter your search shoes."
          className="search-input"
          onChange={handleInputChange}
        />
      </div>

      <div className="profile-container">
        <a href="#" className="nav-icons">
          <FiHeart />
        </a>

        <a href="#" className="nav-icons">
          <AiOutlineUserAdd />
        </a>

        <a href="#" className="nav-icons">
          <AiOutlineShoppingCart />
        </a>
      </div>
    </nav>
  );
};

export default Nav;
