import "./App.css";
import logo from "./assets/logo-cp4.png";
import Budjet from "./components/Budjet";
import Expenses from "./components/Expenses";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" alt="logo du site" />
      <Budjet />
      <Expenses />
    </div>
  );
}

export default App;
