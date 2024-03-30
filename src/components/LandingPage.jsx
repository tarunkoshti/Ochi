import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const LandingPage = () => {

    const locomotiveScroll = new LocomotiveScroll()

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-[#F1F1F1] pt-1'>
            <div className='textstructure mt-40 px-14'>
                {["We Create", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => (
                    <div key={index} className="masker overflow-hidden">
                        <div className='w-fit flex gap-5'>
                            {index === 1 && <motion.div
                                initial={{ width: "0" }}
                                animate={{ width: "9.5vw" }}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                className='w-[9.5vw] h-[6vw] bg-red-500 rounded-lg bg-[url("/public/images/content-image01.jpg")] bg-cover bg-center'></motion.div>}
                            <h1 className="uppercase text-[8vw] font-['Bebas_Neue'] leading-[7vw] tracking-wide font-semibold">{item}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className='border-t border-zinc-400 mt-24 flex justify-between items-center py-3 px-12'>
                {["For public and private companies",
                    "From the first pitch to IPO",
                ].map((item, index) => (
                    <p key={index} className='text-md font-regular'>{item}</p>
                ))}

                <div className='flex items-center gap-3'>
                    <div className='py-1 px-4 border border-[#212121] rounded-full uppercase'>start the project</div>
                    <div className='w-9 h-9 border border-[#212121] rounded-full flex items-center justify-center'><MdArrowOutward /></div>
                </div>

            </div>
        </div>
    )
}

export default LandingPage
