import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-16 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className='text-[20vw] leading-none uppercase mb-2 pr-8 font-["Neue_Montreal"] font-extrabold tracking-tight '
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 8 }}
          className='text-[20vw] leading-none uppercase mb-2 pr-8 font-["Neue_Montreal"] font-extrabold tracking-tight'
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
