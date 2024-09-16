import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-300 px-20 flex items-center gap-5">
      <div className="cardscontainer w-1/2 h-[54vh]">
        <div className="w-full h-full relative bg-[#004D43] rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-2 py-1 border-[1px] rounded-full left-8 bottom-8 border-[#CDEA68] text-[#CDEA68]">
           &copy;2022-2026
          </button>
        </div>
      </div>
      <div className="cardscontainer w-1/2 h-[54vh] flex gap-5">
        <div className="w-1/2 h-full relative bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute left-8 bottom-8 px-4 py-1 border-[1px] rounded-full uppercase tracking-tighter font-semibold">
            rating 5.0 on clutch
          </button>
        </div>
        <div className="w-1/2 h-full relative flex items-center justify-center bg-[#212121] rounded-xl">
          <img
            className="w-28"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute left-8 bottom-8 px-4 py-1 border-[1px] rounded-full uppercase tracking-tighter font-semibold">
            business bootcamp alumni
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
