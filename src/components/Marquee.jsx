import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0.001"
      className="w-full py-28 bg-[#004d43] rounded-t-3xl"
    >
      <div className="text border-t-[1px] border-b-[1px] border-zinc-100 border-opacity-45 flex whitespace-nowrap overflow-hidden">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] pr-24 uppercase tracking-wide leading-none pt-4 -mb-[7vw] font-Founders_Grotesk_X"
        >
          I'm Darshan
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[25vw] pr-24 uppercase tracking-wide leading-none pt-4 -mb-[7vw]  font-Founders_Grotesk_X"
        >
          I'm Darshan
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
