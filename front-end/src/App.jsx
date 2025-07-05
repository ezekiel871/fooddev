import Navbar from "./componet/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/home";
import Cart from "./pages/Cart/Cart";
import placeOrder from "./pages/placeOrder/placeOrder";
import Login from "./Loginpopup/Login";
import { useState } from "react";

const App = () => {
  const [isShowLogin, setisShowLogin] = useState(false);
  return (
    <div className="app">
      {isShowLogin ? <Login setisShowLogin={setisShowLogin} /> : <></>}
      <Navbar setisShowLogin={setisShowLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<placeOrder />} />
      </Routes>
    </div>
  );
};

export default App;
