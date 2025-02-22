import React from 'react'
import "./css/LoginSignup.css"

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
             <div className="LoginSignup-container">
              <h1>Sign up</h1>
              <div className="loginsignup-fields">
                <input type="text" placeholder='Your Name' />
                <input type="email" placeholder='Email Address' />
                <input type="password" placeholder='Password' />
              </div>
              <button>Continue</button>
              <p className="loginsignup-login">Already have an account?<span>login here</span></p>
              <div className="loginsignup-agree">
                <input type="checkbox" name='' id='' />
                <p>by continuing, i agree to the terms of use & privacy policy</p>
              </div>
             </div>
    </div>
  )
}

export default LoginSignup