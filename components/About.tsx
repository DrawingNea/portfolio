"use client";
import React, { useEffect } from "react";
import SectionHeading from "./Section-Heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      id="about"
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      ref={ref}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a <span className="font-medium">Computer Science graduate</span>{" "}
        with expertise in{" "}
        <span className="font-medium">Software Development</span>. As a{" "}
        <span className="font-medium">full-time software developer</span>, I am
        deeply passionate about leveraging technologies.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies and composing music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">chemistry and biology</span>. I'm also
        learning how to play the drums.
      </p>
    </motion.section>
  );
};

export default About;
