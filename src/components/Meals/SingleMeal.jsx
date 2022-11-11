import React from "react";
import classes from "./SingleMeal.module.css";

const SingleMeal = (props) => {
  return (
    <li className={classes.container}>
      <div className={classes.mealInfo}>
        <span className={classes.name}>{props.meal.name}</span>
        <span className={classes.desc}>{props.meal.description}</span>
        <span className={classes.price}>{props.meal.price}</span>
      </div>
      <div className={classes.mealActions}>
        <span>
          <b>Amount</b> <input type="number" min={1} step={1} />
        </span>
        <button className={classes.btn}>+Add</button>
      </div>
    </li>
  );
};

export default SingleMeal;
