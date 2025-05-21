import { assets } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const PromptBox = ({ isLoading,setIsLoading}) => {
  const [prompt, setPrompt] = useState('');

  return (
    <form
      className={`w-full ${
        false ? 'max-w-3xl' : 'max-w-2xl'
      } bg-[#404045] p-4 rounded-3xl mt-4 transition-all`}
    >
      <textarea
        className="outline-none w-full resize-none overflow-hidden break-words bg-transparent text-white"
        rows={2}
        placeholder="Message DeepSeek"
        required
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />

      <div className="flex items-center justify-between text-sm mt-3">
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition text-white">
            
            <Image className="h-5 w-5" src={assets.deepThink} alt="DeepThink" />
            DeepThink (R1)
          </p>
          <p className="flex items-center gap-2 text-xs border border-gray-300/40 px-2 py-1 rounded-full cursor-pointer hover:bg-gray-500/20 transition text-white">
            <Image className="h-5 w-5 invert" src={assets.searchIcon} alt="Search" />
            Search
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Image className="w-6 cursor-pointer invert" src={assets.attachment} alt="Pin" />
          <button type="submit" className={`${prompt ? "bg-primary" : "bg-gray-500/20"} rounded-full p-2 flex items-center justify-center transition-all duration-300`}>
            <Image className="w-6 cursor-pointer invert" src={prompt ? assets.upArrow : assets.upArrow} alt="Send" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default PromptBox;
