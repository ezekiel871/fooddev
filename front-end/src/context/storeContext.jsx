import { createContext, useContext } from "react";
// import {food_list} from "../assets/frontend_asset/assets"
import { food_list } from "../assets/frontend_assets/assets";
// console.log(food_list);


export const storeContext = createContext()

const StoreContextprovider = (props)=> {

    console.log(food_list);
    
const contextValue={
food_list
}
return(
    <storeContext.Provider value ={contextValue}>
        {props.children}
    </storeContext.Provider>
)
}

export default StoreContextprovider;

// export const foodList = useContext(food_list)