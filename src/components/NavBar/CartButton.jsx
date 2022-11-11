import React from "react";
import classes from "./CartButton.module.css";

const CartButton = () => {
  return (
    <button className={classes.button}>
      <i className={`fa-solid fa-cart-shopping ${classes.icon}`}></i>
      <span className={classes.cartText}>Your Cart</span>
      <div className={classes.badge}>
        <span className={classes.itemNo}>0</span>
      </div>
    </button>
  );
};

export default CartButton;
