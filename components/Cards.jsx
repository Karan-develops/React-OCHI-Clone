import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex gap-5 items-center px-32 text-white">
      <div className="CardContainer w-1/2 h-[50vh]">
        <div className="card w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center relative">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            &copy;2024
          </button>
        </div>
      </div>
      <div className="CardContainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative items-center justify-center flex w-full h-full bg-[#04342e] rounded-xl">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            &copy;2024
          </button>
        </div>
        <div className="card relative items-center justify-center flex w-full h-full bg-[#04342e] rounded-xl">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            &copy;2024
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
