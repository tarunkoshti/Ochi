import React from 'react'
import FeaturedButton from './FeaturedButton'

const Cards = ({
    width = "w-full",
    image,
    bgcolor,
    btntext
}) => {
    return (
        <div className={`${width} bg-[${bgcolor}] h-[26vw] rounded-lg p-7 relative`}>
            <div className='w-full h-full flex justify-center items-center'>
                <img height="150px" width="150px" src={image} alt="" />
            </div>
            <FeaturedButton color="#F1F1F1" borderColor="#F1F1F1" position="absolute" bottom="7%">{btntext}</FeaturedButton>
        </div>
    )
}

export default Cards
