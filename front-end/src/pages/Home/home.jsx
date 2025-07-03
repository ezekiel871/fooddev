import React, { useState } from 'react'
import './home.css'
// import Header from '../../componet/Header/header'
import Header from '../../componet/Header/header'
import ExploreMenu from '../../componet/exploreMenu/exploreMenu'

const Home = () => {
  const [category,setCategory]=useState("ALL");
  return (
    <div>
      <Header/>
    <ExploreMenu category ={category} setCategory={setCategory}/>
    </div>
  )
}

export default Home
