import { motion } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";
import smallimg from "../assets/content-image01.jpg"

const LandingPage = () => {

    // const locomotiveScroll = new LocomotiveScroll()

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full md:min-h-screen bg-[#F1F1F1] pt-1 h-[80vh]'>
            <div className='textstructure mt-20 md:mt-40 px-5 md:px-14'>
                {["We Create", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => (
                    <div key={index} className="masker overflow-hidden">
                        <div className='w-fit flex gap-5'>
                            {index === 1 && <motion.div
                                initial={{ width: "0" }}
                                animate={{ width: "9.5vw" }}
                                transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                className='w-[9.5vw] h-[6vw] bg-red-500 rounded-lg bg-cover bg-center'
                                style={{ backgroundImage: `url(${smallimg})` }}
                            ></motion.div>}
                            <h1 className="uppercase text-[8vw] font-['Bebas_Neue'] leading-[7vw] tracking-wide font-semibold">{item}</h1>
                        </div>
                    </div>
                ))}
            </div>
            <div className='border-t border-zinc-400 mt-24 md:flex justify-between items-center py-3 px-5 md:px-12'>
                <div className='sm:flex justify-between gap-5 md:gap-6'>
                    {["For public and private companies",
                        "From the first pitch to IPO",
                    ].map((item, index) => (
                        <p key={index} className='text-sm md:text-base font-regular'>{item}</p>
                    ))}
                </div>

                <div className='flex items-center gap-3 justify-center mt-10 md:mt-0'>
                    <div className='text-sm md:text-base py-1 px-4 border border-[#212121] rounded-full uppercase'>start the project</div>
                    <div className='w-9 h-9 border border-[#212121] rounded-full flex items-center justify-center'><MdArrowOutward /></div>
                </div>

            </div>
        </div>
    )
}

export default LandingPage
