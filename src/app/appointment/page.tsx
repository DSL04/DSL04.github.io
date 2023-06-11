"use client"

import './appointment.scss'
import React, { useState } from 'react';
import MyCalendar from '../../../component/calendar/calendar';


export default function Appointment() {
    const [showModal, setShowModal] = useState(false);
    const [selectedButton, setSelectedButton] = useState('');
    const [currentStep, setCurrentStep] = useState(1);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [city, setCity] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const handleButtonClick = (buttonValue: React.SetStateAction<string>) => {
    setSelectedButton(buttonValue);
    setCurrentStep(1);
    setShowModal(true);
  };

    const closeModal = () => {
    setShowModal(false);
  };

    const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
    setSelectedDate(date);
    setSelectedTime(time);
    setSelectedCity(city)
  };

  const handleBefore = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleDateChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setTime(event.target.value);
  };

  const handleCityChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setCity(event.target.value);
  };

  const handleFirstNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setLastName(event.target.value);
  };


    return (
        <div>
            {/* Top Image with Title */}
            <div className=' flex  justify-center items-center'>
                <div className=' serviceTitleImage'></div>
                <div className='absolute'><h1 className='serviceTitleText'>OUR SERVICES</h1></div>
            </div>

            {/* The services */}
            <div className="grid grid-cols-2 grid-rows-3 gap-3 justify-items-center mt-5">
                <div className="">
                    <div className=''><img className='imageStyling w-72' src='https://www.byrdie.com/thmb/bPRFkPqEM6g6ZgsU2mVdBcgQQxs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/120204360_4253312141364853_6255456248061584670_n-26cbf0037a4a4ca7ba559d969990edaf.jpg' /></div>
                    <div className=' space-y-8'>
                        <div className=' flex mt-4'>
                            <div className='serviceText flex justify-start min-w-max'>FULL CUT</div>
                            <div className='serviceText flex justify-end'>28$</div>
                        </div>
                        <div className=' cutDescriptionText w-72 flex justify-center'> A COMPLETE HAIRCUT THAT INVOLVES THE BEARD</div>
                        <div className=' serviceText flex justify-center'><button onClick={() => handleButtonClick('FULL CUT')} value="FULL CUT" className='button button3'>SELECT CUT</button></div>
                    </div>
                </div>
                
                <div className="">
                    <div className=''><img className='imageStyling w-72 h-72' src='https://i.pinimg.com/564x/29/ac/7c/29ac7c05e9f34738cb5f917383b449f8.jpg' /></div>
                    <div className=' space-y-8'>
                        <div className=' flex mt-4'>
                            <div className='serviceText flex justify-start min-w-max'>BEARD JOB</div>
                            <div className='serviceText flex justify-end'>15$</div>
                        </div>
                        <div className=' cutDescriptionText w-72 flex justify-center'> TRIMMING, SHAPING, AND GROOMING OF FACIAL HAIR</div>
                        <div className=' serviceText flex justify-center'><button onClick={() => handleButtonClick('BEARD JOB')} value="BEARD JOB" className='button button3'>SELECT CUT</button></div>
                    </div>
                </div>
                
                <div className="">
                    <div className=''><img className='imageStyling w-72 h-72 align-top' src='https://www.menshairstyletrends.com/wp-content/uploads/2020/07/Mexican-taper-fade-haircut-omithebarber_-820x1024.jpg' /></div>
                    <div className=' space-y-8'>
                        <div className=' flex mt-4'>
                            <div className='serviceText flex justify-start min-w-max'>TAPER</div>
                            <div className='serviceText flex justify-end'>20$</div>
                        </div>
                        <div className=' cutDescriptionText w-72 flex justify-center'> GRADUALLY DECREASING THE LENGTH OF THE HAIR FROM THE TOP TO THE SIDES AND BACK</div>
                        <div className=' serviceText flex justify-center'><button onClick={() => handleButtonClick('TAPER')} value="TAPER" className='button button3'>SELECT CUT</button></div>
                    </div>
                </div>
                
                <div className="">
                    <div className=''><img className='imageStyling w-72' src='https://i.pinimg.com/564x/5c/c8/0e/5cc80e763c515beb07830f31fabe36a2.jpg' /></div>
                    <div className=' space-y-8'>
                        <div className=' flex mt-4'>
                            <div className='serviceText flex justify-start min-w-max'>KIDS CUT(14)</div>
                            <div className='serviceText flex justify-end'>22$</div>
                        </div>
                        <div className=' cutDescriptionText w-72 flex justify-center'> FULL CUT FOR CHILDREN. ONLY KIDS BELOW THE AGE OF 15 YEARS OF AGE ARE ELIGIBLE FOR THIS CUT</div>
                        <div className=' serviceText flex justify-center'><button onClick={() => handleButtonClick('KIDS CUT')} value="KIDS CUT" className='button button3'>SELECT CUT</button></div>
                    </div>
                </div>
                
                <div className="mt-6">
                    <div className=''><img className='imageStyling lineupSwitch w-72' src='https://i.pinimg.com/564x/cc/46/6e/cc466e1cd315442ff3ce853ef6525c7d.jpg' /></div>
                    <div className=' space-y-8'>
                        <div className=' flex mt-4'>
                            <div className='serviceText flex justify-start min-w-max'>LINE-UP</div>
                            <div className='serviceText flex justify-end'>10$</div>
                        </div>
                        <div className=' cutDescriptionText w-72 flex justify-center'> SHAPING AND DEFINING OF THE HAIRLINE AND EDGES</div>
                        <div className=' serviceText flex justify-center'><button onClick={() => handleButtonClick('LINE-UP')} value="LINE-UP" className='button button3'>SELECT CUT</button>
                        

                        </div>
                    </div>
                </div>
                
            </div>

            {/*Modal Component  */}
            <div className={`modal ${showModal ? 'is-active' : ''}`}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    
                    <header className="modal-card-head">
                        <div className='logo'></div>
                        <div className=''><button onClick={closeModal} className="delete" aria-label="close"></button></div>
                    </header>

                    {/* Modal Step 1 */}
                    <div className="modal-card-body">
                        {currentStep === 1 && (<div className='flex justify-between'>
                            <div className='space-y-10 w-1/3'>
                                <div className='nonSelectedStep mt-5 flex justify-center'><b>{selectedButton}</b></div>
                                <div className='selected flex justify-center text-white'><b>STEP 1: DATE SELECTION</b></div>
                                <div className='nonSelectedStep flex justify-center'><b>STEP 2: CONTACT INFORMATION</b></div>
                            </div>

                            <div className='space-y-10 mr-5'>
                                <div className="control flex mt-5">
                                    <div className="select">
                                        <select onChange={handleCityChange}>
                                            <option>SELECT CITY</option>
                                            <option value="OTTAWA">OTTAWA</option>
                                            <option value="TORONTO">TORONTO</option>
                                        </select>
                                    </div>
                                </div>

                                <div className=' flex'><MyCalendar/></div>
                                
                                <div className="control">
                                    <div className="select">
                                        <select onChange={handleTimeChange}>
                                            <option>SELECT AVAILABLE TIME</option>
                                            <option value="9:00 AM">9:00 AM</option>
                                            <option value="9:30 AM">9:30 AM</option>
                                            <option value="10:00 AM">10:00 AM</option>
                                            <option value="10:30 AM">10:30 AM</option>
                                            <option value="11:00 AM">11:00 AM</option>
                                            <option value="11:30 AM">11:30 AM</option>
                                            <option value="12:00 PM">12:00 PM</option>
                                            <option value="12:30 PM">12:30 PM</option>
                                            <option value="1:00 PM">1:00 PM</option>
                                            <option value="1:30 PM">1:30 PM</option>
                                            <option value="2:00 PM">2:00 PM</option>
                                            <option value="2:30 PM">2:30 PM</option>
                                            <option value="3:00 PM">3:00 PM</option>
                                            <option value="3:30 PM">3:30 PM</option>
                                            <option value="4:00 PM">4:00 PM</option>
                                            <option value="4:30 PM">4:30 PM</option>
                                            <option value="5:00 PM">5:00 PM</option>
                                            <option value="5:30 PM">5:30 PM</option>
                                            <option value="6:00 PM">6:00 PM</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='flex justify-end mb-5'><button onClick={handleNext} className='button nextButton'>NEXT</button></div>

                            </div>
                        </div> )} 

                        {/* Modal Step 2 */}
                    {currentStep === 2 && (
                        <div className='flex justify-between'>
                            <div className='space-y-10 w-1/3'>
                                <div className='nonSelectedStep mt-5 flex justify-center'><b>{selectedButton}</b></div>
                                <div className='nonSelectedStep flex justify-center text-white'><b>STEP 1: DATE SELECTION</b></div>
                                <div className='selected flex justify-center'><b>STEP 2: CONTACT INFORMATION</b></div>
                            </div>

                            <div className='space-y-8 mr-5'>
                                <div className="control flex mt-5 justify-center">
                                    <div className="field">
                                        <label className="label">PHONE#</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="e.g 613-xxx-xxxx"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="field">
                                        <label className="label">EMAIL</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="e.g email@gmail.com"/>
                                        </div>
                                </div>

                                <div className=' flex justify-evenly'>
                                    <div className="field">
                                            <label className="label">FIRST NAME</label>
                                            <div className="control">
                                                <input onChange={handleFirstNameChange} className="input" type="text" placeholder="e.g JON"/>
                                            </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">LAST NAME</label>
                                        <div className="control">
                                            <input onChange={handleLastNameChange} className="input" type="text" placeholder="e.g ZACK"/>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className=' mb-5 flex justify-around'>
                                    <div><button onClick={handleBefore} className='button returnButton'>RETURN</button></div>
                                    <div className=''><button onClick={handleNext} className='button nextButton'>COMPLETE</button></div>
                                </div>

                            </div>
                        </div>  
                        )}

                        {/* Modal booking Confirmation */}
                        {currentStep === 3 && (<div className=' mt-5 w-auto h-auto confirmationText'>
                            THANK YOU FOR BOOKING WITH US, SEE YOU ON {date} {time} at {city} , {firstName} {lastName}
                        </div> )}
                        
                    </div> 
                </div>
            </div>





        </div>
    )
}