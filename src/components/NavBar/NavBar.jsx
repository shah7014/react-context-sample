import React from "react";
import CartButton from "./CartButton";
import classes from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>ReactMeals</span>
      <CartButton />
    </div>
  );
};

export default NavBar;
