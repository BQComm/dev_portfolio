'use client'
import { FunctionComponent } from "react";

const Works: FunctionComponent = () => {
  return (
    <div className="relative w-full min-h-screen overflow-x-auto flex lg:flex-row md:flex-col sm:flex-col gap-[20px] py-[9%] px-2 box-border items-center justify-between text-center text-[32px] text-darkslategray font-covered-by-your-grace">
      <div className="relative w-[536px] h-[394px] cursor-pointer transition delay-150 duration-300 hover:drop-shadow-xl">
        <div className="absolute h-[calc(100%_-_58px)] w-full top-[0px] right-[0px] bottom-[58px] left-[0px] bg-darkslategray" />
        <div className="absolute h-[calc(100%_-_336px)] w-full top-[336px] right-[0px] bottom-[0px] left-[0px]">
          <div className="absolute h-full w-full mx-auto justify-center bg-salmon box-border border-[1px] border-solid border-darkslategray tracking-[0.04em] flex items-center">
          {`<in_development>`}
          </div>
        </div>
      </div>
      <div className="relative w-[536px] h-[394px] cursor-pointer transition delay-150 duration-300 hover:drop-shadow-xl">
        <div className="absolute h-[calc(100%_-_58px)] w-full top-[0px] right-[0px] bottom-[58px] left-[0px] bg-darkslategray" />
        <div className="absolute h-[calc(100%_-_336px)] w-full top-[336px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full mx-auto justify-center bg-salmon box-border border-[1px] border-solid border-darkslategray tracking-[0.04em] flex items-center">
        {`<in_development>`}
          </div>
        </div>
      </div>
      <div className="relative w-[536px] h-[394px] cursor-pointer transition delay-150 duration-300 hover:drop-shadow-xl">
        <div className="absolute h-[calc(100%_-_58px)] w-full top-[0px] right-[0px] bottom-[58px] left-[0px] bg-darkslategray" />
        <div className="absolute h-[calc(100%_-_336px)] w-full top-[336px] right-[0px] bottom-[0px] left-[0px]">
        <div className="absolute h-full w-full mx-auto justify-center bg-salmon box-border border-[1px] border-solid border-darkslategray tracking-[0.04em] flex items-center">
        {`<in_development>`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
