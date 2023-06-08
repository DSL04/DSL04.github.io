import './globals.scss'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <h1 className='slogan mt-4 '>WHERE STYLE, PRECISION, AND ART CONVERGE</h1>
      {/* Pictures and animation */}
      <div className=' flex'>
        <div className='backgroundVideo flex w-auto h-auto'>
        </div>
      </div>

      {/* Service description */}
      <div className=' flex-wrap mt-2 mb-5'>
      <h1 className='serviceText'>OMEGA BARBERSHOP IS A PREMIER DESTINATION FOR MEN'S GROOMING, WHERE EXPERT BARBERS COMBINE THEIR ARTISTRY, PRECISION CUTTING TECHNIQUES, AND IMPECCABLE STYLE TO CREATE TAILORED LOOKS THAT EMBODY CONFIDENCE AND SOPHISTICATION. </h1>
      </div>

      {/* Book Now Section */}
      <div className=' flex w-auto h-auto justify-center items-center'>
        <div className=' flex w-auto h-auto'>
          {/* <div className=''><img className=' backgroundImage1'/></div>
          <div className='w-1/3'><img className=' backgroundImage2'/></div>
          <div className='drop-shadow-md w-1/3'><img className=' backgroundImage3'/></div> */}
          <img className=' w-1/3 drop-shadow-md' src='https://i.pinimg.com/564x/aa/fe/7b/aafe7bf0bba0e677f119e6ccd3cf44ed.jpg' />
          <img className=' w-1/3 drop-shadow-md' src='https://d7hftxdivxxvm.cloudfront.net/?height=648&quality=80&resize_to=fit&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2F0qhKbRromXYD51EZAcq6EQ%2Fnormalized.jpg&width=800' />
          <img className=' w-1/3 drop-shadow-md' src='https://images.saatchiart.com/saatchi/943095/art/6391347/5461107-HSC00001-7.jpg' />

          
        </div>
        <div className=' flex absolute w-auto'>
          <button className='button button2 bg-blend-difference'>BOOK NOW</button>
        </div>
      </div>
    </main>
  )
}
