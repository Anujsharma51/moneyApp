import AllRoutes from "./AllRoutes/AllRoutes";
import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
