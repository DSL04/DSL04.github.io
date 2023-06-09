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
            <div className="grid grid-cols-2 grid-rows-3 gap-3 justify-items-center">
                <div className="">Item 1</div>
                <div className="grid-item">Item 2</div>
                <div className="grid-item">Item 3</div>
                <div className="grid-item">Item 4</div>
                <div className="grid-item">Item 5</div>
                <div className="grid-item">Item 6</div>
            </div>




        </div>
    )
}