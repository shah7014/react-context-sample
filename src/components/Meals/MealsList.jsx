import React from "react";
import Card from "../UI/Card";
import classes from "./MealsList.module.css";
import SingleMeal from "./SingleMeal";

const mealsData = [
  { name: "Sushi", description: "Finest fish and veggies", price: "$22.99" },
  { name: "Schnitzel", description: "A german speciality!", price: "$16.50" },
  {
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: "$12.99",
  },
  {
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: "$18.99",
  },
];

const MealsList = () => {
  return (
    <Card className={classes.container}>
      <ul className={classes.meals}>
        {mealsData.map((meal, index) => (
          <SingleMeal key={index} meal={meal} />
        ))}
      </ul>
    </Card>
  );
};

export default MealsList;
