import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import BackgroundAudio from './components/BackgroundAudio'
import bgImage from "./assets/handwithlove.jpg";
import Home from './pages/Home'


function App() {

  return (
    <>  <div
  className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
<BackgroundAudio />
     <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/home" element={<Home />} />
     </Routes>
     </div>
    </>
  )
}

export default App
