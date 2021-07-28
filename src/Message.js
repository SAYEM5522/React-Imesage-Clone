import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectuser } from './features/userSlice'
import './Message.css'
const Message = ({id,contents:{message,photo,uid,displayName,email,time,timestamp}}) => {
  const user=useSelector(selectuser);
    return (
        <div className={`message ${user.email===email && "message__sender"}`}>
            <Avatar className="message__photo" src={photo}/>
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

export default Message
