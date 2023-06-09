import './appointment.scss'

export default function Appointment() {
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
                        <div className=' serviceText flex justify-center'><button className='button button3'>SELECT CUT</button></div>
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
                        <div className=' serviceText flex justify-center'><button className='button button3'>SELECT CUT</button></div>
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
                        <div className=' serviceText flex justify-center'><button className='button button3'>SELECT CUT</button></div>
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
                        <div className=' serviceText flex justify-center'><button className='button button3'>SELECT CUT</button></div>
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
                        <div className=' serviceText flex justify-center'><button className='button button3'>SELECT CUT</button></div>
                    </div>
                </div>
                
                {/* <div className="grid-item">Item 6</div> */}
            </div>




        </div>
    )
}