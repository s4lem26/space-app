import React from 'react'
const Home = () => {
return (
    <div className="w-full h-screen lg:bg-desktop-image bg-mobile-image md:bg-tablet-image bg-cover bg-center">
        <section className="text-white h-full w-full flex-col justify-between flex md:flex-row items-center px-48 pt-28">
            <div className="text-center md:text-start">
            <p className="text-[#D0D6F9] text-2xl uppercase tracking-wide font-thin ">
                So, you want to travel to
                </p>
            <h1 className="text-8xl my-6 md:relative right-2 text-white font-Bellefair">
                SPACE
                </h1>
            <p className="text-[#D0D6F9]">
                Let's face it; if you want to go to space, you might as well 
                <br></br> genuinely go to 
                outer space and not hover kind of on 
                <br></br> the edge of it. Well sit back, and relax 
                because we'll give you a 
                <br></br> truly out of this world experience!
                </p>
            </div>
            <div>
                <button className="h-64 w-64 rounded-full 
                font-Bellefair 
                text-5xl text-black bg-white
                mb-10
                hover:text-white
                hover:scale-105	
                hover:tracking-wider
                hover:drop-shadow-2xl
                hover:bg-[#ffffff0a]
                duration-200
                "><a href="/destination">EXPLORE</a></button>
            </div>
        </section>
    </div>
  )
}

export default Home