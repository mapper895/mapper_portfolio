import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { client } from "../client";
import mouseScroll from "../assets/scrolling_mousewheel.gif";
import shift from "../assets/shift.jpg";

const WorkExperience = () => {
  const [experiences, setExperiences] = useState([]);
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    const query = `*[_type == "experience"]{
      ...,
      technologies[]->
    }`;

    client.fetch(query).then((data) => setExperiences(data));

    setTimeout(() => {
      setShowElement(false);
    }, 5000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#05c3dd]/80">
        {experiences.map((experience) => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </div>

      {showElement && experiences.length > 2 && (
        <motion.div
          initial={{ y: -200 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute flex opacity-0 justify-center items-center top-[50%] bg-white sm:opacity-90 w-[450px] h-[250px] z-50 rounded-3xl"
        >
          <div className="flex flex-col">
            <div className="flex flex-row justify-center items-center">
              <img className="w-[150px]" src={shift} alt="" />
              <p className="text-[50px] text-center mb-4 text-black">+</p>
              <img
                className="h-[150px] w-[100px] object-cover"
                src={mouseScroll}
                alt="mouse"
              />
            </div>
            <p className="text-[26px] text-center text-black">
              Shift + Mouse scroll
            </p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default WorkExperience;
