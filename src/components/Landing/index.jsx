import React from 'react';
import { useState } from 'react';
import './index.css'
import { Link, Route } from 'react-router-dom';


function Landing() {
  
  return (
    <div>
        <h2>Laptop brands</h2>
        <div className='brand-list'>
          <div className='brand-item'>
            <Link to="/brand/brand1">HP</Link>
          </div>
          <div className='brand-item'>
            <Link to="/brand/brand2">DELL</Link>
          </div>
          <div className='brand-item'>
            <Link to="/brand/brand3">LENOVO</Link>
          </div>
          <div className='brand-item'>
            <Link to="/brand/brand4">ASUS</Link>
          </div>
          <div className='brand-item'>
            <Link to="/brand/brand5">ACER</Link>
          </div>
          <div className='brand-item'>
            <Link to="/brand/brand6">APPLE</Link>
            </div>
          </div>
    </div>
  )
}

export default Landing;