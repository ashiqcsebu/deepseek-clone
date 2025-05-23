"use client";

import { assets } from "@/assets/assets";
import Message from "@/components/messageBox";
import PromptBox from "@/components/promtBox";
import Sidebar from "@/components/sideBar";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        <Sidebar expand={expand} setExpand={setExpand}/>
        <div className="flex-1 flex flex-col justify-center items-center px-4 pb-8 text-white relative bg-[#292a2d]">
          <div className="md:hidden absolute px-4 top-6 flex justify-between items-center w-full">
            {assets.menuIcon && (
              <Image onClick={()=> (expand ? setExpand(false) : setExpand(true))}
                className="rotate-180"
                src={assets.menuIcon}
                alt="menu"
                width={24}
                height={24}
              />
            )}
            {assets.chatIcon && (
              <Image
                className="Opacity-70"
                src={assets.chatIcon}
                alt="chat"
                width={24}
                height={24}
              />
            )}
          </div>
          {messages.length === 0 ? (
            <>
            <div className="flex items-center gap-2">
               <Image
              className="w-12 h-12"
              src={assets.deepSeek}
              alt="chat"
             />
            <h1 className="text-2xl font-bold ">Hi, Im Deepseek</h1>
            </div>
            <p>How Can I help you?</p>
            </>
          ):(
          <div>
            <Message role='user' content='What Is Ai'/>
            
          </div>
          
          )
        }
        <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />
        <p className="text-xs fixed absloute bottom-1 text-gray-500"> Ai Generated for Reference Only</p>
        </div>
      </div>
    </div>
  );
}
