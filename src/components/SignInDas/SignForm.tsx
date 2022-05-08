import { useState } from "react"
import './SignForm.css'

export const SignForm = ()=>{
    // const [status, setStatus]=useState(false);
    const clickHandler = ()=>(
       console.log('click')

    )

    return <>
        <div className="signin-container">
            <form className="signin-form">
                <h3 className="signin-title">Sign In</h3>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <p className="forget-password">forget your password!</p>
                <button className="signin-button" onClick={clickHandler}>Sign in</button>
            </form>

        </div>
    </>
}