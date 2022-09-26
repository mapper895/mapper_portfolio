import React from "react";

import { motion } from "framer-motion";

const Projects = () => {
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
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/jzu4id4u/production/207fa98fedbf7b7b165b3bf404cc9bc8a6824133-1899x927.png"
            alt="Hoobank"
            className="lg:max-h-[300px] cursor-pointer"
            onClick={() =>
              window.open(
                "https://phenomenal-banoffee-d71ed2.netlify.app/",
                "_blank"
              )
            }
          />
          <div className="space-y-8 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#05c3dd]">
                Case Study 1 of 2:{" "}
              </span>{" "}
              <a
                href="https://phenomenal-banoffee-d71ed2.netlify.app/"
                _blank="true"
              >
                HooBank
              </a>
            </h4>
            <div className="flex items-center space-x-2 justify-center">
              <img
                src="https://cdn.sanity.io/images/jzu4id4u/production/941e9a3c69fc473d0b9a744d920ee0e98a6b882d-1200x1043.png"
                alt="React"
                className="h-7 w-7 rounded-full object-cover"
              />
            </div>
            <p className="text-lg text-center md:text-left">
              Hoobank is the next generation payment method. It uses a
              methodology to identify the credit cards most likely to fit your
              needs. Their expert team examine annual percentage rates, annual
              fees.
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/jzu4id4u/production/207fa98fedbf7b7b165b3bf404cc9bc8a6824133-1899x927.png"
            alt="Hoobank"
            className="lg:max-h-[300px] cursor-pointer"
            onClick={() =>
              window.open(
                "https://phenomenal-banoffee-d71ed2.netlify.app/",
                "_blank"
              )
            }
          />
          <div className="space-y-8 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#05c3dd]">
                Case Study 1 of 2:{" "}
              </span>{" "}
              <a
                href="https://phenomenal-banoffee-d71ed2.netlify.app/"
                _blank="true"
              >
                HooBank
              </a>
            </h4>
            <div className="flex items-center space-x-2 justify-center">
              <img
                src="https://cdn.sanity.io/images/jzu4id4u/production/941e9a3c69fc473d0b9a744d920ee0e98a6b882d-1200x1043.png"
                alt="React"
                className="h-7 w-7 rounded-full object-cover"
              />
            </div>
            <p className="text-lg text-center md:text-left">
              Hoobank is the next generation payment method. It uses a
              methodology to identify the credit cards most likely to fit your
              needs. Their expert team examine annual percentage rates, annual
              fees.
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/jzu4id4u/production/207fa98fedbf7b7b165b3bf404cc9bc8a6824133-1899x927.png"
            alt="Hoobank"
            className="lg:max-h-[300px] cursor-pointer"
            onClick={() =>
              window.open(
                "https://phenomenal-banoffee-d71ed2.netlify.app/",
                "_blank"
              )
            }
          />
          <div className="space-y-8 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#05c3dd]">
                Case Study 1 of 2:{" "}
              </span>{" "}
              <a
                href="https://phenomenal-banoffee-d71ed2.netlify.app/"
                _blank="true"
              >
                HooBank
              </a>
            </h4>
            <div className="flex items-center space-x-2 justify-center">
              <img
                src="https://cdn.sanity.io/images/jzu4id4u/production/941e9a3c69fc473d0b9a744d920ee0e98a6b882d-1200x1043.png"
                alt="React"
                className="h-7 w-7 rounded-full object-cover"
              />
            </div>
            <p className="text-lg text-center md:text-left">
              Hoobank is the next generation payment method. It uses a
              methodology to identify the credit cards most likely to fit your
              needs. Their expert team examine annual percentage rates, annual
              fees.
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/jzu4id4u/production/207fa98fedbf7b7b165b3bf404cc9bc8a6824133-1899x927.png"
            alt="Hoobank"
            className="lg:max-h-[300px] cursor-pointer"
            onClick={() =>
              window.open(
                "https://phenomenal-banoffee-d71ed2.netlify.app/",
                "_blank"
              )
            }
          />
          <div className="space-y-8 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#05c3dd]">
                Case Study 1 of 2:{" "}
              </span>{" "}
              <a
                href="https://phenomenal-banoffee-d71ed2.netlify.app/"
                _blank="true"
              >
                HooBank
              </a>
            </h4>
            <div className="flex items-center space-x-2 justify-center">
              <img
                src="https://cdn.sanity.io/images/jzu4id4u/production/941e9a3c69fc473d0b9a744d920ee0e98a6b882d-1200x1043.png"
                alt="React"
                className="h-7 w-7 rounded-full object-cover"
              />
            </div>
            <p className="text-lg text-center md:text-left">
              Hoobank is the next generation payment method. It uses a
              methodology to identify the credit cards most likely to fit your
              needs. Their expert team examine annual percentage rates, annual
              fees.
            </p>
          </div>
        </div>
        <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
          <motion.img
            initial={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            src="https://cdn.sanity.io/images/jzu4id4u/production/207fa98fedbf7b7b165b3bf404cc9bc8a6824133-1899x927.png"
            alt="Hoobank"
            className="lg:max-h-[300px] cursor-pointer"
            onClick={() =>
              window.open(
                "https://phenomenal-banoffee-d71ed2.netlify.app/",
                "_blank"
              )
            }
          />
          <div className="space-y-8 px-0 md:px-10 max-w-6xl">
            <h4 className="text-4xl font-semibold text-center">
              <span className="underline decoration-[#05c3dd]">
                Case Study 1 of 2:{" "}
              </span>{" "}
              <a
                href="https://phenomenal-banoffee-d71ed2.netlify.app/"
                _blank="true"
              >
                HooBank
              </a>
            </h4>
            <div className="flex items-center space-x-2 justify-center">
              <img
                src="https://cdn.sanity.io/images/jzu4id4u/production/941e9a3c69fc473d0b9a744d920ee0e98a6b882d-1200x1043.png"
                alt="React"
                className="h-7 w-7 rounded-full object-cover"
              />
            </div>
            <p className="text-lg text-center md:text-left">
              Hoobank is the next generation payment method. It uses a
              methodology to identify the credit cards most likely to fit your
              needs. Their expert team examine annual percentage rates, annual
              fees.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute top-[30%] bg-[#05c3dd]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
