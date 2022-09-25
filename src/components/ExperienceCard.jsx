import React from "react";

import { motion } from "framer-motion";

const ExperienceCard = () => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[500px] snap-center bg-[#292929] p-8 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full xl:w-[130px] xl:h-[130px] object-cover object-center"
        src="https://cdn.sanity.io/images/jzu4id4u/production/1e28bc212fb2ab10f76e57627b38f08d8544dc6d-250x250.png"
        alt="Riskill"
      />

      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Riskill</h4>
        <p className="font-bold text-2xl mt-1">CEO of Riskill</p>
        <div className="flex space-x-2 my-2">
          <img
            src="https://cdn.sanity.io/images/jzu4id4u/production/2f706b7823dd2694ddd1919bd96d3ae463edff17-2048x2048.png"
            alt="Notion"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://cdn.sanity.io/images/jzu4id4u/production/2f706b7823dd2694ddd1919bd96d3ae463edff17-2048x2048.png"
            alt="Notion"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://cdn.sanity.io/images/jzu4id4u/production/2f706b7823dd2694ddd1919bd96d3ae463edff17-2048x2048.png"
            alt="Notion"
            className="h-10 w-10 rounded-full"
          />
          <img
            src="https://cdn.sanity.io/images/jzu4id4u/production/2f706b7823dd2694ddd1919bd96d3ae463edff17-2048x2048.png"
            alt="Notion"
            className="h-10 w-10 rounded-full"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">Started - Ended</p>

        <ul className="list-disc space-y-3 ml-5 text-lg">
          <li>Manage Social Media</li>
          <li>Manage Social Media</li>
          <li>Manage Social Media</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
