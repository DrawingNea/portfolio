import React from "react";
import Image from "next/image";

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src="https://media.licdn.com/dms/image/D4E03AQFMiLAhA0ERGQ/profile-displayphoto-shrink_200_200/0/1700738400333?e=1709769600&v=beta&t=7LXFwISllsk0VHC1sa_0pKj8lrae8Y5ip-ECkAwByIA"
            alt="Evelyn portrait"
            width={192}
            height={192}
            quality={95}
            priority={true}
            className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
          />
          <span className="text-4xl">
            👋
          </span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
