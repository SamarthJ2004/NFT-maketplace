import React from 'react'
import NFTCard from '../components/NFTCard'

const LatestDrops = () => {
  return (
    <section className='border border-solid border-gray-500 rounded-2xl p-8 my-10 mx-16'>
      <h2 className='text-3xl font-bold border-b-[1px] border-solid border-gray-200 mx-5'>Latest Drops</h2>
      <div className="grid grid-cols-5 gap-6 mt-10">
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
