import Image from 'next/image';
import { FunctionComponent } from "react";
import be from "./img/be.svg";
import email from "./img/email.svg";
import In from "./img/in.svg";
import Ig from "./img/ig.svg";

const Footer: FunctionComponent = () => {
  return (
    <div className="relative box-border w-full h-full overflow-hidden flex flex-row py-4 px-3 items-end justify-center gap-[44px] border-[1px] border-solid border-black">
      <a href="mailto:info@bryanquiroz.com">
        <div className="relative rounded-[50%] bg-royalblue hover:bg-salmon box-border w-[50px] h-[50px] border-[1px] border-solid border-darkslategray cursor-pointer"> 
          <Image className="relative h-[50px] w-[50px] mx-auto" src={email} alt="email" />
        </div>
      </a>
      <a href="https://www.behance.net/bryan-stephen">
        <div className="relative rounded-[50%] bg-royalblue hover:bg-salmon box-border w-[50px] h-[50px] border-[1px] border-solid border-darkslategray cursor-pointer"> 
          <Image className="relative h-[50px] w-[50px] mx-auto" src={be} alt="be" />
        </div>   
      </a>   
      <a href="https://www.linkedin.com/in/bryan-quiroz-215057126/">
        <div className="relative rounded-[50%] bg-royalblue hover:bg-salmon box-border w-[50px] h-[50px] border-[1px] border-solid border-darkslategray cursor-pointer"> 
          <Image className="relative h-[50px] w-[50px] mx-auto" src={In} alt="in" />
        </div>
      </a>    
      <a href="https://www.instagram.com/bryansteph.mp4/"> 
        <div className="relative rounded-[50%] bg-royalblue hover:bg-salmon box-border w-[50px] h-[50px] border-[1px] border-solid border-darkslategray cursor-pointer"> 
          <Image className="relative h-[50px] w-[50px] mx-auto" src={Ig} alt="ig" />
        </div>
      </a> 
    </div>
  );
};

export default Footer;
