import "./App.css";
import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <MealsList />
    </>
  );
}

export default App;
