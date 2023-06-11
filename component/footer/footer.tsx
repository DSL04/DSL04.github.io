import './footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
        <div className=' flex'>
            <div>
                <img className='logo'/>
            </div>
            {/* Contact info */}
            <div className=' ml-2'>
                <div className=' w-auto'>
                    <div className=' contactTitle'>CONTACT INFO</div>
                        <div className='flex mt-4'>
                            <div className=' emailLogo'></div>
                            <div className=' ml-2 mt-2'><p className='text'>omegabarber@gmail.com</p></div>
                        </div>
                        <div className=' flex mt-4'>
                            <div className=' phoneLogo'></div>
                            <div className=' ml-3 '><p className='text'>613-455-0001</p></div>
                        </div>
                </div>

            </div>
            
            {/* Team info */}
            <div className=' ml-6'>
                <div className=' w-auto'>
                    <div className=' contactTitle'>OUR EXPERTS</div>
                        <div className=' mt-5'>
                            <div className='flex'>
                                <div className=' ml-2'><p className='text'>JOE BOE</p></div>
                                {/* <div><p className='text'>TORONTO</p></div> */}
                            </div>
                            <div className=' flex mt-5'>
                                <div className=' ml-2 '><p className='text'>HIKARU SMITH</p></div>
                                {/* <div><p className='text'>OTTAWA</p></div> */}
                            </div>
                        </div>
                </div> 
            </div>
          
        </div>
      </footer>
    );
}

export default Footer;