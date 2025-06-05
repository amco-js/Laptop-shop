import React from "react";
import { Link } from "react-router-dom";

const Aside = () => {
  return (
    <aside>
      <button className='cart'><Link to="/cart">Cart</Link></button>
      <button className='filter'><Link to="/filter">Filter</Link></button>
      <button className='favorite'><Link to="/favorite">Favorite</Link></button>
    </aside>
  );
};

export default Aside;
