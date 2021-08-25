import React, { useState, useEffect, useRef } from "react";
import "../login.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/Loading";
import { login } from "../actions/userActions";
import background from "../img/background.png";
import profile from "../img/profile.svg";
import Navbar from "../components/Navbar";

const LoginScreen = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const ref = useRef(null);
  const ref2 = useRef(null);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const focusHandler = () => {
    const focus = ref.current;
    focus.className += " focus";

    // if (input.current.value === "") {
    //   focus.className = "input-div one";
    // }
  };

  const blurHandler = () => {
    if (name === "") {
      let focus = ref.current;
      focus = focus.className.replace(/focus/g, "");

      ref.current.className = focus;
      console.log(ref.current.input);
    }
  };

  return (
    <>
      <Navbar />
      <img src={background} alt="backgroud" className="background" />
      <div className="container">
        <div className="img">
          <img src={profile} alt="profile" />
        </div>
        <div className="title">
          <h1>WELCOME</h1>
        </div>
        <div className="login-container">
          <form action="">
            <div
              ref={ref}
              onFocus={focusHandler}
              onBlur={blurHandler}
              className="input-div one"
            >
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div>
                <h5>Username</h5>
                <input
                  className="input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            <div
              ref={ref2}
              onFocus={(e) => (ref2.current.className += " focus")}
              onBlur={(e) => {
                if (password === "") {
                  ref2.current.className = "input-div two";
                }
              }}
              className="input-div two"
            >
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div>
                <h5>Password</h5>
                <input
                  className="input"
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <a href="/">Forgot Password?</a>
            <button className="btn">LOGIN</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginScreen;
