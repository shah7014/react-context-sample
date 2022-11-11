import "./App.css";
import Header from "./components/Header/Header";
import MealsList from "./components/Meals/MealsList";
import NavBar from "./components/NavBar/NavBar";
import { MealContextProvider } from "./state/MealState";

function App() {
  return (
    <MealContextProvider>
      <NavBar />
      <Header />
      <MealsList />
    </MealContextProvider>
  );
}

export default App;
