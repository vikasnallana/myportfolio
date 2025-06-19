import React from "react";
import "./hero.css";

const WavyHand = () => {
  return <span className="inline-block animate-wave">👋</span>;
};

function Hero() {
  return (
    <div id="hero_section" className="hero_section">
      <div className="title">
        <p>
          <WavyHand /> I'm
        </p>
        <p>Vikas</p>
        <p>Nallana</p>
      </div>

      <a
        href="#projects_section"
        rel="noopener noreferrer"
        className="button first animate-float"
      >
        <button>Projects</button>
        <span></span>
      </a>

      <a
        href="#resume_section"
        rel="noopener noreferrer"
        className="button sec animate-float"
      >
        <button>Resume</button>
        <span></span>
      </a>

      <a
        href="#contact_section"
        rel="noopener noreferrer"
        className="button third animate-float"
      >
        <button>Connect</button>
        <span></span>
      </a>
    </div>
  );
}

export default Hero;
