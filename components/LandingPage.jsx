import { motion } from "framer-motion";
import React from "react";
import { LuArrowUpRight } from "react-icons/lu";

function LandingPage() {
  return (
    <div className="w-full h-screen bg-white pt-1 ">
      <div className="textstructure mt-52 px-20">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ duration: 1, ease: [0.36, 0, 0.66, -0.56] }}
                    className="w-[10vw] h-[6.4vw] rounded-md bg-green-500 relative mb-[1vw] "
                  >
                    <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTK4YDSiDzIdl09D1g4wOxVMDqw3h0qQdVh2r7ybQcOZ9Cogpd5" />
                  </motion.div>
                )}
                <h1 className='font-["Founders Grotesk X-Condensed"] font-bold -pt-[2vw] mb-[1vw] uppercase text-[9vw] leading-[.75] tracking-tighter pr-1 '>
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-2 border-zinc-800 mt-20 flex justify-between items-center py-5 px-20 text-lg">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-normal tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[1px] rounded-full border-zinc-800 uppercase font-normal hover:bg-black hover:text-white">
            start the project
          </div>

          <div className="w-10 h-10 border-[1px] rounded-full flex items-center justify-center  border-zinc-800 hover:bg-black hover:text-white">
            <LuArrowUpRight size={"25px"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
