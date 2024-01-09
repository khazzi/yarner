import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='max-w-[800px] mt-[96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white '>
        <p className='text-[#b7eef5] font-bold uppercase p-2'>The best forex and crypto automated signal company</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold py-4'>Make Money Trading Forex And Crypto</h1>
        <div className='flex justify-center items-center'>
        <p className='md:text-5xl sm:text-4xl text-xl font-semibold'>Accurate signals for</p>
        <Typed className='md:text-5xl sm:text-4xl text-xl md:pl-4 pl-2 font-semibold'
        strings={['Forex', 'Gold', 'VIX', 'Crypto']}
        typeSpeed={200} 
        backSpeed={290} 
        loop />

        </div>
        <p className='md:text-2xl text-xl font-bold text-[#c3f2f8] my-2 md:my-4'>Get signals directly to your Whatsapp and Telegram</p>
        <button className='bg-[#b7eef5] text-black mx-auto w-[200px] rounded-md py-3 my-4 font-bold hover:scale-110 duration-105'>Get Started</button>
        
    </div>
  )
}

export default Hero