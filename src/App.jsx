import React from 'react'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import Achievements from './Components/Achievements'
import Contact from './Components/ Contact'


const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Skills/>
      <Projects/>
      <Achievements/>
      <Contact/>
    </div>
  )
}

export default App
