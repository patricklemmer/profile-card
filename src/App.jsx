// Imports
// React imports
import React from 'react'

// Stylesheet imports
import './App.css'

// Component imports
import Image from './components/Image'
import Info from './components/Info'
import Buttons from './components/Buttons'
import About from './components/About'
import SoftSkills from './components/SoftSkills'
import HardSkills from './components/HardSkills'
import JobDescription from './components/jobDescription'
import Notes from './components/Notes'
import Socials from './components/Socials'

function App() {
  return (
    <div className="container p-4 grid place-items-stretch gap-y-6 xs:gap-y-6 sm:grid-cols-2 auto-rows-auto sm:gap-x-8 sm:gap-y-0 sm:flex-wrap md:grid-cols-2 md:gap-y-4 md:gap-x-8">
      <div className="grid place-items-center place-content-center md:place-items-center md:place-content-center">
        <Image />
        <Info />
        <Buttons />
        <Socials />
      </div>
      <About />
      <SoftSkills />
      <HardSkills />
      <JobDescription />
      <Notes />
    </div>
  )
}

export default App
