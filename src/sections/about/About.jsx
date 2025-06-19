import React from "react";
import { stackList } from "./data";
import myImg from "../../assets/ashish.jpeg";

function About() {
  return (
    <div id="about_section" className="p-5 flex flex-col items-center w-[75vw]">
      <h1 className="my-5 mb-10 font-bold text-5xl text-center">ABOUT ME</h1>
      
      <img
        src={myImg}
        alt="Vikas Nallana"
        className="w-[210px] h-[200px] rounded-full mb-10"
        style={{ objectFit: "cover" }}
      />
      <p data-aos="fade-right">
        Hello! I'm Vikas Nallana, a full-stack developer based in
        Visakhapatnam, India. My love for computers and technology started in my
        childhood, and I've always been curious about what I could create with
        them. Now, I have the skills and knowledge to bring my ideas to life,
        and I'm proud to be a developer.
      </p>
      <br />
      <p data-aos="fade-left">
        I'm currently pursuing a BTech in Computer Science (AIML) at Raghu Engineering College.
        This journey has been both
        challenging and rewarding, allowing me to grow and develop my expertise
        in the tech world. I am passionate about what I do and excited to
        continue exploring new and innovative projects in web development.
      </p>
      <br />
      <p data-aos="fade-right">
        Working collaboratively within a team towards a shared objective has
        been an incredibly rewarding and unique experience for me. I am eager to
        continue exploring exciting projects in the future, with a particular
        interest in full-stack development.
      </p>
      <br />
      {/* techs */}
      <div>
        <p>I have become confident using the following technologies:</p>
        <div className="flex flex-wrap mt-5" data-aos="fade-in">
          {stackList.map((e, i) => (
            <div
              className="flex flex-col items-center font-semibold m-5 my-2 w-16 max-[500px]:w-12"
              key={i}
            >
              {/* add image here */}
              <img src={e.img} alt={e.name} className="w-fit" />
              <p className="text-center text-[12px] mt-2">{e.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
