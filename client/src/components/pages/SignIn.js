import React from 'react'
import { Link } from 'react-router-dom'
import './SignIn.css'

const SignIn = () => {
  return (
    <div style={{marginTop: "100px"}}>
      {/* Sign In page is rendered */}

      <img className='amazonLogo' src="./amazonLogo.jpg" alt="amazon logo" />
      <span className="inputFields">
        <h1>Sign in</h1>
        <h3>Enter Email</h3>
        <input className='inputbox' type="text" placeholder='Enter Email'/>
        <input className='inputbox' type="password" placeholder='Enter Password'/>
        <button className='loginBtn'>Continue</button>
      </span>

      <div className="newUser">
        <h3 style={{textAlign: "center"}}>-----------NEW USER ?------------</h3>
        <Link to='/register' className='registerbtn'>Register</Link>
      </div>
    </div>
  )
}

export default SignIn
