import React from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import mockUp from "../public/images/home.png";

const Header = () => {
  return (
    <div className="grid grid-cols-12 mt-24  xl:mx-[20rem]">
      
      <div className="lg:col-span-6 col-span-12 ">
        <AnimatedText
          className="!text-4xl lg:text-left md:text-left md:ml-10 xl:!text-5xl lg:!text-6xl md:!text-5xl  sm:!text-4xl"
          text="Sus Af"
        />
        <AnimatedText
          className="!text-3xl lg:text-left md:text-left md:ml-10 xl:!text-4xl  lg:!text-5xl md:!text-4xl sm:!text-3xl "
          text="React Native Demo"
        />
      </div>
      <div className="mx-auto lg:col-span-6 lg:-rotate-45 xl:ml-[10rem] lg:ml-[5rem] col-span-12 w-[10rem] sm:mt-10">
        <div
          className="relative  w-full items-center  justify-between rounded-3xl rounded-br-3xl border
border-solid border-dark bg-light shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
 xs:rounded-2xl  xs:rounded-br-3xl 
    "
        >
          <div
            className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
          />
          <Image
            className="rounded-[1.5rem] w-full bg-dark mb-2 ml-2 border border-dark"
            src={mockUp}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
