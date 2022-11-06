import React from "react";
import User from "../images/Boy-Header.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">WHATS APP</span>
      <div className="user">
        <img src={User} alt="" />
        <span>Ahmed</span>
        <button onClick={() => signOut(auth)}>LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
