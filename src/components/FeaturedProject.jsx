import React from 'react'
import FeaturedButton from './FeaturedButton'
import LocomotiveScroll from 'locomotive-scroll'
import { motion, useAnimation } from 'framer-motion'
import img1 from "../assets/Fyde_Illustration_Crypto_2-1326x1101.png"
import img2 from "../assets/Vise_front2-1326x1101.jpg"
import img3 from "../assets/Frame-3875-1326x1101.jpg"
import img4 from "../assets/PB-Front-4-1326x1101.png"
import img5 from "../assets/William-Barnes-1-300x300.png"

const FeaturedProject = () => {

    const locomotiveScroll = new LocomotiveScroll()

    const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]
    const cardsImage = [useAnimation(), useAnimation(), useAnimation(), useAnimation()]

    const handleHoverStart = (index) => {
        cards[index].start({
            y: "0"
        })
        cardsImage[index].start({
            scale: ".95"
        })
    }

    const handleHoverEnd = (index) => {
        cards[index].start({
            y: "100%"
        })
        cardsImage[index].start({
            scale: "1"
        })
    }

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-20 bg-[#F1F1F1] rounded-tl-3xl rounded-t-3xl'>
            <div className='w-full py-10 px-14 border border-b-zinc-500'>
                <h1 className='text-5xl font-medium'>Featured Projects</h1>
            </div>

            <div className='px-14'>
                <div className='cards w-full flex gap-5 py-10'>
                    <div className='cursor-pointer card w-1/2 relative'>
                        <div className='w-full py-4'>
                            <div className='h-3 w-3 rounded-full bg-[#212121] inline-block mr-2'></div>
                            FYDE
                        </div>
                        <h1 className='font-["Bebas_Neue"] absolute text-[8vw] left-full -translate-x-1/2 leading-none top-1/2 -translate-y-1/2 text-[#CDEA68] z-10 flex overflow-hidden'>{"FYDE".split('').map((item, index) => (
                            <motion.span
                                key={index}
                                className='inline-block'
                                initial={{ y: "100%" }}
                                animate={cards[0]}
                                transition={{ ease: [0.45, 0, 0.55, 1], delay: index * .05 }}
                            >{item}
                            </motion.span>
                        ))}</h1>
                        <motion.div
                            onHoverStart={() => handleHoverStart(0)}
                            onHoverEnd={() => handleHoverEnd(0)}
                            className='w-full'>
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={cardsImage[0]}
                                transition={{ ease: [0.7, 0, 0.84, 0] }}
                            >
                                <img
                                    className='rounded-lg' src={img1} alt="" />
                            </motion.div>
                        </motion.div>

                        <div className='w-full flex gap-3 py-4 flex-wrap'>
                            <FeaturedButton> audit </FeaturedButton>
                            <FeaturedButton> copywriting </FeaturedButton>
                            <FeaturedButton> sales deck  </FeaturedButton>
                            <FeaturedButton> slides design </FeaturedButton>
                        </div>

                    </div>
                    <div className='cursor-pointer card w-1/2 relative'>
                        <div className='w-full py-4'>
                            <div className='h-3 w-3 rounded-full bg-[#212121] inline-block mr-2'></div>
                            VISE
                        </div>
                        <h1 className='font-["Bebas_Neue"] absolute text-[8vw] right-full translate-x-1/2 leading-none top-1/2 -translate-y-1/2 text-[#CDEA68] z-10 flex overflow-hidden'>{"VISE".split('').map((item, index) => (
                            <motion.span
                                key={index}
                                className='inline-block'
                                initial={{ y: "100%" }}
                                animate={cards[1]}
                                transition={{ ease: [0.45, 0, 0.55, 1], delay: index * .05 }}
                            >{item}</motion.span>
                        ))}</h1>
                        <motion.div className='w-full'
                            onHoverStart={() => handleHoverStart(1)}
                            onHoverEnd={() => handleHoverEnd(1)}>
                            <motion.div initial={{ scale: 1 }}
                                animate={cardsImage[1]}
                                transition={{ ease: [0.7, 0, 0.84, 0] }}>
                                <img className='rounded-lg' src={img2} alt="" />
                            </motion.div>
                        </motion.div>

                        <div className='w-full flex gap-3 py-4 flex-wrap'>
                            <FeaturedButton> agency </FeaturedButton>
                            <FeaturedButton> company presentation </FeaturedButton>
                        </div>

                    </div>
                </div>

                <div className='cards w-full flex gap-5 py-10'>
                    <div className='cursor-pointer card w-1/2 relative'>
                        <div className='w-full py-4'>
                            <div className='h-3 w-3 rounded-full bg-[#212121] inline-block mr-2'></div>
                            TRAWA
                        </div>
                        <h1 className='font-["Bebas_Neue"] absolute text-[8vw] left-full -translate-x-1/2 leading-none top-1/2 -translate-y-1/2 text-[#CDEA68] z-10 flex overflow-hidden'>{"TRAWA".split('').map((item, index) => (
                            <motion.span
                                key={index}
                                className='inline-block'
                                initial={{ y: "100%" }}
                                animate={cards[2]}
                                transition={{ ease: [0.45, 0, 0.55, 1], delay: index * .05 }}
                            >{item}</motion.span>
                        ))}</h1>
                        <motion.div className='w-full'
                            onHoverStart={() => handleHoverStart(2)}
                            onHoverEnd={() => handleHoverEnd(2)}
                        >
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={cardsImage[2]}
                                transition={{ ease: [0.7, 0, 0.84, 0] }}>
                                <img className='rounded-lg' src={img3} alt="" />
                            </motion.div>

                        </motion.div>

                        <div className='w-full flex gap-3 py-4 flex-wrap'>
                            <FeaturedButton> brand identity </FeaturedButton>
                            <FeaturedButton> design research </FeaturedButton>
                            <FeaturedButton> investor deck </FeaturedButton>
                        </div>

                    </div>
                    <div className='cursor-pointer card w-1/2 relative'>
                        <div className='w-full py-4'>
                            <div className='h-3 w-3 rounded-full bg-[#212121] inline-block mr-2'></div>
                            PREMIUM BLEND
                        </div>
                        <h1 className='font-["Bebas_Neue"] absolute text-[8vw] right-full translate-x-1/2 leading-none top-1/2 -translate-y-1/2 text-[#CDEA68] z-10 whitespace-nowrap flex overflow-hidden'>{"PREMIUM BLEND".split('').map((item, index) => (
                            <motion.span
                                key={index}
                                className='inline-block'
                                initial={{ y: "100%" }}
                                animate={cards[3]}
                                transition={{ ease: [0.45, 0, 0.55, 1], delay: index * .05 }}
                            >{item}</motion.span>
                        ))}</h1>
                        <motion.div className='w-full'
                            onHoverStart={() => handleHoverStart(3)}
                            onHoverEnd={() => handleHoverEnd(3)}
                        >
                            <motion.div
                                initial={{ scale: 1 }}
                                animate={cardsImage[3]}
                                transition={{ ease: [0.7, 0, 0.84, 0] }}>

                                <img className='rounded-lg' src={img4} alt="" />
                            </motion.div>
                        </motion.div>

                        <div className='w-full flex gap-3 py-4 flex-wrap'>
                            <FeaturedButton> branded template </FeaturedButton>
                        </div>

                    </div>
                </div>

            </div>

            <div className='w-full pt-10'>
                <button className='m-auto uppercase font-medium py-4 px-6 bg-[#212121] text-white rounded-full flex items-center gap-10'>view all case studies
                    <div className='w-2 h-2 rounded-full bg-white'></div>
                </button>
            </div>

            <div className='w-full bg-[#F1F1F1] py-20'>
                <div className='w-full py-10 px-14 border border-b-zinc-500'>
                    <h1 className='text-5xl font-medium'>Client's reviews</h1>
                </div>

                <div className='w-full flex px-14 font-medium text-md pt-5 pb-10'>
                    <div className='w-1/4'>
                        <h1>Karman Ventures</h1>
                    </div>
                    <div className='w-1/4'>
                        <h1 className='mb-10'>Services:</h1>
                        <FeaturedButton block="block" mb="mb-3">investor deck</FeaturedButton>
                        <FeaturedButton>sales deck</FeaturedButton>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='mb-10'>William Barnes</h1>
                        <div>
                            <img className='h-[8vw] rounded-lg' src={img5} alt="" />
                            <p className='w-3/4 font-normal mt-10'>
                                They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5
                            </p>
                        </div>
                    </div>
                    <div className=''>
                        <h1>READ</h1>
                    </div>
                </div>

                <div className='w-full border border-t-zinc-500 border-b-zinc-500 font-medium text-md flex px-14 py-4'>
                    <h1 className='w-1/2 '>Planetly</h1>
                    <h1 className='w-1/2 '>Nina Walloch</h1>
                    <h1>READ</h1>
                </div>
                <div className='w-full border border-b-zinc-500 font-medium text-md flex  px-14 py-4'>
                    <h1 className='w-1/2 '>Workiz Easy</h1>
                    <h1 className='w-1/2 '>Tomer Levy</h1>
                    <h1>READ</h1>
                </div>
                <div className='w-full border border-b-zinc-500 font-medium text-md flex  px-14 py-4'>
                    <h1 className='w-1/2 '>Premium Blend</h1>
                    <h1 className='w-1/2 '>Ellen Kim</h1>
                    <h1>READ</h1>
                </div>
                <div className='w-full border border-b-zinc-500 font-medium text-md flex  px-14 py-4'>
                    <h1 className='w-1/2 '>Hypercare Systems</h1>
                    <h1 className='w-1/2 '>Brendan Goss</h1>
                    <h1>READ</h1>
                </div>
                <div className='w-full border border-b-zinc-500 font-medium text-md flex  px-14 py-4'>
                    <h1 className='w-1/2 '>Officevibe</h1>
                    <h1 className='w-1/2 '>Raff Labrie</h1>
                    <h1>READ</h1>
                </div>
                <div className='w-full border border-b-zinc-500 font-medium text-md flex  px-14 py-4'>
                    <h1 className='w-1/2 '>Orderlion</h1>
                    <h1 className='w-1/2 '>Stefan Strohmer</h1>
                    <h1>READ</h1>
                </div>
                <div className='w-full border border-b-zinc-500 font-medium text-md flex  px-14 py-4'>
                    <h1 className='w-1/2 '>Black Book</h1>
                    <h1 className='w-1/2 '>Jaci Smith</h1>
                    <h1>READ</h1>
                </div>
                <div className='w-full border border-b-zinc-500 font-medium text-md flex just px-14 py-4'>
                    <h1 className='w-1/2 '>Trawa Energy</h1>
                    <h1 className='w-1/2 '>David Budde</h1>
                    <h1>READ</h1>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProject
