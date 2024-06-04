import React from 'react'
import Navbar from './assets/containers/Navbar'
import Hero from './assets/containers/Hero'
import LatestDrops from './assets/containers/LatestDrops'
import Introduction from './assets/containers/Introduction'

const App = () => {
  return (
    <main className='scroll-smooth'>
      <header>
        <Navbar />
      </header>
      <Hero />
      <LatestDrops />
      <Introduction />
    </main>
  )
}

export default App