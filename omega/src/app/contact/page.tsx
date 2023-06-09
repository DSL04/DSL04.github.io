import './contact.scss'

export default function Contact() {
    return (
      <main>
        <div className='backgroudImage'>
          <div className='flex justify-center w-auto h-auto'>
            {/* <div className=' backgroundImageBlur'></div> */}
            <div className=' mt-3'> <h1 className='title'>TITLE</h1></div>
          </div>

          <div className=' w-auto h-full flex justify-evenly items-center'>
            <div className=' flex items-center flex-col space-y-2 text-white'>
              <div className=' locationImage'></div>
              <div className='title2'>ADDRESS</div>
              
              <div className=' mt-5 title2'>OTTAWA SHOP</div>
              <div className=' infoText'>111-1224 place d, Orléans</div>
              
              <div className=' mt-5 title2'>TORONTO SHOP</div>
              <div className='infoText'>423 Queen St W #105, Toronto</div>

              <div className=' mt-5 invisible'>YO</div>
              <div className=' invisible'>YO</div>
            </div>
            
            <div className=' flex items-center flex-col space-y-2 text-white'>
              <div className=' phoneImage'></div>
              <div className=' title2'>PHONE#</div>
              
              <div className=' mt-5 title2'>OTTAWA SHOP</div>
              <div className='infoText'>613-232-4504</div>
              
              <div className=' mt-5 title2'>TORONTO SHOP</div>
              <div className='infoText'>416-323-987</div>

              <div className=' mt-5 invisible'>YO</div>
              <div className=' invisible'>YO</div>
            </div>

            <div className=' flex items-center flex-col space-y-2 text-white'>
              <div className=' hoursImage'></div>
              <div className=' title2'>HOURS</div>
              
              <div className=' mt-5 title2'>MONDAY - FRIDAY</div>
              <div className='infoText'>9:00 AM - 6:00 PM</div>
          
              <div className=' mt-5 title2'>SATURDAY</div>
              <div className='infoText'>10:00 AM - 5:00 PM</div>
            
              <div className=' mt-5 title2'>SUNDAY</div>
              <div className='infoText'>CLOSED</div>

            </div>
          </div>
        </div>

        <div className='gpsContainer mt-5 mb-5'>
          <iframe className='ottawaGPS' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.527824074446!2d-75.5175593!3d45.4793148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce117f0f560ef1%3A0xc157aa534982032a!2sPlace%20d&#39;Orl%C3%A9ans%20Dr%2C%20Ottawa%2C%20ON!5e0!3m2!1sen!2sca!4v1686259243624!5m2!1sen!2sca" ></iframe>  
          <iframe className='torontoGPS' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9659351615383!2d-79.39779702342723!3d43.64887707110238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34db10c99da3%3A0x339dd6a15fa4991e!2s423%20Queen%20St%20W%20%23105%2C%20Toronto%2C%20ON%20M5V%202A5!5e0!3m2!1sen!2sca!4v1686259760991!5m2!1sen!2sca"></iframe>
        </div>

      </main>
    )
  }