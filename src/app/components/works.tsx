'use client'
import Link from 'next/link'
import { FunctionComponent } from "react"
import { motion, AnimatePresence } from 'framer-motion'
import { FaTwitter, FaPager } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { BsBriefcaseFill } from "react-icons/bs";

const projects = [
  {
    link: 'https://twitter-clone-vert-nine.vercel.app/',
    icon: <FaTwitter className='text-salmon lg:w-[200px] md:w-[100px] lg:h-[200px] md:h-[100px] transition delay-150 duration-300 hover:rotate-6' />,
    label: '<Twitter_Clone>'
  },
  {
    link: 'https://blog-starter-brown-two.vercel.app/',
    icon: <FaPager className='text-salmon lg:w-[200px] md:w-[100px] lg:h-[200px] md:h-[100px] transition delay-150 duration-300 hover:rotate-6' />,
    label: '<Blog-starter>'
  },
  {
    link: 'https://next-app-eight-omega.vercel.app/',
    icon: <SiNextdotjs className='text-salmon lg:w-[200px] md:w-[100px] lg:h-[200px] md:h-[100px] transition delay-150 duration-300 hover:rotate-6' />,
    label: '<Portfolio_Sample_Page>'
  },
  {
    link: 'https://bqcomm.github.io/Corporate1/',
    icon: <BsBriefcaseFill className='text-salmon lg:w-[200px] md:w-[100px] lg:h-[200px] md:h-[100px] transition delay-150 duration-300 hover:rotate-6' />,
    label: '<SCSS_basic_page>'
  }
];

const Works: FunctionComponent = () => {
  return (
    <AnimatePresence>
    <motion.div       
      initial={{ opacity: 0, x: -200 }}
      animate={{ opacity: 1, x: 0 }}
    >
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] py-[9%] px-2 box-border items-center justify-center text-center text-[32px] text-darkslategray font-covered-by-your-grace">
      {projects.map((project, index) => (
        <Link key={index} href={project.link} target='_blank'>
          <div className="relative w-[100%] h-[394px] cursor-pointer transition delay-150 duration-300 hover:drop-shadow-xl">
            <div className="absolute flex justify-center items-center top-[0px] right-[0px] bottom-[58px] left-[0px] bg-darkslategray">
              {project.icon}
            </div>
            <div className="absolute h-[calc(100% - 336px)] w-full top-[336px] right-[0px] bottom-[0px] left-[0px]">
              <div className="absolute h-full w-full mx-auto justify-center bg-salmon box-border border-[1px] border-solid border-darkslategray tracking-[0.04em] flex items-center">
                <span className="text-darkslategray font-covered-by-your-grace text-[20px] sm:text-[24px] lg:text-[32px] xl:text-[36px]">
                  {project.label}
                </span>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
    </motion.div>
    </AnimatePresence>
  );
};

export default Works;
