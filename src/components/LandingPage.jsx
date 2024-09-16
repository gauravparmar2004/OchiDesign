import { motion } from "framer-motion";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function LandingPage() {
  motion;
  return (
    <div data-scroll data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textstructure mt-40 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8.2vw" }}
                    transition={{ ease: [0.45, 0, 0.55, 1], duration: 2 }}
                    className="mr-[1vw]  w-[8.2vw] h-[5vw] rounded-md relative top-[1.4vw] bg-red-500 overflow-hidden "
                  >
                    <img
                      className="w-full h-full bg-cover"
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="pt-[2vw] -mb-[1vw] uppercase  leading-[.80] text-8xl tracking-tighter font-semibold ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
        <h />
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-28 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "Form the first picth to IPO",
        ].map((item, index) => (
          <p
            key={index}
            className="text-md font-regular tracking-tight leading-none"
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-2">
          <div className="px-4 py-2 border-2 rounded-full border-zinc-500 font-regular text-md uppercase ">
            start the project
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-zinc-500 ">
            <GoArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
