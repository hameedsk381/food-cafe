import React from 'react'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import {AiOutlineAccountBook, AiOutlineSearch} from 'react-icons/ai'
import {BsFillCartFill} from 'react-icons/bs'

const Nav = () => {
   const [isOpen, setIsOpen] = React.useState(false)
   const toggleDrawer = () => {
       setIsOpen((prevState) => !prevState)
   }

  return (
    <>
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 ">
      <div className="flex items-center">

     
    <button className=" border-none" onClick={toggleDrawer}><AiOutlineAccountBook size={35}/></button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
              <h1>Menu</h1>
            </Drawer>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl p-2'>
               Andhra <span className='font-bold'>Cafe</span>
            </h1>
            <div className="bg-gray-200 flex rounded-full mx-2 p-1 hidden lg:flex items-center text-[14px] mx-6 ">
               <p className='bg-black p-1 rounded-full text-white'>
                  Delivery
               </p>
               <p className='p-1'> 
                   Pickup
               </p>
            </div>
            <div className=" mx-15 hidden md:flex lg:w-[700px] md:w-[300px]  bg-gray-200 rounded-full outline-none p-2 h-10">
            <AiOutlineSearch size={25}/>
            <input type="text" className='w-full hidden md:flex lg:w-[700px] md:w-[300px]  bg-transparent rounded-full outline-none border-0  focus:border-none focus:ring-0' placeholder=' Search food' />
            </div>

            <button className='mx-5  flex bg-black text-white items-center ' >
               <BsFillCartFill size={22}/> <span className='mx-1 hidden lg:block '>Cart</span>
            </button>
            
          
</div>
    </div>
   


    </>
  )
}

export default Nav