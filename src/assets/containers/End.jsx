import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'

const End = () => {
  return (
    <section className='mt-7 text-sm flex justify-between px-20 pb-5 border-t-2 border-solid border-gray-500 mx-32 pt-7 max-md:mx-10 max-sm:flex-col max-sm:px-5 text-center items-center'>
      <div>
        © 2023 artWarp. All Rights Reserved. Terms and Conditions
      </div>
      <div className='flex gap-3'>
        <FaFacebook size={22} />
        <FaGithub size={22} />
        <FaTwitter size={22} />
        <FaInstagram size={22} />
        <FaLinkedin size={22} />
      </div>
    </section>
  )
}

export default End
