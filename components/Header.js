import React from "react";
import AnimatedText from "./AnimatedText";
import Image from "next/image";
import mockUp from "../public/images/home.png";
import { GithubIcon } from "./Icons";

const Header = () => {
  return (
    <div className="grid grid-cols-12 mt-24  xl:mx-[10rem] ">
      <div className="lg:col-span-6 col-span-12 ">
        <AnimatedText
          className="!text-6xl lg:text-left md:text-left md:ml-10 xl:!text-7xl lg:!text-6xl md:!text-5xl  "
          text="Sus Af"
        />
        <AnimatedText
          className="!text-3xl lg:text-left md:text-left md:ml-10 xl:!text-4xl  lg:!text-4xl md:!text-4xl  "
          text="React Native Demo"
        />
        <div className="flex justify-center md:ml-10 lg:justify-start md:justify-start">
          <p className="text-dark font-mont ">by: Jordon Marchesano</p>
          <a className="" href="https://github.com/cHoMpDiSs/IOS-Skate-Shop-React-Native  ">
            <GithubIcon className={"w-10 bg-dark rounded-xl mt-[0.15rem] ml-1"} />
          </a>
        </div>
      </div>

      <div className="mx-auto lg:col-span-6 lg:-rotate-45 xl:ml-[10rem] lg:ml-[5rem] col-span-12 w-[10rem] mt-10">
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
            className="rounded-[1.5rem] w-full bg-dark mb-2 ml-2 border border-dark hidden lg:block"
            src={mockUp}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
