import React from 'react'
import collectionLogo from '../images/anime-logo.jpeg'

const CollectionCard = () => {
  return (
    <article className='bg-[url("src/assets/images/city.jpeg")] w-full bg-cover rounded-2xl aspect-[4/5] '>
      <div className="bg-[rgba(0,0,0,0.5)] w-full h-full rounded-2xl flex flex-col justify-between p-8 text-white font-bold">
        <div>
          <img src={collectionLogo} alt="collection logo" className='h-20 w-20 rounded-md' />
          <p className='text-3xl mt-3'>Anime</p>
        </div>
        <div>
          <p>NFTs</p>
          <p className='text-xl'>6</p>
        </div>
      </div>
    </article>
  )
}

export default CollectionCard
