import React from "react";

import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon url="facebook.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="instagram.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="twitter.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="linkedin.com" fgColor="gray" bgColor="transparent" />
        <SocialIcon url="youtube.com" fgColor="gray" bgColor="transparent" />
      </motion.div>

      <Link to={"/#contact"}>
        <motion.div
          initial={{ x: 500, opacity: 0, scale: 0.5 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
};

export default Header;
