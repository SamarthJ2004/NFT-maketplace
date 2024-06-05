import React from 'react'
import CollectionCard from '../components/CollectionCard'

const Collection = () => {
  return (
    <section className='grid grid-cols-4 gap-6 mx-16 mt-16 max-sm:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 max-sm:mx-8'>
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
      <CollectionCard />
    </section>
  )
}

export default Collection
