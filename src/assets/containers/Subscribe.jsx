import React from 'react'

const Subscribe = () => {
  return (
    <section className='bg-gradient-to-r from-[rgb(17,153,250)] to-[rgb(17,208,250)] mt-10 mx-16 p-28 rounded-3xl flex flex-col items-center justify-center max-lg:p-16 max-sm:mx-8'>
      <h1 className='text-6xl font-bold mb-5 max-lg:text-4xl text-center max-sm:text-2xl'>Never Miss a drop</h1>
      <p className='text-xl mb-4 max-lg:text-base max-sm:text-sm text-center'>Subscribe for the latest news, drops & collectibles</p>
      <div className='flex w-full justify-center'>
        <input type="text" placeholder='email' className='text-lg px-4 py-2 rounded-s-2xl w-[40%] focus:outline-none' />
        <button className='bg-blue-200 px-8 rounded-e-2xl max-md:text-sm max-md:px-2'>Subscribe</button>
      </div>
    </section>
  )
}

export default Subscribe
