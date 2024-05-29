import { useState } from 'react'
import './App.css'

import Header from './components/header/Header'
import About from './components/pages/about/About'

function App() {
  const [count, setCount] = useState(0)

  return (

     <div className='viewport'>
      <About/>
     </div>
    
  )
}

export default App
