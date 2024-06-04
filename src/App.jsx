import React from 'react'
import Navbar from './assets/containers/Navbar'
import Hero from './assets/containers/Hero'

const App = () => {
  return (
    <main>
      <header>
        <Navbar/>
      </header>
      <Hero/>
      <LatestDrops/>
    </main>
  )
}

export default App