import React from 'react'
import logo from '../images/logo.png'

const Introduction = () => {
  return (
    <section className='bg-[rgb(255,246,238)] mx-16 p-16 pb-8 rounded-2xl max-md:hidden max-sm:mx-8'>
      <h2 className='text-3xl font-bold border-b-[1px] border-solid border-gray-200 mx-5'>artWarp</h2>
      <div className='grid grid-cols-2 gap-10 mt-8'>
        <img src={logo} alt="logo" className='bg-[#FF0] rounded-xl w-full p-12 '/>
        <div className='w-full h-full flex text-center items-center text-3xl max-xl:text-2xl max-lg:text-xl'>
          "Where Digital Dreams Become Tangible Treasures: Discover Your NFT Haven!"
        </div>
      </div>
    </section>
  )
}

export default Introduction