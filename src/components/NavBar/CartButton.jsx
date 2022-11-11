import React, { useContext } from "react";
import MealContext from "../../state/MealState";
import classes from "./CartButton.module.css";

const CartButton = () => {
  const { order } = useContext(MealContext);

  const totalNoOfOrders = order
    ?.map((o) => o.amount)
    .reduce((acc, currVal) => {
      acc = acc + currVal;
      return acc;
    }, 0);

  return (
    <button className={classes.button}>
      <i className={`fa-solid fa-cart-shopping ${classes.icon}`}></i>
      <span className={classes.cartText}>Your Cart</span>
      <div className={classes.badge}>
        <span className={classes.itemNo}>{totalNoOfOrders}</span>
      </div>
    </button>
  );
};

export default CartButton;
