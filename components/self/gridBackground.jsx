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
        <Button className="text-lg rounded-none">Start Now</Button>
        <div className="w-[1100px] h-[700px] bg-textBlack absolute -bottom-[430px]">
          <img src="/dashboard.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}
