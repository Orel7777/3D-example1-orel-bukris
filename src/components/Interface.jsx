import { motion } from "framer-motion";
import React, { useState } from "react";
import { PinContainer } from "./ui/PinContainer";

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start justify-center
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}>
      {children}
    </motion.section>
  );
};

export const Interface = ({ onSectionChange }) => {
  return (
    <div className="flex flex-col items-center w-screen">
      <AboutSection onSectionChange={onSectionChange} />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

const AboutSection = ({ onSectionChange }) => {
  return (
    <Section>
      <h1 className="text-6xl font-extrabold leading-snug text-white">
        Hi, I'm
        <br />
        <span className="px-1 italic bg-[#800080] text-pink-100 rounded-lg">
          Orel Bukris
        </span>
      </h1>
      <motion.p
        className="mt-4 text-lg text-white"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}>
        3D Website Developer specializing in Three.js.
      </motion.p>
      <motion.button
        onClick={() => onSectionChange(3)}
        className={`bg-[#800080] text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}>
        Contact me
      </motion.button>
    </Section>
  );
};

const skills = [
  {
    title: "Next js",
    level: 88,
  },
  {
    title: "Threejs / React Three Fiber",
    level: 80,
  },
  {
    title: "React / React Native",
    level: 90,
  },
  {
    title: "Nodejs",
    level: 90,
  },
  {
    title: "Typescript",
    level: 70,
  },
  {
    title: "3D Modeling",
    level: 85,
  },
];

const languages = [
  {
    title: "Hebrew",
    level: 100,
  },
  {
    title: "English",
    level: 80,
  },
];

const SkillsSection = () => {
  return (
    <Section>
      <motion.div whileInView={"visible"} className="mb-28">
        <h2 className="text-5xl font-bold text-white">Skills:</h2>
        <div className="mt-8 space-y-4 ">
          {skills.map((skill, index) => (
            <div className="w-64" key={index}>
              <motion.h3
                className="text-xl font-bold text-indigo-800"
                initial={{
                  opacity: 0,
                }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}>
                {skill.title}
              </motion.h3>
              <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                <motion.div
                  className="h-full bg-[#800080] rounded-full "
                  style={{ width: `${skill.level}%` }}
                  initial={{
                    scaleX: 0,
                    originX: 0,
                  }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div>
          <h2 className="mt-10 text-5xl font-bold text-white">
            Languages:
          </h2>
          <div className="mt-8 space-y-4 ">
            {languages.map((lng, index) => (
              <div className="w-64" key={index}>
                <motion.h3
                  className="text-xl font-bold text-indigo-800"
                  initial={{
                    opacity: 0,
                  }}
                  variants={{
                    visible: {
                      opacity: 1,
                      transition: {
                        duration: 1,
                        delay: 2 + index * 0.2,
                      },
                    },
                  }}>
                  {lng.title}
                </motion.h3>
                <div className="w-full h-2 mt-2 bg-gray-200 rounded-full">
                  <motion.div
                    className="h-full bg-[#800080] rounded-full "
                    style={{ width: `${lng.level}%` }}
                    initial={{
                      scaleX: 0,
                      originX: 0,
                    }}
                    variants={{
                      visible: {
                        scaleX: 1,
                        transition: {
                          duration: 1,
                          delay: 2 + index * 0.2,
                        },
                      },
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export const projects = [
  {
    id: 1,
    title: "Empower Your Fitness",
    des: "Discover a modern fitness platform designed to motivate and guide users through their fitness journey. Built using React, TypeScript, and TailwindCSS.",
    img: "/fitness.png",
    link: "https://empower-your-fitness-nvlf.vercel.app/",
  },
  {
    id: 2,
    title: "The Great Outdoors",
    des: "Experience the beauty of nature through a captivating web platform showcasing stunning locations around the world. Built using React and TailwindCSS.",
    img: "/outdoors.png",
    link: "https://outdoor-exploration-ten.vercel.app/",
  },
];
//

const ProjectsSection = () => {
  return (
    <Section className="flex flex-col flex-wrap items-center">
      <h1 className="mb-12 text-5xl font-bold text-white">Projects:</h1>
      <div className="grid w-full max-w-6xl grid-cols-1 gap-8 px-4 mx-auto sm:grid-cols-2">
        {projects.map((project) => (
          <PinContainer
            key={project.id}
            title={project.title}
            href={project.link}>
            <div className="flex flex-col w-full h-auto p-4 tracking-tight text-slate-100/50">
              <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-[#800080]">
                {project.title}
              </h3>
              <div className="text-base !m-0 !p-0 font-normal">
                <span className="text-[#800080]">{project.des}</span>
              </div>
              <div className="relative flex-1 w-full mt-4 overflow-hidden rounded-lg">
                <img
                  src={project.img}
                  alt={project.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </PinContainer>
        ))}
      </div>
    </Section>
  );
};

const ContactSection = () => {
  return (
    <Section
      id="contact-form"
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-400 to-purple-600">
      <div className="flex flex-col items-center w-full mx-auto max-w-7xl">
        <h2 className="mb-12 text-5xl font-bold text-white">Contact me</h2>
        <div className="max-w-full p-10 shadow-xl bg-white/10 backdrop-blur-lg rounded-2xl w-96">
          <form className="w-full space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                className="w-full px-4 py-3 text-white transition-all border bg-white/20 rounded-xl border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="w-full px-4 py-3 text-white transition-all border bg-white/20 rounded-xl border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                id="message"
                placeholder="Message"
                rows="4"
                className="w-full px-4 py-3 text-white transition-all border resize-none bg-white/20 rounded-xl border-white/30 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl shadow-lg transform hover:scale-[1.02] transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};
