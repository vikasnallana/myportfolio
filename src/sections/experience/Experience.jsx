import React from "react";
import Qualifications from "./Qualifications";

function Experience() {
  return (
    <div id="exp_section" className="p-5 flex flex-col items-center mt-10">
      <h1 className="mt-5 font-bold text-5xl text-center">EXPERIENCE</h1>
      <h1 className="my-5 font-bold text-xl">& QUALIFICATIONS 💼</h1>
      <div className="flex justify-center">
        <Qualifications />
      </div>
    </div>
  );
}

export default Experience;
