import React, { useEffect } from 'react'
import bookingicon1 from '../assets/booking-icon-1.png'
import bookingicon2 from '../assets/booking-icon-2.png'
import bookingicon3 from '../assets/booking-icon-3.png'
import bookingicon4 from '../assets/booking-icon-4.png'
import bookingicon5 from '../assets/booking-icon-5.png'
import bookingicon6 from '../assets/booking-icon-6.png'
import bookingicon7 from '../assets/booking-icon-7.png'
import { PiTrainLight } from 'react-icons/pi'
import { HiOutlineBuildingLibrary } from 'react-icons/hi2'
import { GiNotebook } from 'react-icons/gi'
import { BiCabinet } from 'react-icons/bi'
import { GrNotes } from 'react-icons/gr'
const MidSection = () => {
    useEffect(()=>{
        const tabs = document.querySelectorAll('.tabs')
        const formField = document.querySelectorAll('.formField')
        tabs.forEach((Element,index)=>{
            Element.addEventListener('click',()=>{
                tabs.forEach((tab, tabIndex) => {
                    tab.classList.remove('active')
                })
                formField.forEach((form, tabIndex) => {
                    form.classList.remove('active')
                })
                Element.classList.add('active')
                if(Element.classList.contains('active')){

                    formField[index].classList.add('active')
                }
                
            })
        })

    })
    return (
        <div className='h-screen  flex   flex-col md:flex-row w-full'>
            <div className='leftCol pl-40 py-40 w-[40vw] h-screen relative   flex justify-center '>
                <div className='flex md:gap-20 gap-8 flex-row  flex-wrap absolute w-[100vw] left-0 md:w-[40vw]'>

                    <div className='flex mb-5 flex-col h-16 w-16 items-center'>
                        <img src={bookingicon1} />
                        <p className=' w-24 text-center text-white'>Ticket Booking</p>
                    </div>
                    <div className='flex mb-5 flex-col h-16 w-16 items-center'>
                        <img src={bookingicon2} />
                        <p className=' w-24 text-center text-white'>Train Enquiry</p>
                    </div>
                    <div className='flex mb-5 flex-col h-16 w-16 items-center'>
                        <img src={bookingicon3} />
                        <p className=' w-24 text-center text-white'>Reservation Enquiry</p>
                    </div>
                    <div className='flex mb-5 flex-col h-16 w-16 items-center'>
                        <img src={bookingicon4} />
                        <p className=' w-24 text-center text-white'>Retiring Enquiry</p>
                    </div>
                    <div className='flex flex-col h-16 w-16 items-center'>
                        <img src={bookingicon5} />
                        <p className=' w-24 text-center text-white'>Indian Railways</p>
                    </div>
                    <div className='flex flex-col h-16 w-16 items-center'>
                        <img src={bookingicon6} />
                        <p className=' w-24 text-center text-white'>UTS Ticketing</p>
                    </div>
                    <div className='flex flex-col h-16 w-16 items-center'>
                        <img src={bookingicon7} />
                        <p className=' w-24 text-center text-white'>Freight Business</p>
                    </div>
                    <div className='flex flex-col h-16 w-16 items-center'>
                        <img src={bookingicon6} />
                        <p className=' w-24 text-center text-white'>Railway Parcel Website</p>
                    </div>
                </div>

            </div>
            <div className='rightCol w-[60vw] flex relative md:flex-row flex-col justify-center h-[110vh]'>
                <div className='formFieldContainer absolute flex flex-row md:flex-col md:top-24 md:left-7'>
                    <div className=' md:h-[89px] tabs h-[50px] w-[100px] active flex border-[#9e2452] border-1 border-solid flex-col justify-center items-center gap-1 md:w-[152px] bg-[#930b3e] hover:bg-[#75002b]'>
                        <PiTrainLight className='text-[2rem] md:text-[3rem]   text-white font-bold'/>
                        <p className='text-white text-sm md:text-md'>TRAIN</p>
                    </div>
                    <div className=' md:h-[89px] tabs h-[50px] w-[100px] flex border-[#9e2452] border-1 border-solid flex-col justify-center items-center gap-1 md:w-[152px] bg-[#930b3e] hover:bg-[#75002b]'>
                        <HiOutlineBuildingLibrary className='text-[2rem] md:text-[3rem]   text-white font-bold'/>
                        <p className='text-white text-sm md:text-md'>STATION</p>
                    </div>
                    <div className=' md:h-[89px] tabs h-[50px] w-[100px] flex border-[#9e2452] border-1 border-solid flex-col justify-center items-center gap-1 md:w-[152px] bg-[#930b3e] hover:bg-[#75002b]'>
                        <GiNotebook className='text-[2rem] md:text-[3rem]   text-white font-bold'/>
                        <p className='text-white text-sm md:text-md'>APPRECIATION</p>
                    </div>
                    <div className=' md:h-[89px] tabs h-[50px] w-[100px] flex border-[#9e2452] border-1 border-solid flex-col justify-center items-center gap-1 md:w-[152px] bg-[#930b3e] hover:bg-[#75002b]'>
                        <BiCabinet className='text-[2rem] md:text-[3rem]   text-white font-bold'/>
                        <p className='text-white text-sm md:text-md'>ENQUIRY</p>
                    </div>
                    <div className=' md:h-[89px] tabs h-[50px] w-[100px] flex border-[#9e2452] border-1 border-solid flex-col justify-center items-center gap-1 md:w-[152px] bg-[#930b3e] hover:bg-[#75002b]'>
                        <GrNotes className='text-[2rem] md:text-[3rem]   text-white font-bold'/>
                        <p className='text-white text-sm md:text-md text-center'>Track Your Concerns</p>
                    </div>
                    <div className=' md:h-[89px] tabs h-[50px] w-[100px] flex border-[#9e2452] border-1 border-solid flex-col justify-center items-center gap-1 md:w-[152px] bg-[#930b3e] hover:bg-[#75002b]'>
                        <GiNotebook className='text-[2rem] md:text-[3rem]   text-white font-bold'/>
                        <p className='text-white text-sm md:text-md'>ENQUIRY</p>
                    </div>
                    
                </div>
                <div className='bg-[#ffffffe6] flex flex-col absolute md:top-20 md:right-10 top-32  h-[721px] w-[100vw] md:h-[721px] md:w-[692px]'>
                <div className='relative w-[100vh] h-[100vh] md:w-[100%] md:h-[100%]'>

                    <div className=' md:w-[100%] formField active h-[80%] w-[80%] md:h-[100%]  absolute'>
                        <div className=' p-5 border-b-[1px] border-solid border-[#aaa] flex w-[80%]  md:w-[100%] justify-between items-center'>
                            <h1 className='md:text-2xl text-xl font-bold text-[#75002b]'>Grievance Detail</h1>
                                <h3 className='md:text-sm text-[15px]'><span className='text-[#ff0000] '>*</span>MandatoryFields</h3>
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>

                            <p>Mobile.no</p>
                            <input type='number' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]'/>
                            </div>

                                <button className='bg-[#75002b] p-2 text-white font-md md:h-[41px] h-[30px] w-[80px] md:w-[113px] flex justify-center items-center  rounded-md'>Get Otp</button>
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>
                            <p>Journey Details<span className='text-[#ff0000]'>*</span></p>
                                    <select type='number' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]'>
                                    <option value='1'>PNR</option>
                                    <option value='2'>UTS</option>
                                </select>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <p>PNR No<span className='text-[#ff0000]'>*</span></p>
                                    <input type='number' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>
                            <p>Incident Date<span className='text-[#ff0000]'>*</span></p>
                                    <input type='date' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>                        
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>
                            <p>Upload File</p>
                                    <input type='file' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col w-full gap-3'>
                            <p>Grievance Description</p>
                                <textarea className='md:w-full md:h-28 w-[80%] h-[100px]' ></textarea>
                            </div>
                           
                        </div>
                    </div>


                    <div className='md:w-[100%] formField  h-[80%] w-[60%] md:h-[100%]  absolute '>
                            <div className=' p-5 border-b-[1px] border-solid border-[#aaa] flex w-[80%]  md:w-[100%] justify-between items-center'>
                                <h1 className='md:text-2xl text-xl font-bold text-[#75002b]'>Grievance Detail</h1>
                                <h3 className='md:text-sm text-[15px]'><span className='text-[#ff0000] '>*</span>MandatoryFields</h3>
                            </div>
                        
                        
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>
                            <p>Incident Date<span className='text-[#ff0000]'>*</span></p>
                                <input type='date' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>                        
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>
                            <p>Upload File</p>
                                <input type='file' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>

                                <p>Mobile.no</p>
                                <input type='number' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>

                                <button className='bg-[#75002b] p-2 text-sm md:text-md text-white font-md md:h-[41px] h-[50px] w-[180px] md:w-[113px] flex justify-center items-center rounded-md'>Get Otp</button>
                        </div>  
                        
                    </div>

                    <div className='md:w-[100%] formField  h-[80%] w-[60%] md:h-[100%]  absolute '>
                            <div className=' p-5 border-b-[1px] border-solid border-[#aaa] flex w-[80%]  md:w-[100%] justify-between items-center'>
                                <h1 className='md:text-2xl text-xl font-bold text-[#75002b]'>Grievance Detail</h1>
                                <h3 className='md:text-sm text-[15px]'><span className='text-[#ff0000] '>*</span>MandatoryFields</h3>
                            </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>

                                <p>Mobile.no</p>
                                <input type='number' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>

                            <button className='bg-[#75002b] p-2 text-white font-md h-[41px] w-[113px] rounded-md'>Get Otp</button>
                        </div> 
                        
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>
                            <p>Mode<span className='text-[#ff0000]'>*</span></p>
                                <select className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]'>
                                    <option>Train</option>
                                    <option>Station</option>
                                    
                                </select>
                            </div>                        
                            <div className='flex flex-col gap-3'>
                            <p>Train no./Station name<span className='text-[#ff0000]'>*</span></p>
                                <input type='text' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>                        
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>
                            <p>Positive Aspects</p>
                                <select className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]'>
                                <option>Neat & Clean Coaches</option>
                                <option>Clean Toilets</option>
                                <option>Good Quality & Clean Bed Roll</option>
                                <option>Courteous & Prompt Behaviour of Staff</option>
                                <option>Good Food</option>
                                <option>Support Provided for Senior Citizen,Divyang & Women</option>
                                <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col w-full gap-3'>
                                <p>Write Your Experience</p>
                                <textarea className='w-full h-28' ></textarea>
                            </div>

                        </div>
                         
                        
                    </div>

                    <div className='md:w-[100%]  formField h-[80%] w-[60%] md:h-[100%]  absolute '>
                            <div className=' p-5 border-b-[1px] border-solid border-[#aaa] flex w-[80%]  md:w-[100%] justify-between items-center'>
                                <h1 className='md:text-2xl text-xl font-bold text-[#75002b]'>Grievance Detail</h1>
                                <h3 className='md:text-sm text-[15px]'><span className='text-[#ff0000] '>*</span>MandatoryFields</h3>
                            </div>


                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>
                                <p>Incident Date<span className='text-[#ff0000]'>*</span></p>
                                <input type='date' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>
                                <p>Upload File</p>
                                <input type='file' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col gap-3'>

                                <p>Mobile.no</p>
                                <input type='number' className='md:h-[42px] h-[32px] w-[160px] md:w-[308px]' />
                            </div>

                            <button className='bg-[#75002b] p-2 text-white font-md h-[41px] w-[113px] rounded-md'>Get Otp</button>
                        </div>

                    </div>


                    <div className='md:w-[100%] formField  h-[80%] w-[60%] md:h-[100%]  absolute  '>
                            <div className=' p-5 border-b-[1px] border-solid border-[#aaa] flex w-[80%]  md:w-[100%] justify-between items-center'>
                                <h1 className='md:text-2xl text-xl font-bold text-[#75002b]'>Grievance Detail</h1>
                                <h3 className='md:text-sm text-[15px]'><span className='text-[#ff0000] '>*</span>MandatoryFields</h3>
                            </div>


                        <div className='flex flex-col items-center w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col w-full gap-3'>
                                <p>Reference No.<span className='text-[#ff0000]'>*</span></p>
                                <input type='text' className='h-[42px] w-full' />
                            </div>
                            <button className='h-[41px] w-[330px] rounded-md bg-[#75002b] text-white'>Submit </button>
                        </div>
                        
                        

                    </div>

                    <div className='md:w-[100%]  formField h-[80%] w-[60%] md:h-[100%]  absolute  '>
                            <div className=' p-5 border-b-[1px] border-solid border-[#aaa] flex w-[80%]  md:w-[100%] justify-between items-center'>
                                <h1 className='md:text-2xl text-xl font-bold text-[#75002b]'>Grievance Detail</h1>
                                <h3 className='md:text-sm text-[15px]'><span className='text-[#ff0000] '>*</span>MandatoryFields</h3>
                            </div>


                        <div className='flex flex-col items-center w-full  gap-6 p-4 '>
                            <div className='flex flex-col w-full gap-3'>
                                <p>Suggestion<span className='text-[#ff0000]'>*</span></p>
                                <select className='h-[42px] w-full' >
                                <option>New Train</option>
                                <option>New Stoppage</option>
                                <option>Passenger Amenities</option>
                                <option>Freight Services</option>
                                <option>High Speed Rail Travel</option>
                                <option>Infusing Technology</option>
                                <option>Reducing Carbon Footprints</option>
                                <option>Others</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex w-full items-end gap-6 p-4 '>
                            <div className='flex flex-col w-full gap-3'>
                                <p>Description</p>
                                <textarea className='w-full h-[75px]' ></textarea>
                            </div>

                        </div>
                        <div className='flex items-end justify-end w-full  gap-6 p-4 '>
                            
                            <input type='reset' className='h-[41px] w-[107px] rounded-md bg-[#75002b] text-white'/> 
                            <input type='submit' className='h-[41px] w-[107px] rounded-md bg-[#75002b] text-white'/> 
                        </div>




                    </div>
                </div>















                    
                </div>

            </div>
        </div>
    )
}

export default MidSection
