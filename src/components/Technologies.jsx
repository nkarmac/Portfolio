import React from "react";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28 text-center font-bold text-white-100 text-[14px] pl-1 tracking-wider' key={technology.name}>
          <img  src={technology.icon} alt="" />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");