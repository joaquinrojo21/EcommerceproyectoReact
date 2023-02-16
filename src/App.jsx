import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from './components/ItemListContainer'


function App() {
  return (
    <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route exact path="/" element={<ItemListContainer />}/>
   <Route
          exact
          path="/category/:category"
          element={<ItemListContainer />}
        />

<Route exact path="/item/:id" element={<ItemDetailContainer />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
