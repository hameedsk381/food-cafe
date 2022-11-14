import React from 'react'
import burger from '../assets/burger1.jpg'
import marley from '../assets/marley.jpg'

const hero = () => {
  return (
    <div className='max-w-[1640px] mx-auto  pt-2 rounded h-screen' >
        <div className=' h-screen relative'>
       
            <div className="absolute w-full h-screen text-gray-200  bg-black/80 flex flex-col justify-center">
            <img src={marley} alt="logo" className='lg:w-[100px] w-[70px]  lg:ml-10 ml-3  lg:mb-10 mb-20 rounded-full' />
            <h1 className="px-4 text-4xl font-semibold  sm:text-3xl md:text-6xl lg:text-text-7xl">The<span className="text-orange-600"> Best</span></h1>
            <h1 className="px-4 text-4xl font-semibold  sm:text-3xl md:text-6xl lg:text-text-6xl text-orange-600">Foods<span  className="text-white"> Delivered</span ></h1>
            </div>
            <img src={burger} className='w-full h-screen ' alt="burger" />
           
        </div>
    </div>
  ) 
}

export default hero