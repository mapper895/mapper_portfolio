import React, { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { client, urlFor } from "../client";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <p className="text">
      {isReadMore ? text.slice(0, 99) : text}
      <span onClick={toggleReadMore} className="text-[#05c3dd] cursor-pointer">
        {isReadMore ? " ...read more" : " show less"}
      </span>
    </p>
  );
};

const Testimonials = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const query = '*[_type == "testimonials"]';
    const brandsQuery = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setTestimonials(data);
    });
    client.fetch(brandsQuery).then((data) => {
      setBrands(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
      {testimonials.length && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
        >
          <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
            Testimonials
          </h3>

          <div className="flex flex-col sm:w-[700px] w-[100%] mt-10">
            <div className="flex flex-col flex-1 justify-center items-center">
              <div className="flex sm:flex-row flex-col justify-center items-center w-full min-h-[240px] p-8 rounded-2xl bg-[#292929] opacity-40 hover:opacity-100">
                <img
                  className="w-[100px] h-[100px] rounded-full object-cover"
                  src={urlFor(test.image).url()}
                  alt="testimonial"
                />
                <div className="flex-1 h-[100%] px-8 text-left flex flex-col justify-around items-start">
                  <p className="sm:text-xl text-s">
                    {test.feedback.length > 100 ? (
                      <ReadMore>{test.feedback}</ReadMore>
                    ) : (
                      test.feedback
                    )}
                  </p>
                  <div>
                    <h4 className="font-semibold text-gray-500 sm:mt-8 mt-2">
                      {test.name}
                    </h4>
                    <h5 className="font-light text-[#05c3dd] mt-[5px]">
                      {test.company}
                    </h5>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center flex-row mt-4">
                <div
                  className="flex justify-center items-center w-[50px] h-[50px] rounded-full m-4 transition duration-300 ease-in-out bg-[#292929] hover:opacity-100 opacity-40 hover:text-[#05c3dd]"
                  onClick={() =>
                    handleClick(
                      currentIndex === 0
                        ? testimonials.length - 1
                        : currentIndex - 1
                    )
                  }
                >
                  <ChevronLeftIcon className="w-[20px] h-[20px]" />
                </div>
                <div
                  className="flex justify-center items-center w-[50px] h-[50px] rounded-full m-4 transition duration-300 ease-in-out bg-[#292929] hover:opacity-100 opacity-40 hover:text-[#05c3dd]"
                  onClick={() =>
                    handleClick(
                      currentIndex === testimonials.length - 1
                        ? 0
                        : currentIndex + 1
                    )
                  }
                >
                  <ChevronRightIcon className="w-[20px] h-[20px]" />
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center w-full flex-wrap mt-8">
              {brands.map((brand) => (
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, type: "tween" }}
                  className="w-[120px] m-4 sm:m-6 sm:w-[150px]"
                  key={brand._id}
                >
                  <img
                    className="w-100% h-auto object-cover grayscale hover:grayscale-0"
                    src={urlFor(brand.imgUrl).url()}
                    alt={brand.name}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Testimonials;
