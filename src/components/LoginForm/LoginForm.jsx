import React from "react";
import Button from "../button/Button";
import "./loginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <div className="login-form">
      <form>
        <div className="email">
          <label htmlFor="email">Email Address</label>
          <input type="text" placeholder="Email" />
        </div>
        <div className="password">
          <label htmlFor="username" placeholder="Password">
            Password
          </label>
          <input type="text" placeholder="Password" />
        </div>
        <Button />
      </form>
      <Link to="/register">Don't have an account?</Link>
    </div>
  );
};

export default LoginForm;
