import React from 'react'
import NFTCard from '../components/NFTCard'

const LatestDrops = () => {
  return (
    <section className='border border-solid border-gray-500 rounded-2xl p-8 my-10 mx-16 max-sm:px-5 max-sm:mx-8'>
      <h2 className='text-3xl font-bold border-b-[1px] border-solid border-gray-200 mx-5'>Latest Drops</h2>
      <div className="grid grid-cols-5 gap-6 mt-10 max-sm:grid-cols-1 max-2xl:grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2">
        <NFTCard/>
        <NFTCard/>
        <NFTCard/>
        <NFTCard/>
        <NFTCard/>
        <NFTCard/>
        <NFTCard/>
        <NFTCard/>
      </div>
    </section>
  )
}

export default LatestDrops
