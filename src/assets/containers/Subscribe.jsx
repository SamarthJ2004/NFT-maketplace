import React from 'react'

const Subscribe = () => {
  return (
    <section className='bg-gradient-to-r from-[rgb(17,153,250)] to-[rgb(17,208,250)] mt-10 mx-16 p-28 rounded-3xl flex flex-col items-center justify-center'>
      <h1 className='text-6xl font-bold mb-5'>Never Miss a drop</h1>
      <p className='text-xl mb-4'>Subscribe for the latest news, drops & collectibles</p>
      <div className='flex w-full justify-center'>
        <input type="text" placeholder='email' className='text-lg px-4 py-2 rounded-s-2xl w-[40%] focus:outline-none'/>
        <button className='bg-blue-200 px-8 rounded-e-2xl'>Subscribe</button>
      </div>
    </section>
  )
}

export default Subscribe
