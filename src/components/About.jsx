import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";

function About() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-[#212121]">
      <h1 className="font-['Neue_Montreal'] text-6xl tracking-normal leading-[3.9vw]">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain complex ideas, and hire
        great people.
      </h1>
      <div className="w-full border-[1px] mt-16 border-zinc-600"></div>
      <div className="w-full flex">
        <div className="w-1/2 h-[20vw] mt-2">
          <h1 className="mt-6">What you can expect:</h1>
        </div>
        <div className="w-1/2 h-[20vw]  mt-2 ">
          <h1 className="w-[20vw] leading-tight mt-6 text-[1.2vw]">
            We create tailored presentations to help you persuade your
            colleagues, clients, or investors. Whether it’s live or digital,
            delivered for one or a hundred people.
          </h1>
          <div className=" flex gap-[12vw]">
            <h1 className="w-[20vw] leading-tight mt-12 text-[1.2vw]">
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </h1>
            <div className="mt-12 text-[1.1vw]  underline">
              <h1>Instagram</h1>
              <h1>Behance</h1>
              <h1>Facebook</h1>
              <h1>LinkedIn</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-[1px] mt-16  border-zinc-600"></div>

      <div className="w-full flex pt-8">
        <div className="w-1/2">
          <h1 className="text-5xl">Our approach:</h1>
          <button className="flex items-center justify-center uppercase gap-4 px-8 py-4 mt-6 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] bg-[#dbea83] rounded-2xl overflow-hidden">
        <img className="h-full w-full object-cover" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
