// components/Navbar.tsx
'use client'

import React, { useState } from 'react';

interface NavbarProps {
  onClickItem: (item: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onClickItem }) => {
  const [activeItem, setActiveItem] = useState<string>('Front');

  const handleItemClick = (item: string) => {
    setActiveItem(item);
    onClickItem(item); // Call the onClickItem prop to handle the click event
  };

  return (
    <nav className="relative box-border w-full h-full flex md:flex-row sm:flex-col px-0 items-center justify-between text-left text-darkslategray font-changa border-[1px] border-solid border-black">
      <div
        className="overflow-hidden flex flex-row py-px px-6 items-center justify-center cursor-pointer"
        onClick={() => handleItemClick('Front')}
      >
        <b className="relative tracking-[0.19em] text-29xl sm:text-[2rem] lg:text-[3rem]">
          BRYAN QUIROZ
        </b>
      </div>
      <div className="overflow-hidden flex md:flex-row sm:flex-col py-px md:px-6 sm:px-1 sm:py-1 items-center sm:text-[1.2rem] md:text-[1.4rem] lg:text-[2rem] xl:text-[2.5rem] justify-end xl:gap-[5rem] lg:gap-[4rem] md:gap-[3rem] sm:gap-[2rem]">
        <div
          className={`relative tracking-[0.19em] cursor-pointer ${activeItem === 'about_me' ? 'font-bold' : ''}`}
          onClick={() => handleItemClick('about_me')}
        >
          About Me
        </div>
        <div
          className={`relative tracking-[0.19em] cursor-pointer ${activeItem === 'works' ? 'font-bold' : ''}`}
          onClick={() => handleItemClick('works')}
        >
          Works
        </div>
        <div
          className={`relative tracking-[0.19em] cursor-pointer ${activeItem === 'contacts' ? 'font-bold' : ''}`}
          onClick={() => handleItemClick('contacts')}
        >
          Contacts
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

