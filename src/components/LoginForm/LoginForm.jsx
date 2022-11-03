import React, { useRef, useState, useEffect } from "react";
import Button from "../button/Button";
import "./loginForm.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup"

const validationSchema = Yup.object().shape({
  email: Yup
    .string()
    .nullable()
    .required("Email is required")
    .email("Email is invalid"),
  password: Yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters")
    .matches(/[^a-z0-9]+/i, "password must be alphanumeric")
    .max(20, "password must be no more than 20 characters"),
});

const LoginForm = () => {
  // const emailRef = useRef();
  // const errorRef = useRef();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [errorMsg, setErrorMsg] = useState("");
  // const [success, setSuccess] = useState("");

  // useEffect(() => {
  //   emailRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrorMsg("");
  // }, [email, password]);
  

  const {register, handleSubmit, formState: {errors}, reset } = useForm({
    resolver: yupResolver(validationSchema)
  })


  const onSubmit = (data) => {
    console.log({ data });
    reset();
  }

  const onError = (errors) => {
    console.log(errors);
  };


  return (

        <div className="login-form">
          <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div className="email">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                // ref={emailRef}
                // onChange={(e) => setEmail(e.target.value)}
                // value={email}
                {...register("email")}
                autoComplete="off"
              />
              <p className="message">{errors.email?.message}</p>
            </div>
            <div className="password">
              <label htmlFor="username">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                // onChange={(e) => setPassword(e.target.value)}
                // value={password}
                {...register("password")}
              />
              <p className="message">{errors.password?.message}</p>
            </div>
            <Button />
          </form>
          <div className="account">
            <p>Don't have an account?</p>
            <Link className="link" to="/register">
              Sign Up
            </Link>
          </div>
        </div>   
  );
};

export default LoginForm;
