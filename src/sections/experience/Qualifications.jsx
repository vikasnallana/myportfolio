// Qualifications.jsx
import React, { useState } from "react";

const educationData = [
  {
    degree: "B.Tech in Computer Science(AIML)",
    institution:
      "Raghu Engineering College, Visakhapatnam, India",
    duration: "2022 - 2026",
  },
  {
    degree: "Intermediate PCM",
    institution: "Marikavalasa Saraswathi Bhavan Campus, Visakhapatnam, India",
    duration: "2020 - 2022",
  },
  {
    degree: "Secondary",
    institution: "Akshara The School Pathapatnam, India",
    duration: "2019 - 2020",
  },
];

const workData = [
  {
    title: "Virtual Internship",
    company: "Eduskills Foundation",
    duration: "June 2025-present",
  },

];

const Qualifications = () => {
  const [showEducation, setShowEducation] = useState(false);

  return (
    <div
      className="p-8 flex flex-col items-center bg-black rounded-md"
      data-aos="zoom-in-up"
    >
      <div className="flex space-x-4 mb-6">
        <button
          className={`px-4 py-2 rounded ${
            !showEducation
              ? "bg-white text-black"
              : "border-2 bg-transparent text-white"
          }`}
          onClick={() => setShowEducation(false)}
        >
          Work
        </button>
        <button
          className={`px-4 py-2 rounded ${
            showEducation
              ? "bg-white text-black"
              : "border-2 bg-transparent text-white"
          }`}
          onClick={() => setShowEducation(true)}
        >
          Education
        </button>
      </div>
      <div>
        {showEducation ? (
          <ul>
            {educationData.map((item, index) => (
              <li key={index} className="mb-6">
                <h2 className="text-xl font-semibold">{item.degree}</h2>
                <p className="text-gray-700">{item.institution}</p>
                <p className="text-gray-500">{item.duration}</p>
              </li>
            ))}
          </ul>
        ) : (
          <ul>
            {workData.map((item, index) => (
              <li key={index} className="mb-6">
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-700">{item.company}</p>
                <p className="text-gray-500">{item.duration}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Qualifications;
