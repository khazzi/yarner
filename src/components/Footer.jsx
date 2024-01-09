import React from 'react'
import {SlSocialInstagram, SlSocialFacebook, SlSocialTwitter, SlSocialGithub} from 'react-icons/sl'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto my-16 grid lg:grid-cols-3 gap-8'>
      <div className=' ml-4'>
        <h1 className='w-full text-xl font-bold text-[#b7eef5]'>Trade_With_Khazzi</h1>
        <p className='text-white'>We aren't liable to be held accountable for any loss of capital or profits as a result of over-leveraging our signals, we put in place effective money management guidelines to secure you. Thank you.</p>
      </div>
      <div className='flex justify-between w-[90%] md:w-[70%] border-white bg-sky-200 p-4 md:p-6 my-6 rounded-lg mx-auto '>
        <div className='mx-auto'><SlSocialFacebook size={30} /></div>
        <div className='mx-auto'><SlSocialInstagram size={30} /></div>
        <div className='mx-auto'><SlSocialTwitter size={30} /></div>
        <div className='mx-auto'><SlSocialGithub size={30} /></div>
      </div>
      <div>
        <div className='text-white ml-4'>
          <h6>Support</h6>
          <ul>
            <li>Pricing</li>
            <li>Documentation</li>
            <li>Guides</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Footer