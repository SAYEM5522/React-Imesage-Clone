import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";

const Login = () => {
  const singin = () => {
    auth.signInWithPopup(provider).catch((error) => error.message);
  };
  return (
    <div className="login">
      <img
        src="https://cdn2.downdetector.com/static/uploads/c/300/69849/IMessage_Icon.png"
        alt=""
      />
      <Button onClick={singin}> send message</Button>
    </div>
  );
};

export default Login;
