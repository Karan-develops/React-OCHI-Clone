import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, SetRotate] = useState(0);
  const [disX, SetX] = useState(0);
  const [disY, SetY] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;
      let deltaY = mouseY - window.innerHeight / 2;
      SetX(deltaX);
      SetY(deltaY);
      let ansgle = Math.atan2(deltaY, deltaX);
      //console.log(ansgle);
      SetRotate(ansgle * (180 / Math.PI));
    });
  });

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        data-scroll-section
        className='relative w-full bg-cover bg-center h-screen bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'
      >
        <div className="absolute gap-10 top-1/2 left-1/2 flex -translate-x-[50%] -translate-y-[50%] bg-transparent">
          <div className="flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="bg-black h-2/3 w-2/3 relative rounded-full">
              <h1 className="absolute hover:scale-105 hover:cursor-pointer z-50 text-white font-semibold left-1/2 right-1/2 bottom-1/2 -translate-x-4 -translate-y-4 top-1/2">
                PLAY
              </h1>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate - 180}deg) `,
                }}
                className=" h-1/4 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="bg-white h-6 w-6 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  w-[15vw] h-[15vw] rounded-full bg-white">
            <div className="bg-black relative h-2/3 w-2/3 rounded-full">
              <h1 className="absolute hover:scale-105 text-white hover:cursor-pointer z-50 font-semibold left-1/2 right-1/2 bottom-1/2 -translate-x-4 -translate-y-4 top-1/2">
                PLAY
              </h1>
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate - 180}deg) `,
                }}
                className=" h-1/4 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="bg-white h-6 w-6 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
