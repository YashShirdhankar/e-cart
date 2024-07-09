import React from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductDetail from './components/ProductDetail'
import SearchItems from './components/SearchItems'
import Cart from './components/Cart'


const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Product/>}/>
      <Route path="/product/:id" element={<ProductDetail/>}/>
      <Route path="/search/:term" element={<SearchItems/>}/>
      <Route path="/cart" element={<Cart/>}/>
    </Routes>
    
    </Router>
    </>
  )
}

export default App