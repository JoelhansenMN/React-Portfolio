import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from 'react'
import './App.css'

import Header from './components/header/Header'
import About from './components/pages/about/About'
import Resume from './components/pages/resume/Resume'
import Contact from './components/pages/contact/Contact'
import Portfolio from "./components/pages/portfolio/Portfolio"
import Footer from "./components/footer/Footer"

function App() {
  const [count, setCount] = useState(0)

  return (

     <div className='viewport'>
      <BrowserRouter>
      <Header/>
          <Routes>
          <Route path="/" element={<About/>}/>
          <Route path="/resume" element={<Resume/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          </Routes>
          <Footer/>
      </BrowserRouter>
     </div>
    
  )
}

export default App
