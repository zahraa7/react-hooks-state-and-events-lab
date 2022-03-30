import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function addToCartHandler() {
    !inCart ? setInCart(true) : setInCart(false);
  }

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCartHandler}>
        Add to Cart
      </button>
    </li>
  );
}

export default Item;