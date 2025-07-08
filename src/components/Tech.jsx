import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-5 xs:gap-8 sm:gap-10'>
      {technologies.map((technology) => (
        <div className='w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28' key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
