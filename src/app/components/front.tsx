'use client'
import Image from 'next/image'
import { FunctionComponent } from "react"
import small_b_boy from "./img/small_b_boy.jpg"
import { motion, AnimatePresence } from 'framer-motion'

const Front: FunctionComponent = () => {
  return (
    <AnimatePresence>
    <motion.div       
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        ease: "linear",
        duration: 0.5,
        x: { duration: 1 }
      }}
    >
      <div className="relative w-full min-h-screen overflow-hidden flex flex-col px-0.5 box-border items-center justify-center gap-[42px] text-center xl:text-[64px] lg:text-[48px] md:text-[45px] sm:text-[40px] text-darkslategray font-changa">
        <div className="self-stretch relative tracking-[0.19em] inline-block h-full p-2 md:shrink-0">
          <p className="m-0">
            <span className="font-extrabold">{`THIS IS `}</span>
            <span className="font-covered-by-your-grace text-royalblue">me</span>
            <span className="font-extrabold font-changa text-darkslategray">
              !
            </span>
          </p>
        </div>
        <div className="md:shrink-0 -md transition delay-150 duration-300 hover:drop-shadow-xl">
        <Image className="h-full w-full object-cover border-[2px] border-solid border-darkslategray" src={small_b_boy} alt="Me" />
      </div>
      </div>
    </motion.div>
  </AnimatePresence>


  );
};

export default Front;
