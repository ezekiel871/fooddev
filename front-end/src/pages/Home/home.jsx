import React, { useState } from 'react'
import './home.css'
// import Header from '../../componet/Header/header'
import Header from '../../componet/Header/header'
import ExploreMenu from '../../componet/exploreMenu/exploreMenu'
import FoodDisplay from '../../componet/foodDisplay/foodDisplay'

const Home = () => {
  const [category,setCategory]=useState("ALL");
  return (
    <div>
      <Header/>
    <ExploreMenu category ={category} setCategory={setCategory}/>
    {/* <foodDisplay category={category}/> */}
    <FoodDisplay category={category}/>
    </div>
  )
}

export default Home
