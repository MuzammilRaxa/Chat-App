import React from "react";
import User from "../images/jslogo.jpg";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">WHATS APP</span>
      <div className="user">
        <img src={User} alt="" />
        <span>Ahmed</span>
        <button>LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
