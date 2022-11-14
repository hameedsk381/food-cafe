import React from 'react'

import { useState } from 'react'

import marley from '../assets/marley.jpg'

import { AiOutlineMenu, AiOutlineCloseCircle, AiOutlineSearch } from 'react-icons/ai'

import { IoMdCall } from 'react-icons/io'
import { TbDownload, TbFriends, TbHeart, TbHelp, TbTag, TbTruckDelivery, TbWallet } from 'react-icons/tb'


const Nav = () => {


   const [nav, setNav] = useState(false)

   return (
      <>
         <div className="max-w-[1640px] mx-auto flex justify-between items-center p-1 ">
            <div className="flex items-center">


               <button className=" border-none" onClick={setNav}><AiOutlineMenu size={25} /></button>


               <img src={marley} alt="logo" className='lg:w-[35px]  w-[25px]' />
               <div className="title lg:mx-4 mx-1 cursor-pointer">
                  <h6 className="font-xono lg:text-2xl text-sm font-semibold">Marley's Joint</h6>
               </div>
               <div className="bg-gray-200 flex rounded-full p-1  lg:flex items-center text-[14px] mx-6 ">

                  <p className='bg-black p-1 rounded-full text-white'>
                     Delivery
                  </p>
                  <p className='p-1'>
                     Pickup
                  </p>
               </div>
               <div className=" mx-15 hidden md:flex lg:w-[750px] md:w-[300px]  bg-gray-200 rounded-full outline-none p-2 h-10">
                  <AiOutlineSearch size={25} />
                  <input type="text" className='w-full hidden md:flex lg:w-[700px] md:w-[300px]  bg-transparent rounded-full outline-none border-0  focus:border-none focus:ring-0' placeholder=' Search food' />
               </div>

               <a className='lg:mx-5 flex bg-red-900 outline-none border-0 text-white items-center rounded-full p-3 ' href="tel:+916304752908" >
                  <IoMdCall size={22} /> <span className='mx-1 hidden lg:block '>Call Us</span>
               </a>
               {nav ?
                  <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

               <div className={nav ? 'fixed top-0 left-0 w-[200px] lg:w-[300px] h-screen bg-gradient-to-b from-red-900 to-green-900 z-10 duration-300' : 'fixed top-0 left-[-100%] w-[200px] lg:w-[300px] h-screen bg-gradient-to-b from-red-900 to-green-900 z-10 duration-300'}>
                  <AiOutlineCloseCircle size={25} className='absolute right-4 top-4 cursor-pointer' onClick={() => setNav(!nav)} />

                  <h4 className="font-xono text-2xl font-semibold p-4 flex items-center "> <img src={marley} alt="logo" className='w-[35px] ' />  <span className="text-[15px] mx-3"> Marley's Joint</span></h4>
                  <nav>
                     <ul className='flex flex-col'>
                        <li className='text-md lg:text-xl  p-1 lg:p-3 my-2 lg:my-1 mx-4 flex items-center'> <TbTruckDelivery size={35} /><button className='font-sans  font-semibold outline-none border-0 ml-4'>Orders</button></li>
                        <li className='text-md lg:text-xl  p-1 lg:p-3 my-2 lg:my-1 mx-4 flex items-center'> <TbHeart size={35} /><button className='font-sans  font-semibold outline-none border-0 ml-4'>Favorites</button></li>
                        <li className='text-md lg:text-xl  p-1 lg:p-3 my-2 lg:my-1 mx-4 flex items-center'> <TbWallet size={35} /><button className='font-sans  font-semibold outline-none border-0 ml-4'>Wallet</button></li>
                        <li className='text-md lg:text-xl  p-1 lg:p-3 my-2 lg:my-1 mx-4 flex items-center'> <TbHelp size={35} /><button className='font-sans  font-semibold outline-none border-0 ml-4'>Help</button></li>
                        <li className='text-md lg:text-xl  p-1 lg:p-3 my-2 lg:my-1 mx-4 flex items-center'> <TbTag size={35} /><button className='font-sans  font-semibold outline-none border-0 ml-4'>Promotions</button></li>
                        <li className='text-md lg:text-xl  p-1 lg:p-3 my-2 lg:my-1 mx-4 flex items-center'> <TbDownload size={35} /><button className='font-sans  font-semibold outline-none border-0 ml-4'>Best One</button></li>
                        <li className='text-md lg:text-xl  p-1 lg:p-3 my-2 lg:my-1 mx-4 flex items-center'> <TbFriends size={35} /><button className='font-sans  font-semibold outline-none border-0 ml-4'>Invite Friends</button></li>
                     </ul>
                  </nav>


               </div>


            </div>
         </div>



      </>
   )
}

export default Nav