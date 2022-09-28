import React, { useState }  from 'react'
import Data from '../assets/data.json'

const Destination = () => {
  let[destindex, Setdestindex] = useState(0);
  return (
    <div className="w-screen md:w-full h-screen md:overflow-y-hidden overflow-y-scroll lg:bg-dest-desktop bg-dest-mobile md:bg-dest-tablet bg-cover bg-no-repeat bg-center pt-28">
      <section className="text-white md:pt-28 pt-12 h-3/4 w-full flex-col flex items-center md:items-start ">
          <div className="flex md:ml-20 text-2xl tracking-wider font-thin md:mb-0 mb-24">
              <span className="text-[#D0D6F9]">01</span>
              <h1 className="ml-4 ">PICK YOUR DESTINATION</h1>
          </div>
          {/*dests*/}
          <div className='w-full h-full items-center flex md:flex-row flex-col mt-6 justify-around'>
            {/*img*/}
            <div>
              <img alt='destination' className='hover:scale-105 duration-200 w-52 lg:w-72' src={Data.destinations[destindex].images.png}></img>
            </div>
            {/*info+nav*/}
            <div className='max-w-sm items-center md:items-start md:pt-0 pt-10 flex flex-col'>
              {/*navigation*/}            
                <ul className='flex justify-between px-12 md:px-0 md:pr-20 w-full'>
                <button onClick={()=>{Setdestindex(0)}}>Moon</button>
                <button onClick={()=>{Setdestindex(1)}}>Mars</button>
                <button onClick={()=>{Setdestindex(2)}}>Europa</button>
                <button onClick={()=>{Setdestindex(3)}}>Titan</button>
                </ul>          
              {/*info*/}
                 <div className='flex items-center md:items-start flex-col'>
                  <h1 className='text-8xl font-Bellefair my-3'>{Data.destinations[destindex].name}</h1>
                  <p className='text-center	md:text-start text-[#D0D6F9]'>{Data.destinations[destindex].description}</p>
                 </div>
                 
                 <div className='h-px block w-full bg-white my-6'></div>
                 {/*distance+travel*/}
                 <div className='flex justify-evenly md:justify-between md:pr-24 my-6 w-full'>
                  <div className='flex flex-col md:text-start text-center'><p className='text-[#D0D6F9]'>AVG. DISTANCE</p><h2 className='font-Bellefair text-2xl '>{Data.destinations[destindex].distance}</h2></div>
                  <div className='flex flex-col md:text-start text-center'><p className='text-[#D0D6F9]'>EST. TRAVEL TIME</p><h2 className='font-Bellefair text-2xl '>{Data.destinations[destindex].travel}</h2></div>
                 </div>
            </div>
          </div>
      </section>
      </div>
  )
}

export default Destination