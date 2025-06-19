
import React from "react";
import { ProjectsList } from "./data";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";

function Projects() {
  return (
    <div id="projects_section" className="flex flex-col items-center mt-10">
      <h1 className="my-5 mb-10 font-bold text-5xl text-center">PROJECTS 🚀</h1>
      {ProjectsList.map((e, i) => (
        <div
          key={i}
          data-aos="zoom-in"
          className="flex space-x-2 bg-white text-black rounded-md my-5 w-[70vw] max-[1200px]:flex-col max-[1200px]:items-center"
        >
          <div
            className="rounded-l-md h-[270px] w-[480px] max-[1200px]:w-[70vw] max-[1200px]:h-[39vw] max-[1200px]:rounded-md"
            style={{
              background: `url(${e.img})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="flex-1 w-full p-3">
            <h2 className="font-semibold text-lg">{e.title}</h2>
            <p className="text-sm mb-2">{e.description}</p>
            <div className="flex flex-wrap -translate-x-2">
              {e.tech_stack.map((e2, i2) => (
                <p
                  key={i2}
                  className="bg-gray-200 rounded-md text-sm px-3 py-2 shadow-lg text-black m-2"
                >
                  {e2}
                </p>
              ))}
            </div>
            {/* links */}
            <div className="flex flex-wrap -translate-x-2">
              {e.github_url !== "" && (
                <a
                  href={e.github_url}
                  target="_blank"
                 className="bg-green-500 text-white font-semibold flex space-x-2 items-center p-2 rounded-md m-2"
                >
                  <GitHubIcon />
                  <p>Github</p>
                </a>
              )}
              {e.demo_url !== "" && (
                <a
                  href={e.demo_url}
                  target="_blank"
                  className="bg-blue-500 text-white font-semibold flex space-x-2 items-center p-2 rounded-md m-2"
                >
                  <LanguageIcon />
                  <p>Demo</p>
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
      {/* link to github */}
      <a
        href="https://github.com/vikasnallana?tab=repositories"
        target="_blank"
        className="bg-green-500 px-3 py-2 rounded-md flex items-center space-x-2 font-semibold relative"
      >
        <GitHubIcon />
        <p>more..</p>
      </a>
    </div>
  );
}

export default Projects;
