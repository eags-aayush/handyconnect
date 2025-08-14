import React from 'react'
import Navbar from '../components/Navbar'
import pfp from '/pfp.jpg'

const Profile = () => {
  return (
    <>
      <div className='flex flex-col gap-10 pb-25'>
        <section className='flex flex-col justify-center items-center'>
        <span className='font-bold text-lg mb-10 pt-5'>Profile</span>
          <div className='flex flex-col justify-center items-center gap'>
            <img src={pfp} alt="profile picture" className='rounded-full w-25 mb-3' />
            <span className='font-bold text-xl'>Aayush Laddha</span>
            <span className='font-semibold text-gray-500'>Member since Aug 2025</span>
          </div>
        </section>

        <section className='px-5 flex flex-col justify-center'>
          <span className='font-bold'>Account</span>
          <ul>
            <li className='py-3'>Contact Details</li>
            <li className='py-3'>Payment Methods</li>
            <li className='py-3'>Previous Bookings</li>
          </ul>
        </section>

        <section className='px-5 flex flex-col justify-center'>
          <span className='font-bold'>Support</span>
          <ul>
            <li className='py-3'>Terms of Service</li>
            <li className='py-3'>Privacy Policy</li>
          </ul>
        </section>

        <section className='px-5 flex flex-col justify-center'>
          <span className='font-bold'>Contact Us</span>
          <ul>
            <li className='py-3'>+91 8420996300</li>
            <li className='py-3'>contact@handyconnect.in</li>
          </ul>
        </section>
      </div>
      <Navbar />
    </>
  )
}

export default Profile