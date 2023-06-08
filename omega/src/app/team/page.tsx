import React from 'react';
import './team.scss'

export default function team() {
    return (
        <div>
            {/* Top Image with Title */}
            <div className=' flex  justify-center items-center'>
                <div className=' titleImage'></div>
                <div className='absolute'><h1 className='titleText'>OUR EXPERT BARBERS</h1></div>

            </div>

            <div className=' flex-col mt-4'>
                <div className='flex justify-evenly'>
                    {/* Ottawa Section */}
                    <div className=''>
                        <div className=' flex justify-around'><h1 className='barberTitle'>OTTAWA BARBER</h1></div>
                        
                        <div className=' flex justify-evenly mt-5'>
                            <div className=' ottawaBarberImage'><img/></div>
                            <div className=' w-1/3 flex-wrap'><p className=' break-words text'>
                                Meet Hikaru Smith, a talented barber based in the charming city of Ottawa. Hikaru's journey in the world of barbering started at a young age, inspired by his family's legacy of hairstyling. With his keen eye for creativity and dedication to customer satisfaction, 
                                Hikaru has built a loyal clientele in Ottawa's diverse community. His modern approach and commitment to delivering top-notch grooming experiences make him a sought-after barber in the capital city.</p>
                             </div>
                        </div>

                        <div className=' flex justify-evenly mt-60 mb-3'>
                            <div className=' w-1/3 flex-wrap'>
                              <ul className='ul'>
                                <li className='li'>Recipient of the "Rising Star Barber" award, Ottawa Barber Association, 2022</li>
                                <li className='li'>Featured in Ottawa Style Magazine for his innovative hairstyling techniques</li>
                                <li className='li'>Official barber for local fashion shows and editorial photoshoots</li>
                              </ul>  
                            </div>
                            <div className=' ottawaBarberAward'><img/></div>  
                        </div>
                    </div>


                    {/* Toronto Section */}
                    <div className=''>
                        <div className=' flex justify-around'><h1 className='barberTitle'>TORONTO BARBER</h1></div>
                        
                        <div className=' flex justify-evenly mt-5'>
                            <div className=' torontoBarberImage'><img/></div>
                            <div className=' w-1/3 flex-wrap'><p className=' break-words text'>With a passion for precision and style, Joe Boe is a renowned barber hailing from the vibrant city of Toronto. With several years of experience in the industry, 
                            Joe's expertise lies in creating modern and trend-setting hairstyles for his clients. Known for his attention to detail and friendly demeanor, Joe Boe has become a trusted name in Toronto's grooming scene.</p>
                             </div>
                        </div>

                        <div className=' flex justify-evenly mt-60 mb-3'>
                            <div className=' w-1/3 flex-wrap'>
                              <ul className='ul'>
                                <li className='li'>Winner of the "Best Barber in Toronto" award, 2021</li>
                                <li className='li'>Featured in Men's Grooming Magazine for his exceptional razor techniques</li>
                                <li className='li'>Official barber for various Toronto-based celebrities and influencers</li>
                              </ul>  
                            </div>
                            <div className=' ottawaBarberAward'><img/></div>  
                        </div>
                    </div>
                </div>
            </div>
            <div className='ml-2 mt-10 mb-10 flex-wrap'><h1 className='text'>NOTHING IS OUTSIDE OF THEIR REACH. FROM CLASSIC CUTS TO DARING TRANSFORMATIONS, EVERY STRAND BECOMES A TESTAMENT TO THEIR BOUNDLESS CREATIVITY.</h1></div>
        </div>

    )
}