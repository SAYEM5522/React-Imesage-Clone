import { IconButton } from "@material-ui/core";
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Chat.css";
import { selectchatId,selectchatName } from "./features/chatSlice";
import { selectuser } from "./features/userSlice";
import db from "./firebase";
import Message from "./Message";
import firebase from 'firebase'
const Chat = () => {
  const user=useSelector(selectuser)
  const chatId = useSelector(selectchatId) ;
  const chatName = useSelector(selectchatName);
  console.log(chatName)
  const [input, setInput] = useState("");
  const[messages,setMessages]=useState([]);
  useEffect(()=>{
    if(chatId){
      db.collection('chats').doc(chatId).collection("messages").orderBy("timestamp",'asc').onSnapshot((snapshot)=>{
        setMessages(snapshot.docs.map((doc)=>({
          id:doc.id,
          data:doc.data()
        })))
      }) 
    }
  
    
  },[chatId])
  const sendMessage = (e) => {
    e.preventDefault();  
   db.collection('chats').doc(chatId).collection("messages").add({
     timestamp:firebase.firestore.FieldValue.serverTimestamp(),
     message:input,
     uid:user.uid,
     photo:user.photo,
     displayName:user.displayName,
     email:user.email
   })
    
    setInput(" ");
  };
  return (
    <div className="chat">
      <div className="chat__header">
        <h4>
           To: <span className="chat__name">{chatName}</span>
        </h4>
        <strong>Detail</strong>
      </div>
      <div className="chat__message">
      {messages.map(({id,data})=>(
        <Message  key={id} contents={data}/>
      ))}
      </div>
      <div className="chat__input">
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="imessage"
          />
          <button type="submit" onClick={sendMessage}>
            send message
          </button>
        </form>
        <IconButton>
          <MicNoneIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Chat;
