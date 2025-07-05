import React, { useState } from "react";
import "./login.css";
import { assets } from "../assets/frontend_assets/assets";

const Login = ({ setisShowLogin }) => {
  const [currtState, setCurrState] = useState("signup");
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");

  const handlSubmit = () => {
    if (currtState == "login") {
      return;
    }
    // handle signup logic here
  };
  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currtState}</h2>
          <img
            onClick={() => setisShowLogin(false)}
            src={assets.cross_icon}
            alt="cross icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currtState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              name="name"
              placeholder="your name"
              required
              onChange={(e) => setusername(e.target.value)}
            />
          )}

          <input
            type="email"
            name="email"
            placeholder="your Email"
            required
            onChange={(e) => setemail(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="your password"
            required
          />
        </div>
        <button>{currtState === "Signup" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
        <div>
          {currtState === "Login" ? (
            <p>
              Don't have an account?
              <span onClick={() => setCurrState("Signup")}>Signup</span>
            </p>
          ) : (
            <p>
              Already have an account?
              <span onClick={() => setCurrState("Login")}>Login</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
