import React from "react";
import SectionHeading from "./Section-Heading";
import { skillsData } from "@/lib/data";

const Skills = () => {
  return (
    <section>
      <SectionHeading>My skills</SectionHeading>+
      <ul>
        {skillsData.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
