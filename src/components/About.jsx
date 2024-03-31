import LocomotiveScroll from 'locomotive-scroll'
import React from 'react'
import homepagephoto from "../assets/Homepage-Photo-1326x939.jpg"

const About = () => {

    // const locomotiveScroll = new LocomotiveScroll()

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full min-hscreen py-10 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl rounded-br-3xl rounded-bl-3xl -mt-10 md:mt-0'>
            <div className='w-full'>
                <h1 className='w-full md:w-5/6 md:px-14 px-5 py-7 md:py-16 text-2xl md:text-5xl font-medium'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            </div>

            <div className='w-full pt-5 pb-20 px-5 md:px-14 border border-t-zinc-500 border-b-zinc-500 font-base text-md sm:flex'>
                <div className='sm:w-1/2'>What you can expect:</div>
                <div className='gap-5 sm:w-1/2 leading-tighter sm:flex md:w-1/5 md:block'>
                    <p className='sm:mb-8'>We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people.</p>
                    <p>We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.</p>
                </div>
                <div className='sm:w-1/5 flex flex-col justify-end items-end'>
                    <div >
                        <span className=''>S:</span>
                        <div className='flex flex-col'>
                            <a href="">Instagram</a>
                            <a href="">Behance</a>
                            <a href="">Facebook</a>
                            <a href="">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='px-5 md:px-14 py-5 flex max-[500px]:block '>
                <div className='w-1/2'>
                    <h1 className='text-3xl sm:text-5xl font-medium mb-5'>Our approach:</h1>
                    <button className='uppercase font-medium py-2 px-3 max-sm:text-xs sm:py-4 sm:px-6 bg-[#212121] text-white rounded-full flex items-center gap-10 whitespace-nowrap'>read more
                        <div className='w-2 h-2 rounded-full bg-white'></div>
                    </button>
                </div>
                <div className='w-1/2 rounded-xl overflow-hidden max-[500px]:mt-5 max-[500px]:w-full'>
                    <img className='w-full' src={homepagephoto} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About
