import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';

const Sidebar = ({ expand, setExpand }) => {
  return (
    <div
      className={`flex flex-col justify-between bg-[#212327] pt-7 transition-all z-50 max-md:absolute max-md:h-screen ${
        expand ? 'p-4 w-64' : 'md:w-20 w-0 max-md:overflow-hidden'
      }`}
    >
      <div>
        <div
          className={`flex ${
            expand ? 'flex-row gap-10' : 'flex-col items-center gap-8'
          }`}
        >
         <Image
  className={`${expand ? 'w-36 invert' : 'w-10'} `}
  src={expand ? assets.deepSeekText : assets.deepSeek}
  alt={expand ? 'Collapse Sidebar' : 'Expand Sidebar'}
  width={expand ? 144 : 40}
  height={expand ? 40 : 40}
/>


          <div
            onClick={() => expand ? setExpand(false) : setExpand(true)}
            className="group relative flex items-center justify-center hover:bg-gray-500/20 transition-all duration-300 h-9 w-9 aspect-square rounded-lg cursor-pointer"
          >
            <Image
              className="md:hidden"
              src={assets.menuIcon}
              alt="Menu Icon"
              
            />
            <Image
              src={expand ? assets.sideBarLeft : assets.sideBarRight}
              alt="Sidebar Toggle"
              className="hidden invert md:block w-7"
            />

            {/* Tooltip */}
            <div
              className={`absolute w-max ${
                expand
                  ? 'left-1/2 -translate-x-1/2 top-12'
                  : '-top-12 left-0'
              } opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none`}
            >
              {expand ? 'Close sidebar' : 'Open sidebar'}
              <div
                className={`w-3 h-3 absolute bg-black rotate-45 ${
                  expand
                    ? 'left-1/2 -top-1.5 -translate-x-1/2'
                    : 'left-4 -bottom-1.5'
                }`}
              ></div>
            </div>
          </div>
        </div>
        <button
  className={`mt-8 flex items-center justify-center cursor-pointer ${
    expand
      ? "bg-primary hover:opacity-90 rounded-2xl gap-2 p-2.5 w-max"
      : "group relative h-9 w-9 mx-auto hover:bg-gray-500/30 rounded-lg"
  }`}
>
  <Image
    className={expand ? "w-6 invert" : "w-7 invert"}
    src={expand ? assets.chatIcon : assets.chatIcon}
    alt="New Chat"
  />


    <div className="absolute w-max -top-12 right-12 opacity-0 group-hover:opacity-100 transition bg-black text-white text-sm px-3 py-2 rounded-lg shadow-lg pointer-events-none">
      New chat
      <div className="w-3 h-3 absolute bg-black rotate-45 left-4 -bottom-1.5"></div>
    </div>

  {expand && <p className="text-white font-medium">New chat</p>}
</button>


        
      </div>
    </div>
  );
};

export default Sidebar;
