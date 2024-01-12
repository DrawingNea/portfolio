import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import flexibbleImg from "@/public/Flexibble.png";
import neatSeatImg from "@/public/NeatSeat.png";
import carHubImg from "@/public/CarHub.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  /*{
    name: "Contact",
    hash: "#contact",
  },
  */
] as const;

export const experiencesData = [
  {
    title: "Computer Science Expert Subject Area: Software Development",
    location: "Berlin, DE",
    description:
      "Over 3 years I got skilled in crafting robust and scalable software solutions, adept at coding, debugging, and optimizing applications for diverse platforms.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Software Developer",
    location: "Berlin, DE",
    description:
      "I'm now a certified software developer. My stack includes React, Next.js, TypeScript & JavaScript, Tailwind, Prisma, MongoDB and Oracle.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "NeatSeat",
    description:
      "NeatSeat is a workplace management software designed to provide efficient solutions for desk assignments and organizational seating arrangements.",
    tags: ["React", "Node.js", "MDB", "Spring", "MSSQL", "Prisma"],
    imageUrl: neatSeatImg,
  },
  {
    title: "Flexibble",
    description:
      "A full stack Dribble clone with all the necessary features of dribble from sharing and showcasing projects.",
    tags: ["React", "Next.js", "Next Auth", "Tailwind", "GraphQL", "Grafbase"],
    imageUrl: flexibbleImg,
  },
  {
    title: "CarHub",
    description:
      "A Car Showcase website that presents various car types, showcasing comprehensive information in a well-designed format.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: carHubImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Java",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "PostgreSQL",
  "Python",
  "Spring",
  "MSSQL",
  "Oracle Database",
] as const;