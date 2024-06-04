import React from 'react'
import Navbar from './assets/containers/Navbar'
import Hero from './assets/containers/Hero'
import LatestDrops from './assets/containers/LatestDrops'

const App = () => {
  return (
    <main className='scroll-smooth'>
      <header>
        <Navbar/>
      </header>
      <Hero/>
      <LatestDrops/>
    </main>
  )
}

export default App