import React, { useState } from "react";

import { client } from "../client";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const ContactMe = ({ pageInfo }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-light text-center">
          Take a{" "}
          <span className="decoration-[#05c3dd]/50 underline">
            coffee & chat
          </span>{" "}
          with me.
        </h4>

        <div className="space-y-6">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon
              onClick={() => (window.location = `tel:${pageInfo.phoneNumber}`)}
              className="text-[#05c3dd] h-7 w-7 animate-pulse cursor-pointer"
            />
            <p className="text-xl">{pageInfo.phoneNumber}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon
              onClick={() => (window.location = `mailto:${pageInfo.email}`)}
              className="text-[#05c3dd] h-7 w-7 animate-pulse cursor-pointer"
            />
            <p className="text-xl">{pageInfo.email}</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#05c3dd] h-7 w-7 animate-pulse" />
            <p className="text-xl">{pageInfo.address}</p>
          </div>
        </div>

        {isFormSubmitted ? (
          <div>
            <h3 className="head-text text-center text-[#05c3dd]">
              Thank you for getting in touch :)
            </h3>
          </div>
        ) : (
          <div className="flex flex-col space-y-2 w-fit mx-auto">
            <div className="flex space-x-2">
              <input
                placeholder="Name"
                value={name}
                name="name"
                onChange={handleChangeInput}
                className="contactInput"
                type="text"
              />
              <input
                value={email}
                name="email"
                onChange={handleChangeInput}
                placeholder="Email"
                className="contactInput"
                type="email"
              />
            </div>
            <textarea
              placeholder="Message"
              className="contactInput"
              value={message}
              name="message"
              onChange={handleChangeInput}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-[#05c3dd] py-3 px-10 rounded-md text-black font-thin text-lg"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactMe;
