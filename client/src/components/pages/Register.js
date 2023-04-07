import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

const Register = () => {
  return (
    <div style={{marginTop: "100px"}}>
      

      <img className='amazonLogo' src="./amazonLogo.jpg" alt="amazon logo" />
      <span className="inputFields">
        <h1>Create Account</h1>
        <input className='inputbox' type="text" placeholder='Enter Email'/>
        <input className='inputbox' type="number" placeholder='Enter Contact Number'/>
        <input className='inputbox' type="password" placeholder='Enter Password'/>
        <input className='inputbox' type="password" placeholder='Confirm Password'/>
        <button className='registerBtn'>Continue</button>
      </span>

      <div className="newUser">
        <h3 style={{textAlign: "center"}}>-----------Already have an account ?------------</h3>
        <Link to='/signIn' className='signInbtn'>Sign In</Link>
      </div>
    </div>
  )
}

export default Register
