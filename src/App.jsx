import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
   <Navbar/>
   <Routes>
   <Route exact path="/" element={<ItemListContainer />}/>
   <Route
          exact
          path="/categoria/:categoria"
          element={<ItemListContainer />}
        />

<Route exact path="/item/:id" element={<ItemDetailContainer />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
