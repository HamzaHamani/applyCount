import React from "react";
import { Button } from "../ui/button";

export function GridBackgroundDemo() {
  return (
    <div className="relative">
      <div className=" w-full dark:bg-bgMain h-screen  bg-bgMain  dark:bg-grid-black/[0.1]  bg-grid-black/[0.1] relative flex flex-col items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex flex-row  items-center justify-center dark:bg-textBlack/5 bg-textBlack/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <h1 className="text-[150px] text-textBlack font-extrabold w-[60%] text-center leading-[120px]   relative z-20 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8  -mt-24">
          Mastering Your Job Journey
        </h1>
        <p className="text-2xl  w-[30%] text-center  text-textBlack -mt-7   relative z-20 bg-clip-text  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          Stay ahead in your job search with real-time tracking of every
          application, from submission to decision.
        </p>
        <div className="absolute z-10 top-[620px] left-28 w-52 h-52 rotate-6 ">
          <img src="/imgs/svgs/arrow-right.svg" />
        </div>
        <div className="absolute z-10 top-[620px] right-28 w-52 h-52 -rotate-6 ">
          <img
            src="/imgs/svgs/arrow-right.svg"
            className="transform scale-x-[-1]"
          />
        </div>
        <Button className="text-lg rounded-none">Start Now</Button>
        <div className="w-[1300px] h-[800px] bg-textBlack absolute -bottom-[530px] rounded-lg overflow-hidden shadow-lg shadow-black/25 z-30">
          <img src="/dashboard.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
