import React from "react";

const Content = ({ userInfo }) => {
  return (
    <div className="content grid-rows-auto grid gap-4 bg-white pb-24 pt-[260px]">
      {/* Experience Section */}
      <div className="experience grid-rows-auto mb-3 grid gap-4">
        <div className="z-20 w-60 rounded-full border-2 border-[#103581] bg-[#103581] px-16 py-1 text-center text-white">
          Experience
        </div>
        {userInfo.experiences.map((exp, index) => (
          <div key={index} className="exp-details pl-2">
            <h1 className="title font-semibold">{exp.company}</h1>
            <h1 className="location font-semibold">{exp.city} - {exp.country}</h1>
            <h1 className="date mb-1 font-semibold">{exp.from} - {exp.to}</h1>
            <p className="font-medium">
              {/* You can add a description field in the userInfo if needed */}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="education grid-rows-auto mb-2 grid gap-4">
        <div className="w-60 rounded-full border-2 border-[#103581] bg-[#103581] px-16 py-1 text-center text-white">
          Education
        </div>
        {userInfo.education.map((edu, index) => (
          <div key={index} className="education-details pl-2">
            <h1 className="title font-semibold">{edu.university}</h1>
            <p className="font-medium">{edu.career}</p>
            <p className="font-medium">{edu.from} - {edu.to}</p>
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="skills grid-rows-auto grid gap-4">
        <div className="w-60 rounded-full border-2 border-[#103581] bg-[#103581] px-14 py-1 text-center text-white">
          Skills Summary
        </div>
        <div className="skills-details pl-2">
          {userInfo.skillsSummary.map((skill, index) => (
            <div className="flex" key={index}>
              <p className="mb-3 mr-20 font-medium">{skill.skill}</p>
              <div className="h-5 w-40 rounded-full bg-blue-600 text-center text-white">
                {skill.level} %
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
