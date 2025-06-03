import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Signup() {
    return (
        <div>
            <header className="header">
                <img src="./ahokts-logo.png" alt="AHOKTS Logo" className='logo' />
                <h1>AHOKTS</h1>
            </header>
            <h2>Signup</h2>
            <form>
                <input type="text" placeholder="Username" required className="signup-input" />
                <input type="email" placeholder="Email" required className="signup-input" />
                <input type="password" placeholder="Password" required className="signup-input" />
                <button type="submit" className="signup-button">Signup</button>
            </form>
        </div>
    )
}

export default Signup;