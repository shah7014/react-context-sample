import { createContext, useState } from "react";

// order => {mealData, amount}
// mealData => {name, desc, price}
const MealContext = createContext({
  order: [],
  updateOrder: () => {},
});

export const MealContextProvider = (props) => {
  const [order, setOrder] = useState([]);

  // updateType can be:- add or remove
  const updateOrder = (mealData, amount, updateType) => {
    const orderFoundAlready = order.find(
      (order) => order.mealData.name === mealData.name
    );
    if (!orderFoundAlready) {
      setOrder((prev) => [...prev, { mealData, amount }]);
    } else {
      if (updateType === "add") {
        orderFoundAlready.amount = orderFoundAlready.amount + amount;
      } else {
        orderFoundAlready.amount = orderFoundAlready.amount - amount;
      }
      setOrder((prev) => [
        ...prev.filter((order) => order.mealData.name !== mealData.name),
        orderFoundAlready,
      ]);
    }
  };

  return (
    <MealContext.Provider value={{ order, updateOrder }}>
      {props.children}
    </MealContext.Provider>
  );
};

export default MealContext;
