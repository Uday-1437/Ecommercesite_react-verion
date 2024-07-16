import React from 'react'
import {Route, Routes } from 'react-router-dom'
// import Home from './Home'
import Product from './Product'
import Cart from './Cart'
import Login from './Login'

function Routing() {
  return (
    <div>
      
        <Routes>
          {/* <Route path='/Home' element={< Home />} /> */}
          <Route path='/Product' element={< Product />} />
          <Route path='/Login' element={< Login />} />
          <Route path='/Cart' element={< Cart />} />
        </Routes>
        
    </div>
  )
}

export default Routing;