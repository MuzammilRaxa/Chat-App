import React from "react";
import User from "../images/Boy-Header.png";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user"/>
      </div>
      <div className="userChat">
        <img src={User} alt="" />
        <div className="userChatInfo">
          <span>Raza</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
