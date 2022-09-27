import React from "react";

import { motion } from "framer-motion";
import { urlFor } from "../client";

const ExperienceCard = ({ experience }) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[500px] snap-center bg-[#292929] p-8 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      {experience.companyImage && (
        <motion.img
          initial={{ y: -100, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-20 h-20 rounded-full xl:w-[130px] xl:h-[130px] object-cover object-center"
          src={urlFor(experience.companyImage).url()}
          alt={experience.company}
        />
      )}

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{experience.company}</h4>
        <p className="font-bold text-2xl mt-1">{experience.jobTitle}</p>
        <div className="flex space-x-2 my-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology.image).url()}
              alt={technology.title}
              className="h-10 w-10 rounded-full"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(experience.dateStarted).toDateString()} -{" "}
          {experience.isCurrentlyWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className="list-disc space-y-3 ml-5 text-lg">
          {experience.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
