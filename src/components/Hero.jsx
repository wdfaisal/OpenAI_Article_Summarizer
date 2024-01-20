import React, { useState } from "react";

import { github_icon, logoai } from "../assets";

const Hero = () => {
 
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-5'>
        <div className=" flex flex-row-reverse justify-center items-center ">
          <h1 className=" ml-3 font-bold ">| Summarize</h1>
          <img src={logoai} alt='sumz_logo' className='w-10 object-contain' />
        </div>
        <div className=" flex items-center">
          <img src={github_icon} alt='sumz_logo' className='w-7 object-contain' />
          <a href="/"><p className=" ml-1 font-thin hover:text-orange-400">Github</p></a>
          

        </div>
        
       
      </nav>

      <h1 className='head_text'>
      Summarize Articles with <br className='max-md:hidden' />
        <span className='orange_gradient '>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
      Simplify your reading with Summize, an open-source article summarizer that transforms lengthy articles into clear and concise summaries      </h2>
    </header>
  );
};

export default Hero;
