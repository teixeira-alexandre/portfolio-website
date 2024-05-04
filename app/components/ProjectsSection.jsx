"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { animate, motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Calendar App",
    description:
      "As one of my first projects, I created a calendar app that allows users to change the format of the date. I used HTML, CSS, and JavaScript to build this app.",
    image: "/images/projects/1.jpeg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/teixeira-alexandre/FreeCodeCamp/tree/main/Date%20Formatter",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Calorie Counter App",
    description:
      "In this Calorie Counter, users can input the food they'll eat, the calories it contains and a budget, and at the end, the user can input exercises and the app will calculate the surplus or the deficit of calories. I used HTML, CSS, and JavaScript to build this app.",
    image: "/images/projects/2.jpeg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/teixeira-alexandre/FreeCodeCamp/tree/main/Calory%20Counter",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "JavaScript Music Player",
    description:
      "I created a music player using HTML, CSS, and JavaScript. The user can play, pause, and skip songs. The app also displays the song's name and the artist.",
    image: "/images/projects/3.jpeg",
    tag: ["All", "Web", "Mobile"],
    gitUrl:
      "https://github.com/teixeira-alexandre/FreeCodeCamp/tree/main/Media%20Player",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "JavaScript RPG Game",
    description:
      "In this simple game, the user can farm resources and fight against some monsters. I used HTML, CSS, and JavaScript to build this game.",
    image: "/images/projects/4.jpeg",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/teixeira-alexandre/FreeCodeCamp/tree/main/RPG",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Palindrome Checker",
    description:
      "This app checks if a word is a palindrome. I used HTML, CSS, and JavaScript to build this app.",
    image: "/images/projects/5.jpeg",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/teixeira-alexandre/FreeCodeCamp/tree/main/Palindrome%20Checker",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Car Rent App",
    description: "I'm making this Fullstack car renting app with React, NextJS and TypeScript.",
    image: "/images/projects/6.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/teixeira-alexandre/car-hub/",
    previewUrl: "https://alexandre-car-site.vercel.app",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInVIew = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInVIew ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tags={project}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
