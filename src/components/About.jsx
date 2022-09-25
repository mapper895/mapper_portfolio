import React from "react";

import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        src="https://cdn.sanity.io/images/jzu4id4u/production/c43d0c439371a142c5dc81c73e3a513cbc940026-960x1280.jpg"
        alt="myphoto"
        initial={{ x: -200, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        className="-mb-20 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full object-cover md:rounded-lg md:w-58 md:h-80 xl:w-[350px] xl:h-[500px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#05c3dd]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          I´m Miguel✌. You might also know me as MAPPER! Here is a little bit
          about me... I´ve been coding for over 5 years now. As a Full-Stack
          developer I´ve worked both with startups and large corporations to
          help build & scale their companies. Along the journey I realised my
          passion existed in helping others excel and pursue their dreams as
          upcoming developers. I have now trained thousand´s of developers
          across the globe. Through live coaching session on Youtube, I have
          accumulated several MILLION views demostrating how to apply developer
          skills in a range od cool builds and challenges. I deliver REAL VALUE
          by teaching development. You´ll get hans-on experience and learn the
          skills that are required to succeed in the real-world in this
          comunity. And if that´s not enough, I have cloned most of the
          applications you have used in your life!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
