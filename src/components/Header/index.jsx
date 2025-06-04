import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [search, setSearch] = useState('');
  
    return (
  <header>
        <img src="/ahokts.png" alt="AHOKTS Logo" className='logo' />
        <h1>AHOKTS SHOP</h1>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-bar"
        />

        <button className='login'><Link to="/login">Login</Link></button>
        <button className='signup'><Link to="/signup">Sign Up</Link></button>
      </header>
  );
}
