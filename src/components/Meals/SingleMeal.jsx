import React, { useContext } from "react";
import MealContext from "../../state/MealState";
import MealAmount from "./MealAmount";
import classes from "./SingleMeal.module.css";

const SingleMeal = (props) => {
  const { updateOrder } = useContext(MealContext);

  const addAmountHandler = (amount) => {
    updateOrder(props.meal, Number(amount), "add");
  };

  return (
    <li className={classes.container}>
      <div className={classes.mealInfo}>
        <span className={classes.name}>{props.meal.name}</span>
        <span className={classes.desc}>{props.meal.description}</span>
        <span className={classes.price}>{props.meal.price}</span>
      </div>
      <div className={classes.mealActions}>
        <MealAmount onAddAmount={addAmountHandler} />
      </div>
    </li>
  );
};

export default SingleMeal;
