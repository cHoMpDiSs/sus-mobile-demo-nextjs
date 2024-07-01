import React from "react";
import Image from "next/image";
import boardsPic from "../public/images/boards.png";
import cartPic from "../public/images/cart.png";
import pantsPic from "../public/images/pants.png";
// import demoVid from "../public/video/demo.mp4"
import AnimatedText from "./AnimatedText";
import mockUp from "../public/images/home.png";

const Screen = ({ text, pic, className = "" }) => {
  return (
    <>
      <AnimatedText className={`ml-3  ${className}`} text={text} />

      <div
        className="relative md:w-[12rem] sm:w-[10rem] w-[20rem] mx-auto rounded-3xl rounded-br-3xl border
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
          className="rounded-[1.5rem] w-full  bg-dark mb-2 ml-2 border border-dark  "
          src={pic}
        />
      </div>
    </>
  );
};

const Video = () => {
  return (
    <div
      className="relative  md:w-[12rem] sm:w-[10rem] w-[20rem]  mx-auto rounded-[1.5rem] rounded-br-[35px] rounded-bl-[35px]  rounded-tr-[34px] border
      border-solid border-dark bg-light shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
       "
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[100%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <video
        className="mt-[.rem] md:w-[12rem] sm:w-[9rem] w-[19rem]   ml-[.7rem] mb-2 rounded-r-[25px] rounded-l-[25px] rounded-[1.5rem] xs:rounded-br-2xl border border-dark"
        poster={mockUp.src}
        controls
        preload="none"
        autoPlay={true}
      >
        <source src="/video/demo.mp4" type="video/mp4" />
        <track
          src="/video/demo.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
      {/* </div> */}
    </div>
  );
};

const Screens = () => {
  return (
    <div className="flex flex-1 mx-auto mt-24 mb-48">
      <div className="   mt-10 justify-center items-center">
        <Video />
        <Screen
          className={" mt-14"}
          text={"Deck Screen"}
          pic={boardsPic}
        />
        <Screen
          className={" mt-14"}
          text={"Pants Screen"}
          pic={pantsPic}
        />
        <Screen
          className={"mt-14"}
          text={"Cart Screen"}
          pic={cartPic}
        />
      </div>
    </div>
  );
};

export default Screens;
