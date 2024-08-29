import React from 'react'
import logo from './assets/logog20.png'
import homebg from './assets/body-bg.jpg'
import { FaPhoneVolume } from "react-icons/fa6";
import MidSection from './components/MidSection';
const App = () => {
  return (
    <div className=' font-[poppins] h-screen w-full  '>
    <img src={homebg} className='h-full w-full fixed top-0 b-0 -z-[1]' ></img>
      <nav className='h-[160px] md:h-[108px] items-center top-0 flex flex-col  md:flex-row md:gap-[8vw]  px-16 w-[100vw] bg-white'>
        <div className='flex gap-2 md:order-1 order-2 '>

          <img src={logo} className='h-[50px] w-[120px]  md:h-[70px] md:w-[170px]' />
          <div className='h-[90px]'>
            <h1 className='text-[#75002b] font-bold md:text-4xl text-xl'>RailMadad</h1>
            <p className='h-[38px] w-[156px] text-[12px] md:text-sm md:w-full'>For Inquiry, Assistance & Grievance Redressal</p>
          </div>
        </div>
        <div className='flex items-center gap-3 md:order-2  order-3 '>

          <div className='text-white text-xl rounded-md animate-[wiggle_2s_ease-in-out_infinite] md:h-[49px] md:w-[112px] h-[25px] w-[67px] flex gap-2 justify-center items-center'>
            <FaPhoneVolume  />
            <p className='font-bold text-sm  md:text-2xl '>139</p>
          </div>
          <div className='text-[13px] w-[250px] '> for security/Medical Assistance</div>
        </div>

        <div className='flex gap-5 md:order-3 order-1  '>

          <button className='bg-[#dcdef9] h-8 w-20 rounded-md'>Log In</button>
          <button className='bg-[#efe4e8] h-8 w-20 rounded-md'>Sign Up</button>
          <select className='border-black h-8 w-20'>
            <option>English</option>
            <option>Hindi</option>
            <option>Marathi</option>
            <option>Telgu</option>
          </select>
        </div>
      </nav>

      <MidSection/>

    </div>
  )
}

export default App
