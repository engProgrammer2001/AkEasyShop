import "./App.css";
import { Outlet } from "react-router-dom";
import NavItems from "./Components/NavItems";
import Footer from "./Components/Footer"

function App() {
  return (
    <>
      <NavItems/>
      <div className="min-vh-100">
      <Outlet />
      </div>
      <Footer/>
    </>
  );
}


export default App;
