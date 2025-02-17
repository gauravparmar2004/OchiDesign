import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.6" className='relative cursor-pointer w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className="absolute flex gap-10 -translate-x-[50%] -translate-y-[50%] left-1/2 top-1/2">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="flex items-center justify-center relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <p className="uppercase font-semibold ">play</p>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100">
            <div className="flex items-center justify-center relative w-2/3 h-2/3 rounded-full bg-zinc-900">
              <p className="uppercase font-semibold ">play</p>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate}deg)`,
                }}
                className="absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10"
              >
                <div className="w-8 h-8 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
