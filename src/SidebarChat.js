import { Avatar } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { setChat } from "./features/chatSlice";

import "./SidebarChat.css";

const SidebarChat = ({ id,chatName }) => {
  console.log(chatName)

  const dispatch=useDispatch();
  return (
    <div
     onClick={()=>{
      dispatch(
        setChat({
        
          chatName:chatName,
          chatId:id
        })
    )
    }}
     className="sidebarchat">
      <Avatar />
      <div className="sidebarchat__info">
        <h3>{chatName}</h3>
        <p>message</p>
        <small>timestamp</small>
      </div>
    </div>
  );
};

export default SidebarChat;
