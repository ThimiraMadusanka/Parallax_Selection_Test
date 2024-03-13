import React, { useState, useEffect } from 'react';
import DropDown from './DropDown'
import ProductItemCard from './ProductItemCard'
import jsonData from '../data/data.json';

const RightBody = () => {
    const [items, setItems] = useState([]);
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [count, setCount] = useState(6)

    useEffect(() => {
        // fetch data function
        const fetchData = async () => {
            try {
                // fetch data from json
                const parsedData = JSON.parse(JSON.stringify(jsonData));
                // set data to state
                setItems(parsedData.items.slice(0, count));
            } catch (error) {
                console.error(error);
            } 
        };

        // fetch data function call
        fetchData();
    }, [count]);

    // handel scroll method
    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.target;
        // get the scrolling position
        const position = Math.ceil(
            (scrollTop / (scrollHeight - clientHeight)) * 100
        );

        // check scrolling up 
        if (position > prevScrollPosition) {
            // adding 3 for scrolling down
            setCount(count + 3)
        } 

        // check scrolling down
        if (position < prevScrollPosition) {
            // check count is 6
            if (count != 6) {
                // if not reduce 3 for scrolling up
                setCount(count - 3)
            }
        }

        // set scorlling position
        setPrevScrollPosition(position);
    };

    return (
        <div className='py-2'>
            {/* dropdown area */}
            <div className='grid grid-cols-3 gap-2'>
                <DropDown text="Please Select" />
                <DropDown text="Please Select" />
                <DropDown text="Please Select" />
            </div> 
            {/* product item area */}
            <div onScroll={handleScroll} className='grid grid-cols-3 gap-2 pt-4 pb-8 body-right-height'>
                {items.map((item) => (
                    <ProductItemCard 
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>
        </div>
    )
}

export default RightBody
