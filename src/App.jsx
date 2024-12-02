import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Experience from './sections/Experience'

const App = () => {
  return (
    <main className='w-full relative'>
      <Navbar/>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </main>
  )
}

export default App