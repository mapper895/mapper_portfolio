import React from "react";
import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";

const Hero = () => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, The Name´s Miguel Perez",
      "GuyWhoLovesCofee.jsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        src="https://cdn.sanity.io/images/jzu4id4u/production/6020beaebd3a0458e9cf4361e0e567c8412adaed-4624x2608.jpg"
        alt="profile"
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
          Telematic Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold scroll-px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link reloadDocument to="/#about">
            <button className="heroButton">About</button>
          </Link>
          <Link reloadDocument to="/#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link reloadDocument to="/#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link reloadDocument to="/#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
