import { createContext, useState } from "react";
// import {food_list} from "../assets/frontend_asset/assets"
import { food_list } from "../assets/frontend_assets/assets";
// console.log(food_list);

export const storeContext = createContext();

const StoreContextprovider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (id) => {
    setCartItems((prevItems) => ({
      ...prevItems,
      [id]: (prevItems[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => ({ ...prev, [id]: prev[id] - 1 }));
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    for (let item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id == item);
        totalPrice += itemInfo.price * cartItems[item];
      }
    }
    return totalPrice;
  };

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    setCartItems,
    getTotalPrice,
  };
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};

export default StoreContextprovider;

// export const foodList = useContext(food_list)
