import React from 'react'
import Navbar from './assets/containers/Navbar'
import Hero from './assets/containers/Hero'
import LatestDrops from './assets/containers/LatestDrops'
import Introduction from './assets/containers/Introduction'
import Collection from './assets/containers/Collection'

const App = () => {
  return (
    <main className='scroll-smooth'>
      <header>
        <Navbar />
      </header>
      <Hero />
      <LatestDrops />
      <Introduction />
      <Collection/>
    </main>
  )
}

export default App