import React, { useEffect } from "react";
import Imessage from "./Imessage";
import "./App.css";
import { login, logout, selectuser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectuser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authuser) => {
      if (authuser) {
        dispatch(
          login({
            uid: authuser.uid,
            displayName: authuser.displayName,
            email: authuser.email,
            photo: authuser.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return <div className="app">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
