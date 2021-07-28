import React, { useEffect, useState } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import RatereviewOutlinedIcon from "@material-ui/icons/RateReviewOutlined";
import "./Sidebar.css";
import SidebarChat from "./SidebarChat";
import { useSelector } from "react-redux";
import { selectuser } from "./features/userSlice";
import db, { auth } from "./firebase";
const Sidebar = () => {
  const [show ,setShow]=useState(false);
  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      (window.scrollY>3?setShow(true):setShow(false))
    })
  },[])
  const user = useSelector(selectuser);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  console.log(chats);
  const addtoChannel = () => {
    const chatName = prompt("enter chat name");
    db.collection("chats").add({
      chatName: chatName,
    });
  };
  return (
    <div className="sidebar">
      <div className={`sidebar__header ${show&& "sidebar__haeder__line"}`}>
        <Avatar
          src={user.photo}
          alt={user.displayName}
          onClick={() => auth.signOut()}
        />
        <div className="sidebar__input">
          <SearchIcon />
          <input placeholder="search" />
        </div>
        <IconButton>
          <RatereviewOutlinedIcon onClick={addtoChannel} />
        </IconButton>
      </div>
      <div className="sidebar__chats">
        {chats.map(( {id, data:{chatName}}) => (
          <SidebarChat key={id} id={id} chatName={ 
            chatName} />
          
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
