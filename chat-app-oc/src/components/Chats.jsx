import React from "react";
import User from "../images/Boy-Header.png";

const Chats = () => {
  return (
    <div>
      <div className="userChat">
        <img src={User} alt="" />
        <div className="userChatInfo">
          <span>Raza</span>
          <p>Hey!Raza</p>
        </div>
      </div>
      <div className="userChat">
        <img src={User} alt="" />
        <div className="userChatInfo">
          <span>Raza</span>
          <p>Hey!Raza</p>
        </div>
      </div>
      <div className="userChat">
        <img src={User} alt="" />
        <div className="userChatInfo">
          <span>Raza</span>
          <p>Hey!Raza</p>
        </div>
      </div>
    </div>
  );
};

export default Chats;
