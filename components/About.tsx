import React from "react";

const About = () => {
  return (
    <section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40">
      <h2 className="text-3xl font-medium capitalize mb-8">About me</h2>
      <p className="mb-3">
        I am a <span className="font-medium">Computer Science graduate</span>{" "}
        with expertise in{" "}
        <span className="font-medium">Software Development</span>. As a{" "}
        <span className="font-medium">full-time software developer</span>, I am
        deeply passionate about leveraging technologies.
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Prisma. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies and composing music. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the drums.
      </p>
    </section>
  );
};

export default About;
