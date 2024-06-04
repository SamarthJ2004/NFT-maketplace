import React from 'react'
import NFT from '../images/anime.jpeg'
import { FaRegHeart, FaShoppingBag } from 'react-icons/fa'

const NFTCard = () => {
  return (
    <article className='w-full rounded-3xl border border-solid border-gray-300 p-3 hover:shadow-md transition-[0.15s]'>
      <img src={NFT} className='w-full aspect-square rounded-xl' />
      <section className='grid grid-cols-[1fr,3rem,3rem] px-2 mt-2 gap-1'>
        <div className='flex flex-col'>
          <p className='text-[0.7rem] font-[rgb(121,121,121)]'>by Fame Identity</p>
          <p className='font-medium'>Smoker Gorilla</p>
        </div>
        <button className='border-none bg-[rgb(238,238,238)] active:bg-[rgb(174,174,174)] transition-[0.15s] rounded-xl flex justify-center items-center'><FaRegHeart size={20} /></button>
        <button className='border-none bg-[rgb(238,238,238)] active:bg-[rgb(174,174,174)] transition-[0.15s] rounded-xl flex justify-center items-center'><FaShoppingBag size={20} /></button>
      </section>
      <section className='flex justify-between px-5 bg-[rgb(238,238,238)] rounded-xl mt-1 text-[0.8rem] py-1'>
        <p>Minting<br />Now</p>
        <p>Price<br />0.001ETH</p>
      </section>
    </article>
  )
}

export default NFTCard
