import React, { useState } from 'react'
import Data from '../assets/data.json'
const Crew = () => {

const[crewindex , Setcrewindex] = useState(0);
 
  return (
    <div className='md:overflow-y-hidden overflow-y-scroll w-screen md:w-full h-screen lg:bg-crew-desktop bg-crew-mobile md:bg-crew-tablet bg-cover bg-no-repeat bg-center pt-10 md:pt-26'>
      <section className='text-white mt-14 md:pt-10 lg:pt-28 md:pl-12 h-3/4 w-full flex-col flex md:items-start items-center'>
        <div className='flex lg:ml-20 text-2xl tracking-wider font-thin'>
          <span className="text-[#D0D6F9]">02</span>
          <h1 className="ml-4">MEET YOUR CREW</h1>
        </div>
        {/*content*/}
        <div className='flex flex-col items-center md:items-start justify-between md:pr-10  lg:px-20 md:flex-row w-full pt-14'>
          {/*info*/}
          <div className='h-3/4 md:w-4/6 flex-col lg:mt-8 flex items-center md:items-start'>
            <h3 className='text-2xl font-Bellefair text-[#D0D6F9] uppercase'>{Data.crew[crewindex].role}</h3>
            <h1 className='lg:text-4xl text-3xl tracking-wider w-full md:text-start text-center my-6 uppercase font-Bellefair'>{Data.crew[crewindex].name}</h1>
            <p className=' text-[#D0D6F9] md:w-4/6 md:text-start text-center '>{Data.crew[crewindex].bio}</p>
            {/*navigation*/}
            <div className='flex md:items-start md:justify-start justify-between items-center w-1/4 gap-4 mt-4 lg:mt-16'>
              <button onClick={()=>{Setcrewindex(0)}} className='w-3 h-3 rounded-full focus:bg-white hover:bg-gray-400 bg-gray-500'></button>
              <button onClick={()=>{Setcrewindex(1)}} className='w-3 h-3 rounded-full focus:bg-white hover:bg-gray-400 bg-gray-500'></button>
              <button onClick={()=>{Setcrewindex(2)}} className='w-3 h-3 rounded-full focus:bg-white hover:bg-gray-400 bg-gray-500'></button>
            </div>
          </div>
          <div>
            <img alt='crew' className='lg:h-96 md:h-64 h-3/4 w-full lg:mt-0 mt-8' src={Data.crew[crewindex].images.png}></img>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Crew