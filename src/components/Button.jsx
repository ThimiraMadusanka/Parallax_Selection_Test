import React from 'react'

const Button = ({ btnText, isIconExcist, Icon, classNames }) => {
  return (
    <button className={`${classNames} rounded-md flex items-center justify-center`}>
        {/* check the icon excistance  */}
        {isIconExcist ? (Icon) : ("")}
        {/* button text */}
        <span className='font-bold text-sm ps-2'>{btnText}</span>
    </button>
  )
}

export default Button