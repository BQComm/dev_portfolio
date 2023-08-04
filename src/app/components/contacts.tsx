'use client'
import Image from 'next/image';
import { FunctionComponent } from "react";
import be from "./img/be.svg";
import email from "./img/email.svg";
import In from "./img/in.svg";
import Ig from "./img/ig.svg";

const Contacts: FunctionComponent = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-auto flex flex-col py-0 box-border items-center justify-center gap-[55px] text-center xl:text-[64px] lg:text-[60px] md:text-[48px] sm:text-[48px] text-darkslategray font-changa-one">
      <div className="relative tracking-[0.04em] flex items-center shrink-0">
        <span className="[line-break:anywhere] w-full">
          <span>{`Get `}</span>
          <span className="font-covered-by-your-grace text-royalblue">in</span>
          <span> touch!</span>
        </span>
      </div>
      <div className="flex flex-col py-[9px] px-0 items-center justify-center gap-[53px] text-left text-[24px] font-changa">
      <a href="mailto:info@bryanquiroz.com">
        <div className="bg-salmon flex flex-row py-0 px-[9px] items-center justify-start border-[2px] border-solid border-darkslategray transition delay-150 duration-300 hover:drop-shadow-xl cursor-pointer">
            <div className="relative tracking-[0.04em]">
              <Image className="relative h-[50px] w-[50px] mx-auto" src={email} alt="email" /> E-mail me!
            </div>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/bryan-quiroz-215057126/">
        <div className="bg-salmon flex flex-row py-0 px-[9px] items-center justify-start border-[2px] border-solid border-darkslategray transition delay-150 duration-300 hover:drop-shadow-xl cursor-pointer">
            <div className="relative tracking-[0.04em]">
              <Image className="h-[50px] w-[50px] items-center mx-auto" src={In} alt="In" /> LinkedIn
            </div>
        </div>
      </a>
      <a href="https://www.behance.net/bryan-stephen">
        <div className="bg-salmon flex flex-row py-0 px-[9px] items-center justify-start border-[2px] border-solid border-darkslategray transition delay-150 duration-300 hover:drop-shadow-xl cursor-pointer">
            <div className="relative tracking-[0.04em]">
              <Image className="h-[50px] w-[50px] items-center mx-auto" src={be} alt="be" /> Behance
            </div>
        </div>
      </a>
      <a href="https://www.instagram.com/bryansteph.mp4/">
        <div className="bg-salmon flex flex-row py-0 px-[9px] items-center justify-start border-[2px] border-solid border-darkslategray transition delay-150 duration-300 hover:drop-shadow-xl cursor-pointer">
            <div className="relative tracking-[0.04em]">
              <Image className="h-[50px] w-[50px] items-center mx-auto" src={Ig} alt="Ig" /> Instagram
            </div>
        </div>
      </a>
      </div>
    </div>
  );
};

export default Contacts;
