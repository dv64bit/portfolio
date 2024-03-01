import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div
      id="Contact me"
      data-scroll
      data-scroll-section
      data-scroll-speed="0.003"
      className="w-full h-screen bg-[#fbf6ee] rounded-t-xl px-14 flex gap-3 py-24"
    >
      <div className="w-1/2 h-full flex flex-col justify-between">
        <div className="flex flex-col gap-1 ">
          <h1 className="text-[9vw] text-stone-800 font-Founders_Grotesk_X uppercase -mt-6 -mb-24">
            eye-
          </h1>
          <h1 className="text-[9vw] text-stone-800 font-Founders_Grotesk_X uppercase">
            Opening
          </h1>
        </div>
        <div className="logo">
          <img src="/logo.svg" className="w-16 h-16" alt="" />
        </div>
      </div>
      <div className="w-1/2 h-full">
        <div className="text-[9vw] text-stone-800 font-Founders_Grotesk_X uppercase -mt-6">
          Websites
        </div>
        <div className="text-stone-950 text-2xl flex flex-col gap-12 justify-end text-left font-NeueMontreal ">
          <div className="flex flex-col gap-5">
            <div>Socials:</div>
            <div>
              <ul className="flex flex-col ">
                <a
                  className="underline"
                  href="https://www.linkedin.com/in/dv64bit/"
                >
                  LinkedIn
                </a>
                <a className="underline" href="https://github.com/dv64bit">
                  Github
                </a>
                <a
                  className="underline"
                  href="https://www.instagram.com/dv64bit/"
                >
                  Instagram
                </a>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div>Email:</div>
            <a
              href="mailto:darshanverma2002@gmail.com?subject=Let's Connect$body= I saw your website"
              className="underline"
              target="_blank"
            >
              darshanverma2002@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
