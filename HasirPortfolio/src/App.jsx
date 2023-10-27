import React from "react";
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Link,NavLink } from 'react-router-dom'

import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/footer";
import Education from "./Pages/Education";

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
    
    <Navbar></Navbar>
    <Routes>
      <Route path="/"  element={<Home/>} />
      <Route path="/Education"  element={<Education/>} />

    </Routes>
    <Footer></Footer>
    </>
  )
}

export default App
