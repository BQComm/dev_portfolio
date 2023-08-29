'use client'
import Link from 'next/link'
import { FunctionComponent } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { FaTwitter, FaPager } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'

const Works: FunctionComponent = () => {
  return (
    <AnimatePresence>
    <motion.div       
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
    >
          <div className="relative w-full min-h-screen overflow-x-auto flex lg:flex-row md:flex-col sm:flex-col gap-[20px] py-[9%] px-2 box-border items-center justify-between text-center text-[32px] text-darkslategray font-covered-by-your-grace">
          {/* twitter-clone */}
          <Link href='https://twitter-clone-vert-nine.vercel.app/' target='_blank'>
          <div className="relative w-[536px] h-[394px] cursor-pointer transition delay-150 duration-300 hover:drop-shadow-xl">
              <div className="absolute flex justify-center items-center h-[calc(100%_-_58px)] w-full top-[0px] right-[0px] bottom-[58px] left-[0px] bg-darkslategray">
                <FaTwitter className='text-salmon w-[200px] h-[200px] transition delay-150 duration-300 hover:rotate-6' />
              </div>
              <div className="absolute h-[calc(100%_-_336px)] w-full top-[336px] right-[0px] bottom-[0px] left-[0px]">
              <div className="absolute h-full w-full mx-auto justify-center bg-salmon box-border border-[1px] border-solid border-darkslategray tracking-[0.04em] flex items-center">
              {`<Twitter_Clone>`}
                </div>
              </div>
            </div>
            {/* Blog-starter */}
            </Link>
            <Link href='https://blog-starter-brown-two.vercel.app/' target='_blank'>
          <div className="relative w-[536px] h-[394px] cursor-pointer transition delay-150 duration-300 hover:drop-shadow-xl">
              <div className="absolute flex justify-center items-center h-[calc(100%_-_58px)] w-full top-[0px] right-[0px] bottom-[58px] left-[0px] bg-darkslategray">
                <FaPager className='text-salmon w-[200px] h-[200px] transition delay-150 duration-300 hover:rotate-6' />
              </div>
              <div className="absolute h-[calc(100%_-_336px)] w-full top-[336px] right-[0px] bottom-[0px] left-[0px]">
              <div className="absolute h-full w-full mx-auto justify-center bg-salmon box-border border-[1px] border-solid border-darkslategray tracking-[0.04em] flex items-center">
              {`<Blog-starter>`}
                </div>
              </div>
            </div>
            {/* Portfolio-page */}
            </Link>
            <Link href='https://next-app-eight-omega.vercel.app/' target='_blank'>
          <div className="relative w-[536px] h-[394px] cursor-pointer transition delay-150 duration-300 hover:drop-shadow-xl">
              <div className="absolute flex justify-center items-center h-[calc(100%_-_58px)] w-full top-[0px] right-[0px] bottom-[58px] left-[0px] bg-darkslategray">
                <SiNextdotjs className='text-salmon w-[200px] h-[200px] transition delay-150 duration-300 hover:rotate-6' />
              </div>
              <div className="absolute h-[calc(100%_-_336px)] w-full top-[336px] right-[0px] bottom-[0px] left-[0px]">
              <div className="absolute h-full w-full mx-auto justify-center bg-salmon box-border border-[1px] border-solid border-darkslategray tracking-[0.04em] flex items-center">
              {`<Portfolio_Sample_Page>`}
                </div>
              </div>
            </div>
            </Link>
          </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Works;