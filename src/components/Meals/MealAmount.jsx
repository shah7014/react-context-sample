import React, { useRef } from "react";
import classes from "./MealAmount.module.css";

const MealAmount = (props) => {
  const amountRef = useRef();

  const addAmountHandler = () => {
    const amount = amountRef.current.value;
    props.onAddAmount(amount);
  };

  return (
    <>
      <span>
        <label htmlFor="amt">
          <b>Amount</b>
        </label>
        <input
          type="number"
          id="amt"
          min={1}
          step={1}
          defaultValue={1}
          className={classes.amount}
          ref={amountRef}
        />
      </span>
      <button className={classes.btn} onClick={addAmountHandler}>
        +Add
      </button>
    </>
  );
};

export default MealAmount;
