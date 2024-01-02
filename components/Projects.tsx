import SectionHeading from "./Section-Heading";
import Project from "./Project";
import React from "react";
import { projectsData } from "@/lib/data";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Projects;
