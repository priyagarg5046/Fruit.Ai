import React, { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log("Logging in with", email, password);
  };

  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>

      <p className="terms-text">
        By signing in you are agreeing our <span>Term and privacy policy</span>
      </p>

      <div className="login-options">
        <button className="tab active">Login</button>
        <button className="tab">Register</button>
      </div>

      <form onSubmit={handleLogin} className="login-form">
        <div className="input-group">
            <MdEmail/>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            required
          />
        </div>

        <div className="input-group">
         
        <RiLockPasswordLine />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
        </div>

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Remember password
          </label>
          <a href="#" className="forgot-password">Forget password</a>
        </div>

        <button type="submit" className="login-button">Login</button>

        <p className="connect-text">or connect with</p>

        <div className="social-icons">
          <button className="icon"><FaFacebook/></button>
          <button className="icon"><FaInstagram/></button>
          <button className="icon"><FaPinterest/></button>
          <button className="icon"><FaLinkedinIn/></button>
        </div>
      </form>
    </div>
  );
};

export default Login;
