import React from 'react'
import DropDown from './DropDown'
import { LuUser } from "react-icons/lu";
import { CiCirclePlus } from "react-icons/ci";
import { BsQrCodeScan } from "react-icons/bs";

const LeftBody = () => {
  return (
    <div className='py-2'>
        {/* dropdown collection area */}
        <div className='bg-white rounded-md p-4'>
            <div className='grid grid-cols-2 gap-2 pb-4'>
                <DropDown text="Please Select" isLeftIcon leftIcon={<LuUser />} isRightIcon rightIcon={<CiCirclePlus />} />
                <DropDown text="Please Select" isLeftIcon leftIcon={<BsQrCodeScan />} isRightIcon rightIcon={<CiCirclePlus />} />
            </div>
            <div className='grid grid-cols-3 gap-2'>
                <DropDown text="Please Select" />
                <DropDown text="Please Select" />
                <DropDown text="Please Select" />
            </div>
        </div>
        {/* column headers */}
        <div className='grid grid-cols-4 gap-2 py-4'>
            <p className='uppercase font-bold text-sm'>Product</p>
            <p className='uppercase font-bold text-sm'>Quantity</p>
            <p className='uppercase font-bold text-sm'>Unit Price</p>
            <p className='uppercase font-bold text-sm'>Line Price</p>
        </div>
        {/* guidence to select product item */}
        <div className='bg-white rounded-md'>
            <p className='p-2 text-center text-sm'>Please Select Product Item</p>
        </div>
    </div>
  )
}

export default LeftBody