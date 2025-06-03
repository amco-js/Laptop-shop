import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Logging in with", { username, password });
        
        navigate("/");
    };
    
    return (
        <div className="login-place">
        <header className="header">
            <img src="./ahokts-logo.png" alt="AHOKTS Logo" className='logo' />
            <h1>AHOKTS</h1>
        </header>
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            />
            <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            />
            <button type="submit">Login</button>
        </form>
        </div>
    );
    }