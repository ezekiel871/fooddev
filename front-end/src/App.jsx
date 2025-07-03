import React from 'react'
import Navbar from './componet/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/home'
import Cart from './pages/Cart/Cart'
import placeOrder from './pages/placeOrder/placeOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
      <Route path ='/'  element={<Home/>}/>
      <Route path ='/cart'  element={<Cart/>}/>
      <Route path ='/order'  element={<placeOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
