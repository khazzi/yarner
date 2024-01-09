import React from 'react'
import ref from '../assets/ref.jpeg';
import lef from '../assets/lef.jpeg';
import fer from '../assets/fer.jpeg'

const Reviews = () => {
  return (
    <div className=' w-full bg-[#b7eef5]'>
        <h1>A couple reviews from customers</h1>
      <div classname=' w-full mx-auto md:grid-cols-3'>
      <div className='w-[300px]  rounded-md'><img src={ref} alt="/" /></div>
      <div className='w-[300px] h-100 rounded-md'><img src={fer} alt="/" /></div>
      <div className='w-[300px] h-100 rounded-md'><img src={lef} alt="/" /></div>
      </div>
    </div>
  )
}

export default Reviews