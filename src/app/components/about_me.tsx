'use client'
import Image from 'next/image'
import { FunctionComponent } from "react"
import small_b_boy from "./img/small_b_boy.jpg"
import { motion, AnimatePresence } from 'framer-motion'

const AboutMe: FunctionComponent = () => {
  return (
    <AnimatePresence>
    <motion.div       
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
    >
    <div className="relative w-full p-5 m-auto flex min-h-screen flex-col justify-center overflow-hidden">
      <div className="md:flex">
        <div className="md:shrink-0 transition delay-150 duration-300 hover:drop-shadow-xl">
          <Image className="h-full w-full rounded-full object-cover md:h-full md:w-50 border-[2px] border-solid border-darkslategray" src={small_b_boy} alt="Me" />
        </div>
        <div className="p-8">
              <span className="[line-break:anywhere] w-full">
                <span className="tracking-[0.04em] xl:text-[42px] lg:text-[40px] md:text-[24px] sm:text-[16px]">
                  <b className="font-changa text-black">{`I’m a `}</b>
                  <span className="font-covered-by-your-grace text-royalblue">
                    Front-End
                  </span>
                  <b className='font-changa text-black'> Developer!</b>
                </span>
              </span>
          <div className="p-2 py-3 px-0 items-start justify-start xl:text-[36px] lg:text-[32px] md:text-[24px] sm:text-[16px]">
                <button className="tracking-[0.04em] m-1 bg-salmon cursor-default justify-start border-[2px] border-solid border-darkslategray text-black font-changa font-extralight">{`<Javascript>`}</button>
                <button className="tracking-[0.04em] m-1 bg-salmon cursor-default justify-start border-[2px] border-solid border-darkslategray text-black font-changa font-extralight">{`<Typescript>`}</button>
                <button className="tracking-[0.04em] m-1 bg-salmon cursor-default justify-start border-[2px] border-solid border-darkslategray text-black font-changa font-extralight">{`<Tailwind>`}</button>
                <button className="tracking-[0.04em] m-1 bg-salmon cursor-default justify-start border-[2px] border-solid border-darkslategray text-black font-changa font-extralight">{`<Git>`}</button>
                <button className="tracking-[0.04em] m-1 bg-salmon cursor-default justify-start border-[2px] border-solid border-darkslategray text-black font-changa font-extralight">{`<Next.js>`}</button>
                <button className="tracking-[0.04em] m-1 bg-salmon cursor-default justify-start border-[2px] border-solid border-darkslategray text-black font-changa font-extralight">{`<SQL>`}</button>
            </div>
          <div className="p-4">
            <p className="xl:text-[36px] lg:text-[32px] md:text-[28px] sm:text-[16px] font-changa text-black">{`With a former career on media and visual communications, I started web dev as a hobby. I felt pretty confident in my UX/UI skills, so I leveled-up until I mastered Next.js. It turns out that my keen eye for detail, complements with my developer abilities!`}</p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
  </AnimatePresence>
  );
  
};

export default AboutMe;
