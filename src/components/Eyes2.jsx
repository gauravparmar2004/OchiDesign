import React, { useEffect, useState } from "react";

function Eyes2() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle-180);
    });
  });
  return (
    <div className="w-full min-h-screen bg-[#CDEA68] ">
      <div className="w-full h-full  absolute flex items-center justify-center gap-10">
        <div className="w-[12vw] h-[27vh] rounded-full bg-zinc-100 relative z-[999] -mt-60 flex items-center justify-center">
          <div
            style={{ transform: `rotate(${rotate}deg)` }}
            className="relative w-[7vw] h-[15vh] bg-[#212121] rounded-full flex items-center justify-center"
          >
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
              className="line absolute w-full h-6 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="w-[1vw] h-[2vh] bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="w-[12vw] h-[27vh] rounded-full bg-zinc-100 relative z-[999] -mt-60 flex items-center justify-center">
          <div
            style={{ transform: `rotate(${rotate}deg)` }}
            className="relative w-[7vw] h-[15vh] bg-[#212121] rounded-full flex items-center justify-center"
          >
            <div
              style={{ transform: `translate(-50%,-50%) rotate(${rotate}deg)` }}
              className="line absolute w-full h-6 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
            >
              <div className="w-[1vw] h-[2vh] bg-zinc-100 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[90vh] relative flex items-center justify-center">
        <div className="text text-center text-[10vw] uppercase font-bold leading-[8rem] tracking-tighter text-[#212121] mb-36">
          {" "}
          <h1>
            ready <br /> to start <br /> the project ?
          </h1>
        </div>

        <button className="absolute flex items-center gap-6 bottom-28 border-2 px-6 py-3  text-[1.1vw] rounded-full uppercase font-normal text-[#FCFCFC] bg-[#212121] border-[#212121] ">
          start the project
          <h1 className="w-2 h-2 bg-zinc-100 rounded-full"></h1>
        </button>
        <h1 className="absolute bottom-20 text-[1.2vw]  text-black font-semibold">
          OR
        </h1>

        <button className="absolute flex items-center gap-6 bottom-5 mt-6 border-2 px-6 py-3  text-[1.1vw] rounded-full uppercase font-normal text-[#212121] bg-none border-[#212121] ">
          hello@ochi.design
          <h1 className="w-2 h-2 bg-[#212121] rounded-full"></h1>
        </button>
      </div>
    </div>
  );
}

export default Eyes2;
