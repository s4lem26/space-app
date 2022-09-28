import React, {useState} from "react";
import Logo from "./icons/logo.svg";
import MenuItems from './MenuItems'
import Menu from "./icons/icon-hamburger.svg";
import Close from "./icons/icon-close.svg";
import {Link} from "react-router-dom"


const Navbar = () => {

const [active ,Setactive]=useState(false);
const showMenu = () => {
  Setactive(!active)
};
  return (

    <div>
     
    <div className= "w-full flex items-center fixed justify-between md:mt-10 md:ml-14 h-24 drop-shadow-2xl	 " >
      {/* logo + line*/}
      <div >
        <Link to="/"><img className="ml-4" src={Logo} alt="logo"></img></Link>
        <div className="absolute top-12  opacity-10 left-20 hidden w-1/3 h-px bg-white xl:block " ></div>
      </div>
      {/*Menu*/}
      <div className="
            drop-shadow-2xl
            bg-[#ffffff0a]
            backdrop-blur-sm         
            md:w-2/3
            h-full
            pl-10
            md:flex
            z-20
            items-center
            justify-between
            hidden">
        <ul className="justify-between 
            text-[#D0D6F9]
            w-4/5
            h-full
            flex">
          <li className="items-center flex p-2 my-4 md:my-0 cursor-pointer hover:border-b-4 duration-200 h-full"><span className="mr-2 font-bold hidden lg:block ">00</span><Link to="/" className="font-light">HOME</Link></li>
          <li className="items-center flex p-2 my-4 md:my-0 cursor-pointer hover:border-b-4 duration-200 h-full"><span className="mr-2 font-bold hidden lg:block ">01</span><Link to="/destination" className="font-light">DESTINATION</Link></li>
          <li className="items-center flex p-2 my-4 md:my-0 cursor-pointer hover:border-b-4 duration-200 h-full"><span className="mr-2 font-bold hidden lg:block ">02</span><Link to="/crew" className="font-light">CREW</Link></li>
          <li className="items-center flex p-2 my-4 md:my-0 cursor-pointer hover:border-b-4 duration-200 h-full"><span className="mr-2 font-bold hidden lg:block ">03</span><Link to="/technology" className="font-light">TECHNOLOGY</Link></li>
       </ul>
          
      </div>         
    </div>
    <MenuItems showMenu={showMenu} active={active}/>
    <button onClick={showMenu} className="md:hidden absolute top-2 right-6 mt-8 z-20 cursor-pointer " >
       <img alt='Menu' src={!active? Menu:Close }></img>
    </button>  



  
    </div>
  );
};

export default Navbar;
