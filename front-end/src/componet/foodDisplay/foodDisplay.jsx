import React, { useContext } from 'react'
// import './foodDisplay.css'
// import "./foodDisplay.css"
import './foodDisplay.css'

import { storeContext } from '../../context/storeContext'
import Fooditem from '../fooditem/fooditem'

const FoodDisplay = ({category}) => {
    const {food_list} =useContext(storeContext)
    console.log(food_list);
    
  return (
    <div className='food-diplay' id='food-diplay'>
        <h2>Top dishes near you</h2>
      <div className="food-Display-list">
        {food_list.map((item,index)=>{
          return <Fooditem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>

        })}
      </div>
    </div>
  )
}

export default FoodDisplay
