import React from 'react'

const RegisterPage = () => {
  return (
      <div className="login-form">
      <form>
      <div className="first-name">
          <label htmlFor="firstname">First Name</label>
          <input type="text" placeholder="First Name" />
        </div>
        <div className="last-name">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" placeholder="Last Name" />
        </div>
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
      </form>
    </div>
  )
}

export default RegisterPage
