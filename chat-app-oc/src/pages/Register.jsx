import React from "react";
import "../style.scss";
import Add from "../images/add_image.png";

function Register() {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input className="fileField" type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avtar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
}

export default Register;
