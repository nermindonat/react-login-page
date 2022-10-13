import React, { useRef, useState, useEffect } from "react";
import Button from "../button/Button";
import "./loginForm.css";
import { Link } from "react-router-dom";


const LoginForm = () => {
  const emailRef = useRef();
  const errorRef = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Preventdefault kavramı ilgili elementin tarayıcı tarafından o an yaptığı varsayılan işlemi engellemeye yarar.
    console.log(email, password);
    setEmail("");
    setPassword("");
    setSuccess(true);
  };



  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go to home</a>
          </p>
        </section>
      ) : (
        <div className="login-form">
          <form onSubmit={handleSubmit}>
            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                id="email"
                placeholder="Email"
                ref={emailRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="password">
              <label htmlFor="username">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
            </div>
            <Button />
          </form>
          <div className="account">
            <p>Don't have an account?</p>
            <Link className="link" to="/register">Sign Up</Link>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginForm;
