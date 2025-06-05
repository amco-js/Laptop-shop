import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './components/Landing'
import Login from './components/Login'
import Signup from './components/Signup'
import Filter from './components/Filter'
import Header from './components/Header'
import Aside from './components/Aside/aside'
import Cart from './components/Cart/Cart'
import Favorite from './components/Favorite/Favorite'
import Brand1 from './components/Brand 1/brand1'
import Brand2 from './components/Brand 2/brand2'
import Brand3 from './components/Brand 3/brand3'
import Brand4 from './components/Brand 4/brand4'
import Brand5 from './components/Brand 5/brand5'
import Brand6 from './components/Brand 6/brand6'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Aside />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/filter" element={<Filter/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/brand/brand1" element={<Brand1 />} />
        <Route path="/brand/brand2" element={<Brand2 />} />
        <Route path="/brand/brand3" element={<Brand3 />} />
        <Route path="/brand/brand4" element={<Brand4 />} />
        <Route path="/brand/brand5" element={<Brand5 />} />
        <Route path="/brand/brand6" element={<Brand6 />} />
        <Route path="/brand">
          <Route index element={<h1>Choose a brand</h1>} />
          <Route path="brand1" element={<h1>HP</h1>} />
          <Route path="brand2" element={<h1>DELL</h1>} />
          <Route path="brand3" element={<h1>LENOVO</h1>} />
          <Route path="brand4" element={<h1>ASUS</h1>} />
          <Route path="brand5" element={<h1>ACER</h1>} /> 
          <Route path="brand6" element={<h1>APPLE</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
