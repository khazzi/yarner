import React, {useState} from 'react'
import {BsBarChartFill} from 'react-icons/bs'
import {AiOutlineCloseCircle} from 'react-icons/ai'
const Navbar = () => {
    const [nav, setnav] = useState(false)

    const handleNav = () => {
        setnav(!nav)
    }

  return (
    <div className='flex justify-between items-center max-w-[1240px] text-white h-24 mx-auto'>
        <h1 className='w-full text-xl font-bold text-[#b7eef5]'>Trade_With_Khazzi</h1>
        <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Subscriptions</li>
        <li className='p-4'>Profile</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {nav ? <AiOutlineCloseCircle size={30} /> : <BsBarChartFill size={30} />}
            
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[41%] h-full border-r border-r-gray-700 bg-sky-200 text-black ease-in-out duration-500 md:hidden' : 'fixed left-[-100%]' }>
        <h1 className='w-full text-xl font-bold text-[#2d4447]'>Trade_With_Khazzi</h1>
            <ul className='uppercase'>
            <li className='p-4 border-b border-gray-600'>Home</li>
            <li className='p-4 border-b border-gray-600'>Subscriptions</li>
            <li className='p-4 border-b border-gray-600'>Profile</li>
            <li className='p-4 border-b border-gray-600'>About</li>
            <li className='p-4 '>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar