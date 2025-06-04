import React from "react";
import "./cart.css";

const Cart = () => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => alert("Purchase successful!")}>Purchase</button>
    </div>
  );
}

export default Cart;
