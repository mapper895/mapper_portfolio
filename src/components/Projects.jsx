import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { client, urlFor } from "../client";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const query = `
      *[_type == "project"]{
        ...,
        technologies[]->
      }
    `;

    client.fetch(query).then((data) => setProjects(data));
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#05c3dd]/80">
        {projects &&
          projects.map((project, index) => (
            <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
              <motion.img
                initial={{ y: -300, opacity: 0 }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project.image).url()}
                alt={project.title}
                className="lg:max-h-[300px] cursor-pointer"
                onClick={() => window.open(project.linkToBuild, "_blank")}
              />
              <div className="space-y-8 px-0 md:px-10 max-w-6xl">
                <h4 className="text-4xl font-semibold text-center">
                  <span>
                    Case Study {index + 1} of {projects.length}:{" "}
                  </span>{" "}
                  <a
                    className="underline decoration-[#05c3dd]"
                    href={project.linkToBuild}
                    _blank="true"
                  >
                    {project.title}
                  </a>
                </h4>
                <div className="flex items-center space-x-2 justify-center">
                  {project.technologies.map((technology) => (
                    <img
                      key={technology._id}
                      src={urlFor(technology.image).url()}
                      alt={technology.title}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                  ))}
                </div>
                <p className="text-lg text-center md:text-left">
                  {project.summary}
                </p>
              </div>
            </div>
          ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#05c3dd]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
