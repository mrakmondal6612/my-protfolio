"use client";
import React from "react";
import Image from "next/image";
import weather from "../assets/weather.png";
import todolist from "../assets/todo-list.png";
import saySaimon from "../assets/say-saimon.png";
import proj1 from "../assets/proj1.jpg";
import proj3 from "../assets/proj3.png";
import proj2 from "../assets/proj2.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    title: "UPTEC",
    desc: "Science And Technology Park of Univercity of Porto",
    devStack: "Next.js",
    link: "#",
    git: "#",
    src: proj1,
  },
  {
    title: "BlackGold",
    desc: "__Now it's new black and old gold...",
    devStack: "Next.js",
    link: "#",
    git: "#",
    src: proj3,
  },
  {
    title: "Landing Platform",
    desc: "This is a Landing Platform.",
    devStack: "Next.js",
    link: "#",
    git: "#",
    src: proj2,
  },
  {
    title: "Weather App",
    desc: "This is my Weather App, This app used for calculate current weather in your city.",
    devStack: "HTML, CSS, JavaScript, React.js",
    link: "https://weather-by-ak.netlify.app/",
    git: "https://github.com/mrakmondal6612/Weather_App_React",
    src: weather,
  },
  {
    title: "Todo List",
    desc: "This is my Todo-List app, This app used for daily work or task plaining rutin app",
    devStack: "HTML, CSS, JavaScript, React.js",
    link: "https://work-2do.netlify.app/",
    git: "https://github.com/mrakmondal6612/Todo_list_React",
    src: todolist,
  },
  {
    title: "Says Simon Game",
    desc: "This game use for grow up of Human's braine IQ level.",
    devStack: "HTML, CSS, JavaScript",
    link: "https://mrakmondal6612.github.io/Game_Frame/",
    git: "https://github.com/mrakmondal6612/Game_Frame",
    src: saySaimon,
  },
];

const Portfolio = () => {
  return (
    <div
      // className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52"
      className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-25"
      id="portfolio"
    >
      <br></br>
      <h1 className=" mt-36 text-[#fb923c] text-6xl max-w-[320px] mx-auto font-semibold my-12">
        Selected <span className="text-[#ea580c]">Projects</span>
      </h1>
      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, indx) => (
          <motion.div
            key={indx}
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            //
            className={`flex ${
              indx % 2 === 1
                ? "flex-col-reverse md:flex-row-reverse gap-12"
                : "flex-col md:flex-row"
            }`}
          >
            <div className="flex justify-center items-center">
              <Image
                src={project.src}
                alt={project.title}
                className="h-[350px] w-[650px] object-cover border rounded border-gray-800"
              />
            </div>
            <div className="space-y-2 max-w-[550px] px-8">
              <h2 className="text-6xl my-4 text-white/70">{`0${indx + 1}`}</h2>
              <h2 className="text-5xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">
                {project.desc}
              </p>
              <p className="text-xl text-orange-400 font-semibold">
                {project.devStack}
              </p>
              <div className="w-68 h-[1px] bg-gray-400 my-4">
                <a
                  href={project.link}
                  className="mr-4 hover:text-[#06b6d4] hover:font-bold"
                >
                  Link
                </a>
                <a
                  href={project.git}
                  className="hover:text-[#06b6d4] hover:font-bold"
                >
                  Git
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
