import React from 'react'
import coin from '../assets/dollar-coin.png';
import coins from '../assets/coins.png';
import bag from '../assets/moneybg.png';

const Subscriptions = () => {
  return (
    <div className='w-full bg-sky-200 py-[-10rem] px-4'>
      <div className='max-w-[1240px] grid md:grid-cols-3 mx-auto gap-8'>
      <div className='w-full flex flex-col text-center text-xl border-black shadow-xl hover:scale-105 duration-300 bg-sky-250 rounded-lg'>
        <img className='w-20 mx-auto mt-[3rem] bg-sky-200 rounded-md' src={coin} alt="/" />
        <h2 className='text-2xl font-bold text-center'>Forex Monthly</h2>
        <p>Major currencies</p>
        <p>Minor currencies</p>
        <p>Volatility Indices</p>
        <p className='font-bold md:text-3xl text-2xl '>$30</p>
        <button className='bg-sky-700 text-black border-black m-4 p-4 w-[50%] mx-auto rounded-lg font-semibold hover:scale-110 duration-105'>Continue</button>
      </div>
      <div className='w-full flex flex-col text-center text-xl border-black shadow-xl hover:scale-105 duration-300 bg-sky-250 rounded-lg'>
        <img className='w-20 mx-auto mt-[3rem] bg-sky-200 rounded-md' src={coins} alt="/" />
        <h2 className='text-2xl font-bold text-center'>Crypto Monthly</h2>
        <p>Spot Trading</p>
        <p>Futures Trading</p>
        <p>Shitcoins Apeing</p>
        <p className='font-bold md:text-3xl text-2xl '>$30</p>
        <button className='bg-sky-700 text-black border-black m-4 p-4 w-[50%] mx-auto rounded-lg font-semibold hover:scale-110 duration-105'>Continue</button>
      </div>
      <div className='w-full flex flex-col text-center text-xl border-black shadow-xl hover:scale-105 duration-300 bg-sky-250 rounded-lg'>
        <img className='w-20 mx-auto mt-[3rem] bg-sky-200 rounded-md' src={bag} alt="/" />
        <h2 className='text-2xl font-bold text-center'>Crypto and Forex Yearly</h2>
        <p>Forex 1000 pips monthly</p>
        <p>Crypto 100-1000% monthly</p>
        <p>Investment Guidelines</p>
        <p className='font-bold md:text-3xl text-2xl '>$500</p>
        <button className='bg-sky-700 text-black border-black m-4 p-4 w-[50%] mx-auto rounded-lg font-semibold hover:scale-110 duration-105'>Best offer</button>
      </div>
      </div>
    </div>
  )
}

export default Subscriptions