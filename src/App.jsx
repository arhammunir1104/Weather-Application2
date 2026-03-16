import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Nav from './componets/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <Nav />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/privacy-policy' element={<PrivacyPolicy />} />
     </Routes>
    </>
  )
}

export default App
