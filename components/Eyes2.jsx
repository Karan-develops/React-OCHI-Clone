import { useState, useEffect } from "react";
const Eyes2 = () => {
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
    <div className="flex relative w-full h-screen bg-[#cdea68] items-center justify-center tracking-tighter leading-none">
      <div className="container text-[10rem] font-extrabold text-center">
        <h1>READY</h1>
        <h1>TO START</h1>
        <h1>THE PROJECT?</h1>
        <div className="absolute gap-10 top-1/2 left-1/2 flex -translate-x-[50%] -translate-y-[50%] bg-transparent">
          <div className="flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-white">
            <div className="bg-black h-2/3 w-2/3 relative rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate - 180}deg) `,
                }}
                className="h-1/4 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="bg-white h-6 w-6 rounded-full"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-[10vw] h-[10vw] rounded-full bg-white">
            <div className="bg-black relative h-2/3 w-2/3 rounded-full">
              <div
                style={{
                  transform: `translate(-50%,-50%) rotate(${rotate - 180}deg) `,
                }}
                className="h-1/4 w-full absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]"
              >
                <div className="bg-white h-6 w-6 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="btns">
          <button className="border-8 border-black rounded-full text-2xl p-2 bg-black text-white font-thin">
            START THE PROJECT
          </button>
          <h5 className="inline-block text-4xl m-7 font-mono">OR</h5>
          <button className="border-2 border-black rounded-full text-2xl p-2 bg-transparenttext-black font-thin">
            HELLO@OCHI.DESIGN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Eyes2;
