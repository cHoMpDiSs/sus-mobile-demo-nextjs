import React from "react";
import Image from "next/image";
import boardsPic from "../public/images/boards.png";
import cartPic from "../public/images/cart.png";
import pantsPic from "../public/images/pants.png";
// import demoVid from "../public/video/demo.mp4"
import AnimatedText from "./AnimatedText";


const Screen = ({ text, pic, className = "" }) => {
  return (
    <>
      <AnimatedText className={`ml-3  ${className}`} text={text} />

      <div
        className="relative  w-[40%] mx-auto rounded-3xl rounded-br-3xl border
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

const VideoScreen = ({ text, vid, className = "" }) => {
    return (
      <>
        <AnimatedText className={`ml-3  ${className}`} text={text} />
  
        <div
          className="relative  w-[40%] mx-auto rounded-3xl rounded-br-3xl border
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

const Screens = () => {
  return (
    <div className="flex flex-1 mx-auto mt-24 ">
      <div className="   mt-10 justify-center items-center">
        <Screen
          className={"lg:w-[150%] mt-14"}
          text={"Deck Screen"}
          pic={boardsPic}
        />
        <Screen
          className={"lg:w-[150%] mt-14"}
          text={"Pants Screen"}
          pic={pantsPic}
        />
        <Screen
          className={"lg:w-[150%] mt-14"}
          text={"Cart Screen"}
          pic={cartPic}
        />
      </div>
    </div>
  );
};

export default Screens;
