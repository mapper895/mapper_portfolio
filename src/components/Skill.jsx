import React from "react";

import { motion } from "framer-motion";
import { urlFor } from "../client";

const Skill = ({ skill, directionLeft }) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -300 : 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        src={urlFor(skill.image).url()}
        alt={skill.title}
        className="rounded-full border border-gray-500 object-cover w-16 h-16 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-[rgb(36,36,36)] h-16 w-16 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-xl font-bold text-gray-500 opacity-100 ">
            {skill.progress}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
