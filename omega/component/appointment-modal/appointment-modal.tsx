'use client'

import './appointment-modal.scss';
import MyCalendar from '../calendar/calendar';
import { useState } from 'react';

export default function AppointmentModal() {
    const [showModal, setShowModal] = useState(false);

    const handleButtonClick = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="modal is-active">
            <div className="modal-background"></div>
                <div className="modal-card">
                    
                    <header className="modal-card-head">
                        <div className='logo'></div>
                        <div className=''><button onClick={closeModal} className="delete" aria-label="close"></button></div>
                    </header>

                    {/* Modal Step 1 */}
                    <div className="modal-card-body">
                        <div className='flex justify-between'>
                            <div className='space-y-10 w-1/3'>
                                <div className='nonSelectedStep mt-5 flex justify-center'><b>THE SELECTED CUT</b></div>
                                <div className='selected flex justify-center text-white'><b>STEP 1: DATE SELECTION</b></div>
                                <div className='nonSelectedStep flex justify-center'><b>STEP 2: CONTACT INFORMATION</b></div>
                            </div>

                            <div className='space-y-10 mr-5'>
                                <div className="control flex mt-5">
                                    <div className="select">
                                        <select>
                                            <option>SELECT CITY</option>
                                            <option value="OTTAWA">OTTAWA</option>
                                            <option value="TORONTO">TORONTO</option>
                                        </select>
                                    </div>
                                </div>

                                {/* <div className=' flex'><MyCalendar/></div> */}

                                <div className="control">
                                    <div className="select">
                                        <select>
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

                                <div className='flex justify-end mb-5'><button className='button nextButton'>NEXT</button></div>

                            </div>
                        </div>  
                    </div>

                    {/* Modal Step 2 */}
                    {/* <div className="modal-card-body">
                        <div className='flex justify-between'>
                            <div className='space-y-10 w-1/3'>
                                <div className='nonSelectedStep mt-5 flex justify-center'><b>THE SELECTED CUT</b></div>
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
                                                <input className="input" type="text" placeholder="e.g JON"/>
                                            </div>
                                    </div>

                                    <div className="field">
                                        <label className="label">LAST NAME</label>
                                        <div className="control">
                                            <input className="input" type="text" placeholder="e.g ZACK"/>
                                        </div>
                                    </div>
                                </div>
                                

                                <div className=' mb-5 flex justify-around'>
                                    <div><button className='button returnButton'>RETURN</button></div>
                                    <div className=''><button className='button nextButton'>COMPLETE</button></div>
                                </div>

                            </div>
                        </div>  
                    </div> */}

                    
                    {/* Modal booking Confirmation */}
                    {/* <div className="modal-card-body">
                        <div className=' mt-5 w-auto h-auto confirmationText'>
                            THANK YOU FOR BOOKING WITH US, SEE YOU ON DATE TIME , FIRST NAME LAST NAME   
                        </div> 
                    </div> */}

                </div>
        </div>
    )
}
