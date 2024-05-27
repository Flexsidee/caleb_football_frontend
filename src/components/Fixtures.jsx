import React from 'react'
import {city, arsenal, liverpool, villa} from '../assets'

const Fixtures = () => {
  return (
    <div className='table_bg mb-6 w-full'>
       <h2 className='title_text uppercase w-full text-left'>Fixtures & Results</h2 >
       <div className='flex items-center justify-between mt-4'>
        <div className='flex items-center gap-2 h-[auto]'>
          {/* Date */}
          <div className='flex flex-col items-center  gap-1'>
            <p>20/05/2024</p>
            <p>4pm</p>
          </div>
          {/* Line */}
          <div className='bg-black w-[0.5px] h-[55px]'/>
          <div className='flex flex-col items-start gap-2'>
            <img src={city} className='w-[25px]'/>
            <img src={arsenal} className='w-[25px]'/>
          </div>
        </div>
       </div>
       
    </div>
  )
}

export default Fixtures;
