import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { client, urlFor } from "./client";
import {
  About,
  ContactMe,
  Header,
  Hero,
  Projects,
  Skills,
  WorkExperience,
} from "./components";

const App = () => {
  const [pageInfo, setPageInfo] = useState([]);

  useEffect(() => {
    const query = '*[_type == "pageInfo"][0]';

    client.fetch(query).then((data) => setPageInfo(data));
  }, []);

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#05c3dd]/80">
      {pageInfo.heroImage && (
        <>
          <Header />

          <section id="hero" className="snap-start">
            <Hero pageInfo={pageInfo} />
          </section>

          <section id="about" className="snap-center">
            <About pageInfo={pageInfo} />
          </section>

          <section id="experience" className="snap-center">
            <WorkExperience />
          </section>

          <section id="skills" className="snap-start">
            <Skills />
          </section>

          <section id="projects" className="snap-start">
            <Projects />
          </section>

          <section id="contact" className="snap-start">
            <ContactMe pageInfo={pageInfo} />
          </section>

          <Link reloadDocument to="#hero">
            <footer className="sticky bottom-5 w-full cursor-pointer">
              <div className="flex items-center justify-center">
                <img
                  className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer object-cover"
                  src={urlFor(pageInfo.heroImage).url()}
                  alt={pageInfo.name}
                />
              </div>
            </footer>
          </Link>
        </>
      )}
    </div>
  );
};

export default App;
