import React from "react";
import mealsImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.imgContainer}>
      <img src={mealsImg} alt="meals-img" className={classes.img} />
    </div>
    /* <div className={classes.card}>
        <span className={classes.title}>Delicious food, Delivered To You</span>
        <span className={classes.para1}>
          <span>
            Choose your favorite meal from our broad selection of available
            meals and enjoy a delicious
          </span>
          <span> lunch or dinner at home.</span>
        </span>
        <span className={classes.para2}>
          <span>
            All our meals are cooked with high-quality ingredients, just-in-time
            and of course by
          </span>{" "}
          <span>experienced chefs!</span>
        </span>
      </div> */
  );
};

export default Header;
