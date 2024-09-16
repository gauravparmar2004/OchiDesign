import { motion, useAnimation } from "framer-motion";
import gsap, { Power4 } from "gsap";
import React, { useState } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 bg-zinc-200">
      <div className="w-full px-20 border-b-[1px] pb-12 border-zinc-700">
        <h1 className='text-6xl font-["Neue_Montreal"] text-zinc-800'>
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] font-['Neue_Montreal'] font-semibold z-[999] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tight uppercase whitespace-nowrap">
              {"Cardboard spaceship".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <div className="w-full h-full overflow-hidden rounded-xl">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] font-['Neue_Montreal'] font-semibold z-[999] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-normal uppercase whitespace-nowrap">
                {"AH2 & MATT HORN".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex gap-10 mt-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] font-['Neue_Montreal'] font-semibold z-[999] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tight uppercase whitespace-nowrap">
              {"fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <div className="w-full h-full overflow-hidden rounded-xl">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] font-['Neue_Montreal'] font-semibold z-[999] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-normal uppercase whitespace-nowrap">
                {"vise".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
        <div className="cards w-full flex gap-10 mt-20">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <h1 className="absolute flex overflow-hidden text-[#CDEA68] font-['Neue_Montreal'] font-semibold z-[999] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-tight uppercase whitespace-nowrap">
              {"trawa".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="w-full h-full overflow-hidden rounded-xl">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[80vh]"
          >
            <div className="w-full h-full overflow-hidden rounded-xl">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] font-['Neue_Montreal'] font-semibold z-[999] right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-8xl leading-none tracking-normal uppercase whitespace-nowrap">
                {"premium blend".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
