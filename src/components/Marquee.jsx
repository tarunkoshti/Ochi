import { motion } from 'framer-motion'
import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'

function Marquee() {

    const locomotiveScroll = new LocomotiveScroll()

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full py-24 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
            <div className='text flex items-center border-t-2 border-b-2 border-zinc-400 whitespace-nowrap overflow-hidden'>
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 8, repeat: Infinity }}
                    className="text-[24vw] pr-24 text-white leading-none font-semibold font-['Bebas_Neue'] -mb-[2vw]">WE ARE OCHI
                </motion.h1>
                <motion.h1
                    initial={{ x: "0" }}
                    animate={{ x: "-100%" }}
                    transition={{ ease: "linear", duration: 8, repeat: Infinity }}
                    className="text-[24vw] pr-24 text-white leading-none font-semibold font-['Bebas_Neue'] -mb-[2vw]">WE ARE OCHI
                </motion.h1>
            </div>
        </div>
    )
}

export default Marquee
