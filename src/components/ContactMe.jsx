import React from "react";

import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const ContactMe = ({ pageInfo }) => {
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-light text-center">
          I have got what you need.{" "}
          <span className="decoration-[#05c3dd]/50 underline">
            {" "}
            Let´s Talk.
          </span>
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#05c3dd] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#05c3dd] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#05c3dd] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo.address}</p>
          </div>
        </div>

        <form
          onSubmit={() => {}}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>

          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#05c3dd] py-3 px-10 rounded-md text-black font-thin text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
