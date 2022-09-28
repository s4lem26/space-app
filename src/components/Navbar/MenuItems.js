import React from 'react'
import {Link} from "react-router-dom"
const MenuItems = ({active}) => {
  return (
    <div className={active ? 'block' : 'hidden'}>  
     <div className=" md:hidden block drop-shadow-2xl backdrop-blur-2xl
           bg-[#ffffff0a]
            absolute top-0 right-0
            h-full
            z-90">
            <ul className="justify-between	
            z-90
            flex-col
            pt-36
            pl-10
            p-6
            w-72
            flex">
          <li className="items-center flex p-2 my-8  cursor-pointer hover:border-b-4 duration-200 h-full"><span className="mr-2 font-bold text-white">00</span><Link to="/" className="font-light text-white">HOME</Link></li>
          <li className="items-center flex p-2 my-8  cursor-pointer hover:border-b-4 duration-200 h-full"><span className="mr-2 font-bold text-white">01</span><Link to="/destination" className="font-light text-white">DESTINATION</Link></li>
          <li className="items-center flex p-2 my-8  cursor-pointer hover:border-b-4 duration-200 h-full"><span className="mr-2 font-bold text-white">02</span><Link to="/crew" className="font-light text-white">CREW</Link></li>
          <li className="items-center flex p-2 my-8  cursor-pointer hover:border-b-4 duration-200 h-full"><span className="mr-2 font-bold text-white">03</span><Link to="/technology" className="font-light text-white">TECHNOLOGY</Link></li>
       </ul>
    </div>
    </div>
  )
}

export default MenuItems