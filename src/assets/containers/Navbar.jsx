import { FaBars, FaSearch, FaHeart } from "react-icons/fa";
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="bg-red-400 flex justify-between items-center py-2 px-3">
      <section className="flex items-center justify-start gap-4">
        <FaBars size={30} />
        <img src={logo} alt="logo" className="h-16" />
      </section>
      <section className="relative">
        <FaSearch size={22} className="absolute top-[14px] left-4" />
        <input type="text" placeholder='Search Web3' className="w-[40vw] pl-12 py-3 rounded-full font-medium focus:outline-none" />
      </section>
      <section className="flex justify-right items-center gap-2">
        <button className="bg-[rgb(33,33,33)] text-white font-bold border-none rounded-2xl px-3 py-2">Connect Wallet</button>
        <FaHeart size={30} />
      </section>
    </nav>
  )
}

export default Navbar