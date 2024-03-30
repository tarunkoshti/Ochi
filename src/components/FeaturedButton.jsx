import React from 'react';

const FeaturedButton = ({ children, block, mb, ...props }) => {
    return (
        <button
            className={`px-3 py-1 rounded-full border-2 border-[#212121] font-medium uppercase whitespace-nowrap ${block} ${mb} relative overflow-hidden
        after:content-[""] after:w-full after:h-full after:bg-[#212121] after:absolute after:z-[-1] after:top-[100%] after:right-0 
        hover:after:rounded-3xl hover:after:top-[0] hover:text-[#F1F1F1] after:transition-[2s]`}
            style={{
                ...props
            }}>
            {children}
        </button>
    )
}

export default FeaturedButton;
