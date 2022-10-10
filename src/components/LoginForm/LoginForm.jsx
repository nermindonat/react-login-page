import React from 'react'
import './loginForm.css'

const LoginForm = () => {
  return (
    <div className='container'>
        <div className="login-form">
            <form>
                <div className='email'>
                    <label htmlFor="email">Email Address</label>
                    <input type="text" placeholder='Email'/>
                </div>
                <div className='password'>
                    <label htmlFor="username" placeholder='Password'>Password</label>
                    <input type="text" placeholder='Password'/>
                </div>
                <button></button>
            </form>
        </div>

    </div>
  )
}

export default LoginForm