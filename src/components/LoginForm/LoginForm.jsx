import React, { useRef, useState, useEffect } from "react";
import Button from "../button/Button";
import "./loginForm.css";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMsg, setErrorMsg] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   emailRef.current.focus();
  // }, []);

  // useEffect(() => {
  //   setErrorMsg("");
  // }, [email, password]);

  const {register, handleSubmit, formState: {errors}, reset } = useForm({
    resolver: yupResolver(validationSchema)
  })
  
  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setEmail(value);
    setPassword(value);
  }

  const onSubmit = (data) => {
    setSuccess(true)
    console.log({ data });
    reset();
    navigate('/Home')
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
                onChange={handleChange}
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
                onChange={handleChange}
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
