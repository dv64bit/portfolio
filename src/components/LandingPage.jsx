import { GoArrowUpRight } from "react-icons/go";
import { motion } from "framer-motion";

const LandingPage = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.3"
      className="w-full h-full bg-zinc-900 pt-1 "
    >
      <div className="textstructure mt-52 px-14">
        {["I Create", "Eye-Opening", "Websites"].map((values, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.64, 0, 0.78, 0], duration: 0.5 }}
                    className="mr-5 w-[8vw] rounded-md h-[5.7vw] -top-[1.2vw] relative overflow-hidden"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?q=80&w=2018&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] tracking-3 leading-[.75] font-Founders_Grotesk_X">
                  {values}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px]  py-5 px-14 w-full border-zinc-700 mt-20 flex justify-between items-center">
        {["For public and private companies", "Open for Freelancing"].map(
          (item, index) => (
            <p key={index} className="text-base text-white font-NeueMontreal">
              {item}
            </p>
          )
        )}
        <div className="flex items-center gap-1">
          <a
            href="#Contact"
            className="uppercase border-[1px] text-base border-zinc-400 px-4 py-1 tracking-wide rounded-full"
          >
            Start the project
          </a>
          <a
            href="#Contact"
            className="w-8 h-8 rounded-full font-semibold border-[1.5px] border-zinc-400 flex items-center justify-center"
          >
            <GoArrowUpRight size={["1em"]} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
