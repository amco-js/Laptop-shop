import { useState } from 'react'
import './index.css'
import { Link } from 'react-router-dom';


function Landing() {
  
  return (
    <div>
      
      <aside>
        <button className='cart'>Cart</button>
        <button className='filter'><Link to="/filter">Filter</Link></button>
        <button className='akcija'>Disscount</button>
        <button className='favorite'>Favorite</button>
      </aside>
      <main>
        <h2>Laptop brands</h2>
        <div className='brand-list'>
          <div className='brand-item'>
            <Link to="/brand1">HP</Link>
          </div>
          <div className='brand-item'>
            <Link to="/brand2">DELL</Link>
          </div>
          <div className='brand-item'>
            <Link to="/brand3">LENOVO</Link>
          </div>
          <div className='brand-item'>
            <Link to="/brand4">ASUS</Link>
          </div>
          <div className='brand-item'>
            <Link to="/brand5">TOSHIBA</Link>
          </div>
          <div className='brand-item'>
            <Link to="/brand6">APPLE</Link>
            </div>
          </div>
      </main>
    </div>
  )
}

export default Landing