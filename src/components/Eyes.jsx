import LocomotiveScroll from 'locomotive-scroll';
import React, { useEffect, useState } from 'react'

const Eyes = ({
    bgColor = '',

}) => {

    const [rotate, setRotate] = useState(0);
    const locomotiveScroll = new LocomotiveScroll()

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180)
        })
    })

    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.5" className={!bgColor ? `relative w-full h-full bg-[url("/public/images/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center` : `relative w-full h-full ${bgColor} rounded-tr-3xl rounded-tl-3xl py-24`}>
                {bgColor &&
                    <div className='w-full '>
                        <h1 className='text-[12vw] font-["Bebas_Neue"] leading-[11vw] text-center font-semibold py-5'>
                            READY <br />
                            TO START <br />
                            THE PROJECT?
                        </h1>

                        <button className='m-auto uppercase font-medium py-4 px-6 bg-[#212121] text-white rounded-full flex items-center gap-10'>start the project
                            <div className='w-2 h-2 rounded-full bg-white'></div>
                        </button>
                    </div>

                }
                <div className={!bgColor ? `absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/3 flex justify-between` : `absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-1/4 flex justify-between`} >
                    <div className={!bgColor ? `w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center` : `w-[11vw] h-[11vw] rounded-full bg-white flex justify-center items-center`}>
                        <div className='w-2/3 h-2/3 bg-[#212121] rounded-full relative'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='w-5 h-5 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                    <div className={!bgColor ? `w-[15vw] h-[15vw] rounded-full bg-white flex justify-center items-center` : `w-[11vw] h-[11vw] rounded-full bg-white flex justify-center items-center`}>
                        <div className='w-2/3 h-2/3 bg-[#212121] rounded-full relative'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }} className='line w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                                <div className='w-5 h-5 bg-white rounded-full'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default Eyes
