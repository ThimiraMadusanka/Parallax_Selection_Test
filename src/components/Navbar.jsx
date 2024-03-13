import React from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import DropDown from "./DropDown";

const Navbar = () => {
  return (
    <nav className="mx-auto">
        <div className="relative flex h-16 items-center justify-between">
            {/* Navbar Left */}
            <div className="flex items-center">
                <MdOutlineLightMode />
                <DropDown text="Please Select" className="px-3" />
                <p className='text-sm'>11/1/2023 | Wednesday</p>
            </div>
            {/* Application Name */}
            <div className="flex">
                <h1 className='uppercase font-bold text-xl'>Storemate</h1>
            </div>
            {/* Navbar Right */}
            <div className="flex items-center">
                <p className='pe-2 text-sm'>Attanayake</p>
                <img 
                    className="h-8 w-8 rounded-full" 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" 
                    alt="profile_img" 
                />
            </div>
        </div>
        <hr className="border-t-1 border-gray-300 my-1" />
    </nav>
  )
}

export default Navbar