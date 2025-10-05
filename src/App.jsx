import React from "react";
import Navbar from "./components/Navbar";
import About from "./sections/about/About";
import Hero from "./sections/hero/Hero";
import Projects from "./sections/projects/Projects";
import Experience from "./sections/experience/Experience";
import Connect from "./sections/connect/Connect";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <>
      <div className="min-w-screen min-h-screen flex flex-row-reverse">
        <Navbar />
        <div className="w-[calc(100vw-3rem)] pl-4 h-[100%] overflow-auto flex flex-col justify-center items-center">
          <Hero />
          <About />
          <Projects />
          <Experience />
          {/* resume */}
          <div
            id="resume_section"
            className="flex bg-black w-full flex-col items-center py-10 my-10"
          >
            <h1 className="my-5 mb-10 font-bold text-5xl text-center">
              RESUME 📄
            </h1>
            <a
              href="https://drive.google.com/file/d/1KwpXJ66OqS58XAIuNAr4Maj190jQCOrq/view"
              target="_blank"
              className="bg-green-500 p-3 px-5 rounded-full font-bold relative"
            >
              OPEN 🚀
            </a>
          </div>
          <Connect />
          {/* footer */}
          <div className="flex bg-black text-[#ffffff99] w-full justify-center px-3 py-5 mt-20">
            <p>© 2025 Vikas Nallana. All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
