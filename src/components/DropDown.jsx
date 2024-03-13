import React from 'react'
import { IoChevronDownSharp } from "react-icons/io5";

const DropDown = ({ text, className, isLeftIcon, leftIcon, isRightIcon, rightIcon}) => {
  return (
    <div className={`${className} flex items-center`}>
        {/* check left icon excistence */}
        {isLeftIcon && (
          <div className='bg-gray-100 px-3 py-2 rounded-l-md gap-x-1.5 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-xl cursor-pointer'>
            {leftIcon}
          </div>
        )}
        {/* dropdown content */}
        <button type="button" className={`inline-flex w-full items-center justify-between gap-x-1.5 ${isLeftIcon || isRightIcon ? "" : "rounded-md"} bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50`}>
          {text}
          <IoChevronDownSharp />
        </button>
        {/* check right icon excistence */}
        {isRightIcon && (
          <div className='bg-gray-100 px-3 py-2 rounded-r-md gap-x-1.5 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-xl cursor-pointer'>
            {rightIcon}
          </div>
        )}
    </div>
  )
}

export default DropDown