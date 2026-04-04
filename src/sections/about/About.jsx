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
       Hello! I'm Vikas Nallana, a passionate Data Analyst and aspiring Data Engineer based in Visakhapatnam, India. I have a strong interest in working with data, extracting insights, and building data-driven solutions to solve real-world problems.
      </p>
      <br />
      <p data-aos="fade-left">
        I have completed my BTech in Computer Science (AIML), where I developed a solid foundation in data analysis, Python, and database management. During my academic journey, I gained hands-on experience in working with data, performing analysis, and understanding end-to-end data workflows.
      </p>
      <br />
      <p data-aos="fade-right">
        I am particularly enthusiastic about transforming raw data into meaningful insights and continuously improving my skills in analytics, data engineering, and visualization. I enjoy working on projects that involve data processing, problem-solving, and decision-making.

I am confident in using tools and technologies such as Python, SQL, Pandas, and data visualization libraries to analyze and interpret data effectively.
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
