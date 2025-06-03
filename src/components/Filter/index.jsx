import React from "react";
import "./index.css";
import { Link as navLink } from "react-router-dom";

function Filter() {
    return (
        <div className="filter-container">
        <header className="header">
            <img src="./ahokts-logo.png" alt="AHOKTS Logo" className='logo' />
            <h1>AHOKTS SHOP</h1>
        </header>
        <h2>Filter Options</h2>
        <form className="filter-form">
            <select name="brand" className="filter-select">
                <h2>Brand:</h2>
                <option value="hp">HP</option>
                <option value="dell">DELL</option>
                <option value="lenovo">LENOVO</option>
                <option value="asus">ASUS</option>
                <option value="toshiba">TOSHIBA</option>
                <option value="apple">APPLE</option>
                </select>
            <select name="battery" className="filter-select">
                <h2>Battery:</h2>
                <option value="4000">4000mAh</option>
                <option value="5000">5000mAh</option>
                <option value="6000">6000mAh</option>
            </select>
            <select name="ram" className="filter-select">
                <h2>RAM:</h2>
                <option value="4">4GB</option>
                <option value="8">8GB</option>
                <option value="16">16GB</option>
                </select>
                <select name="cpu" className="filter-select">
                <h2>CPU:</h2>
                <option value="intel">Intel</option>
                <option value="ryzen">Ryzen</option>
                <option value="apple">Apple</option>
                <option value="snapdragon">Snapdragon</option>
                    </select>
            <button type="submit">Search</button>
            <button type="button" navLink to="/" className="cancel-button">Cancel</button>
        </form>
        </div>
    );
}

export default Filter;