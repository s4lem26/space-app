import React, { useState } from 'react'
import Data from '../assets/data.json'

const Technology = () => {
  const[techindex, Settechindex] = useState(0);
  return (
    <div className=" w-full overflow-y-scroll md:overflow-y-hidden md:w-full h-full lg:bg-tech-desktop bg-tech-mobile md:bg-tech-tablet bg-cover bg-no-repeat bg-center pt-28">
       <section className='text-white pt-12 h-full w-full flex-col flex items-center md:items-start'>
       <div className="flex md:ml-20 text-2xl tracking-wider font-thin md:mb-0 mb-6">
              <span className="text-[#D0D6F9]">01</span>
              <h1 className="ml-4">SPACE LAUNCH 101</h1></div>
              {/*info */}
              <div className='flex h-full w-full md:flex-row flex-col'>
                {/*steps*/}
                <div className='flex md:items-start items-center md:flex-row flex-col md:order-first order-last gap-8'> 
                  <div className='h-full flex flex-row md:pl-20 lg:pt-10 md:flex-col'>
                    <button onClick={()=>{Settechindex(0)}} className='my-4 mx-4 font-Bellefair text-white bg-transparent rounded-full h-16 w-16 border-2 border-gray-600 focus:text-gray-600 focus:bg-white hover:border-gray-400 text-2xl'>1</button>
                    <button onClick={()=>{Settechindex(1)}} className='my-4 mx-4 font-Bellefair text-white bg-transparent rounded-full h-16 w-16 border-2 border-gray-600 focus:text-gray-600 focus:bg-white hover:border-gray-400 text-2xl'>2</button>
                    <button onClick={()=>{Settechindex(2)}} className='my-4 mx-4 font-Bellefair text-white bg-transparent rounded-full h-16 w-16 border-2 border-gray-600 focus:text-gray-600 focus:bg-white hover:border-gray-400 text-2xl'>3</button>
                  </div>
                  <div className='md:w-2/5 lg:pt-14 text-center lg:text-start'>
                  <h5 className='mb-6 text-[#D0D6F9]'>THE TERMINOLOGY...</h5>
                  <h1 className='uppercase text-4xl my-6 font-Bellefair'>{Data.technology[techindex].name}</h1>
                  <p className='text-[#D0D6F9] md:px-0 px-8'>{Data.technology[techindex].description}</p>
                  </div>               
                </div>
                <img className='hidden md:block lg:pr-6 lg:pb-14 h-full' src={Data.technology[techindex].images.portrait}></img>
                <img className='block md:hidden pt-8' src={Data.technology[techindex].images.landscape}></img>
              </div>
        </section>     
    </div>
  )
}

export default Technology