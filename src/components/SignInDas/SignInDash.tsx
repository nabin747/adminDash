import '../welcomeDashboard/WelcomeDas.css'
import smartschool from "../../images/smartschool.png";
import React, { useState } from 'react';
import { SignForm } from './SignForm';


export const SignInDash  = () => {
const [status, setStatus]  = useState(true)
const handleClick = ()=>{
  setStatus(false)
}

  return (
    <div>
        {status ? <div className="main">
      <div className="welcome-container">
        <img src={smartschool} alt="school logo" />
        <h3 className="welcome-banner">Welcome</h3>
        <p className="welcome-msg">Enter your personal detail <br /> and start your journey with us</p>
        <button className="skip btn" onClick={handleClick}>Sign In</button>
      </div> 

    </div>
    :<SignForm/>}
    </div>
  
  );
};