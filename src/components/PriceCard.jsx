import React from 'react'

const PriceCard = ({ text, price, className }) => {
  return (
    <div className={`${className} bg-blue-700 rounded-md`}>
        <div className='p-2'>
            {/* card text */}
            <p className='font-bold text-sm text-white'>{text}</p>
            {/* card price */}
            <p className='font-bold text-sm text-white'>Rs.{price}</p>
        </div>
    </div>
  )
}

export default PriceCard