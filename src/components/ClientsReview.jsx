import React from "react";

function ClientsReview() {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full py-10 px-20 border-b-[1px]">
        <h1 className="text-6xl">Clients' reviews</h1>
      </div>
      <div className="w-full px-20 flex">
        <div className="w-1/2 flex gap-60 py-5">
          <div>
            <h1 className="text-[1.2vw] underline">Karman Ventures</h1>
          </div>
          <div className="">
            <h1 className="text-[1.2vw]">Services:</h1>
            <button className="border-2 px-2 py-1 rounded-full uppercase mt-16 mb-4">
              investor deck
            </button>
            <br />
            <button className="border-2 px-2 py-1 rounded-full uppercase">
              sales deck
            </button>
          </div>
        </div>
        <div className="w-1/2 py-5 flex gap-52">
          <div>
            <h1 className="text-[1.2vw]">William Barnes</h1>
            <div className="h-28 w-28 bg-slate-600 rounded-xl mt-20 overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png"
                alt=""
              />
            </div>
            <h1 className="w-[30vw] mt-6 text-[1.1vw]">
              They were transparent about the time and the stages of the
              project. The end product is high quality, and I feel confident
              about how they were handholding the client through the process. I
              feel like I can introduce them to someone who needs to put a sales
              deck together from scratch, and they would be able to handhold the
              client experience from 0 to 100 very effectively from story to
              design. 5/5
            </h1>
          </div>
          <div>
            <h1 className="uppercase text-[1.2vw] font-semibold text-[#7a7a7acc]">
              read
            </h1>
          </div>
        </div>
      </div>
      <div className="w-full h-[80vh]">
        <div className=" w-full flex justify-between px-20 border-t-[1px] mt-10 pt-4 border-b-[1px] pb-4">
          <div>
            <h1 className="underline text-[1.1vw]">Planetly</h1>
          </div>
          <div>
            <h1 className="text-[1.1vw]">Nina Walloch</h1>
          </div>
          <div>
            <h1 className="underline text-[1.1vw] font-semibold">READ</h1>
          </div>
        </div>
        <div className=" w-full flex justify-between px-20 pt-4 border-b-[1px] pb-4">
          <div>
            <h1 className="underline text-[1.1vw]">Planetly</h1>
          </div>
          <div>
            <h1 className="text-[1.1vw]">Tomer Levy</h1>
          </div>
          <div>
            <h1 className="underline text-[1.1vw] font-semibold">READ</h1>
          </div>
        </div>
        <div className=" w-full flex justify-between px-20 pt-4 border-b-[1px] pb-4">
          <div>
            <h1 className="underline text-[1.1vw]">Planetly</h1>
          </div>
          <div>
            <h1 className="text-[1.1vw]">Ellen Kim</h1>
          </div>
          <div>
            <h1 className="underline text-[1.1vw] font-semibold">READ</h1>
          </div>
        </div>
        <div className=" w-full flex justify-between px-20 pt-4 border-b-[1px] pb-4">
          <div>
            <h1 className="underline text-[1.1vw]">Planetly</h1>
          </div>
          <div>
            <h1 className="text-[1.1vw]">Brendan Goss</h1>
          </div>
          <div>
            <h1 className="underline text-[1.1vw] font-semibold">READ</h1>
          </div>
        </div>
        <div className=" w-full flex justify-between px-20 pt-4 border-b-[1px] pb-4">
          <div>
            <h1 className="underline text-[1.1vw]">Planetly</h1>
          </div>
          <div>
            <h1 className="text-[1.1vw]">Raff Labrie</h1>
          </div>
          <div>
            <h1 className="underline text-[1.1vw] font-semibold">READ</h1>
          </div>
        </div>
        <div className=" w-full flex justify-between px-20 pt-4 border-b-[1px] pb-4">
          <div>
            <h1 className="underline text-[1.1vw]">Planetly</h1>
          </div>
          <div>
            <h1 className="text-[1.1vw]">Stefan Strohmer</h1>
          </div>
          <div>
            <h1 className="underline text-[1.1vw] font-semibold">READ</h1>
          </div>
        </div>
        <div className=" w-full flex justify-between px-20 pt-4 border-b-[1px] pb-4">
          <div>
            <h1 className="underline text-[1.1vw]">Planetly</h1>
          </div>
          <div>
            <h1 className="text-[1.1vw]">David Budde</h1>
          </div>
          <div>
            <h1 className="underline text-[1.1vw] font-semibold">READ</h1>
          </div>
        </div>
        <div className=" w-full flex justify-between px-20 pt-4 border-b-[1px] pb-4">
          <div>
            <h1 className="underline text-[1.1vw]">Planetly</h1>
          </div>
          <div>
            <h1 className="text-[1.1vw]">David Budde</h1>
          </div>
          <div>
            <h1 className="underline text-[1.1vw] font-semibold">READ</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientsReview;
