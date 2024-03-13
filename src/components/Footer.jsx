import React from 'react'
import PriceCard from './PriceCard'
import Button from './Button'
import { MdOutlineFileDownload } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-gray-100 px-8 py-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
            {/* Footer left side */}
            <div className="grid grid-cols-4 md:grid-cols-5 md:col-span-3 gap-2 bg-white rounded-md p-2">
                <PriceCard text="New Button" price="1000.00" className="md:col-span-1" />
                <PriceCard text="Discount" price="0.00" className="md:col-span-1" />
                <PriceCard text="Tax" price="99.00" className="md:col-span-1" />
                <div className="md:col-span-2">
                    <p className='font-bold text-sm'>Item Count: 400</p>
                </div>
                <PriceCard text="New Button" price="1000.00" className="md:col-span-1" />
                <PriceCard text="Shipping" price="1000.00" className="md:col-span-1" />
                <PriceCard text="Packaging" price="1000.00" className="md:col-span-1" />
                <PriceCard text="Total" price="199,999.00" className="md:col-span-2" />
            </div>
            {/* Footer right side */}
            <div className="grid grid-cols-4 md:col-span-2 gap-2 bg-white rounded-md p-2">
                <Button btnText="Cash" isIconExcist Icon={<MdOutlineFileDownload />} classNames="bg-lime-500" />
                <Button btnText="Pay" isIconExcist Icon={<MdOutlineFileDownload />} classNames="bg-amber-400" />
                <Button btnText="Card" isIconExcist Icon={<MdOutlineFileDownload />} classNames="bg-amber-400" />
                <Button btnText="Credit" isIconExcist Icon={<MdOutlineFileDownload />} classNames="bg-amber-400" />
                <Button btnText="Button" classNames="bg-blue-700 text-white" />
                <Button btnText="Button" classNames="bg-blue-700 text-white" />
                <Button btnText="Button" classNames="bg-blue-700 text-white" />
                <Button btnText="Button" classNames="bg-blue-700 text-white" />
            </div>
        </div>
  </footer>
  )
}

export default Footer
