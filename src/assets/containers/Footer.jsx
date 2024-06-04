import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-[rgb(238,238,255)] grid grid-cols-[2fr,3fr] gap-5 mt-10 mx-16 px-16 py-20 rounded-2xl'>
      <section className='px-5'>
        <h1 className='text-2xl font-bold mb-5'>Always Feel Connected</h1>
        <input type="text" className='focus:outline-none w-[70%] py-2 px-4 rounded-full'/>
      </section>
      <section className='grid grid-cols-3 gap-5'>
        <ul className='text-gray-500 flex flex-col'>
          <p className='text-2xl font-bold text-black mb-3'>Collections</p>
          <a href="">Gaming</a>
          <a href="">Anime</a>
          <a href="">Beauty of Art</a>
          <a href="">Cars</a>
          <a href="">City Life</a>
          <a href="">Marvelous World</a>
          <a href="">Landscapes</a>
          <a href="">Miscellaneous</a>
        </ul>

        <ul className='text-gray-500 flex flex-col'>
          <p className='text-2xl font-bold text-black mb-3'>My Account</p>
          <a href=''>My Profile</a>
          <a href=''>Favourites</a>
          <a href=''>Cart</a>
          <a href=''>Documentation</a>
          <a href=''>Try Premium</a>
          <a id=''>Logout</a>
        </ul>

        <ul className='text-gray-500 flex flex-col'>
          <p className='text-2xl font-bold text-black mb-3'>Join Us</p>
          <a href='https://www.instagram.com/samarth__jindal?igsh=cmpuYnpseWY3eHNx'>Instagram</a>
          <a href='https://www.discordapp.com/users/1159167506167115856'>Discord</a>
          <a href='https://www.linkedin.com/in/samarth-jindal-1129a01b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'>LinkedIn</a>
          <a>Facebook</a>
        </ul>
      </section>
    </footer>
  )
}

export default Footer
