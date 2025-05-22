import React from 'react';
import Image from 'next/image';
import { assets } from '@/assets/assets'; // Update path as needed

const Message = ({ role, content }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-3xl text-sm">
      <div className={`flex flex-col w-full mb-8 ${role === 'user' ? 'items-end' : ''}`}>
        <div
          className={`group relative flex max-w-2xl py-3 rounded-xl ${
            role === 'user' ? 'bg-[#414158] px-5' : 'gap-3'
          }`}
        >
          {/* Hover Icons */}
          <div
            className={`opacity-0 group-hover:opacity-100 absolute transition-all ${
              role === 'user' ? '-left-16 top-2.5' : 'left-9 -bottom-6'
            }`}
          >
            <div className="flex items-center gap-2 opacity-70">
              {role === 'user' ? (
                <>
                  <Image src={assets.deleteIcon} alt="delete" />
                  <Image src={assets.copy_icon} alt="copy" />
                  <Image src={assets.copy_icon} alt="copy" />
                </>
              ) : (
                <>
                  <Image src={assets.deleteIcon} alt="delete" />
                  <Image src={assets.copy_icon} alt="copy" />
                  <Image src={assets.copy_icon} alt="copy" />
                </>
              )}
            </div>
          </div>

          {/* Message Content */}
          {role === 'user' ? (
            <span className="text-white/90">{content}</span>
          ) : (
            <>
              <Image
                src={assets.logo_icon}
                alt="logo"
                className="h-9 w-9 p-1 border border-white/15 rounded-full"
              />
              <div className="space-y-4 w-full overflow-scroll text-white/90">
                {content}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
