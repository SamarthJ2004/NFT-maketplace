import { FaBars, FaSearch, FaHeart, FaShoppingBag, FaUser} from "react-icons/fa";
import logo from '../images/logo.png';

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between items-center py-1 px-4 bg-[rgba(255,255,255,0.85)] w-full backdrop:blur-lg">
      <section className="flex items-center justify-start gap-4">
        <FaBars size={30} />
        <img src={logo} alt="logo" className="h-16" />
      </section>
      <section className="relative">
        <FaSearch size={22} className="absolute top-[14px] left-4" />
        <input type="text" placeholder='Search Web3' className="w-[40vw] pl-12 py-3 rounded-full font-medium focus:outline-none" />
      </section>
      <section className="flex justify-right items-center gap-3 max-lg:hidden">
        <button className="bg-[rgb(33,33,33)] text-white font-bold border-none rounded-2xl px-3 py-2">Connect Wallet</button>
        <FaHeart size={30} />
        <FaUser size={30}/>
        <FaShoppingBag size={30}/>
      </section>
    </nav>
  )
}

export default Navbar