import React from 'react'
import { Carousel } from "@material-tailwind/react";
import '@material-tailwind/react/';
import '@mui/material/styles';

const ProductItemCard = ({ data }) => {
  return (
    <div className="rounded-lg bg-white" key={data.id}>
        {/* Item's image Carousel */}
        <div className="rounded-lg">
            <Carousel className="rounded-lg" autoplay loop prevArrow={false} nextArrow={false} navigation={false}>
                {data.imageUrls.map((image, index) => (
                    <img
                        src={image}
                        alt={`image ${index}`}
                        className="h-full w-full object-cover"
                    />
                ))}
            </Carousel>
        </div>
        {/* Item data */}
        <div className="p-1 text-center">
          <p className='text-sm text-blue-700 font-bold'>{data.productId}</p>
          <p className='text-sm font-bold'>{data.productName}</p>
          <p className='text-sm'>Rs.{data.price} | {data.batchNumber}</p>
        </div>
    </div>
  )
}

export default ProductItemCard
