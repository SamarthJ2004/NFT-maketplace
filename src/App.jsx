import React from 'react'
import { Navbar, Hero, LatestDrops, Introduction, Collection, Subscribe, Footer, End } from './assets/containers/index'

const App = () => {
  return (
    <main className='scroll-smooth'>
      <Navbar />
      <Hero />
      <LatestDrops />
      <Introduction />
      <Collection />
      <Subscribe />
      <Footer />
      <End/>
    </main>
  )
}

export default App