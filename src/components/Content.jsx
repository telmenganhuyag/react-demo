import React from "react";

const Content = () => {
  return (
    <div className="content grid-rows-auto grid gap-4 bg-white pb-24 pt-[260px]">
      {/* Experience Section */}
      <div className="experience grid-rows-auto mb-3 grid gap-4">
        <div className="z-20 w-60 rounded-full border-2 border-[#103581] bg-[#103581] px-16 py-1 text-center text-white">
          Experience
        </div>
        <div className="exp-details pl-2">
          <h1 className="title font-semibold">Arrowwai Industries</h1>
          <h1 className="location font-semibold">Sydney - Australia</h1>
          <h1 className="date mb-1 font-semibold">2020 - 2022</h1>
          <p className="font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam
            augue.
          </p>
        </div>
        <div className="exp-details pl-2">
          <h1 className="title font-semibold">Wardiere Inc.</h1>
          <h1 className="location font-semibold">Sydney - Australia</h1>
          <h1 className="date mb-1 font-semibold">2016 - 2020</h1>
          <p className="font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam
            augue.
          </p>
        </div>
        <div className="exp-details pl-2">
          <h1 className="title font-semibold">Studio Showde</h1>
          <h1 className="location font-semibold">Sydney - Australia</h1>
          <h1 className="date mb-1 font-semibold">2010 - 2015</h1>
          <p className="font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam
            augue.
          </p>
        </div>
      </div>

      {/* Education Section */}
      <div className="education grid-rows-auto mb-2 grid gap-4">
        <div className="w-60 rounded-full border-2 border-[#103581] bg-[#103581] px-16 py-1 text-center text-white">
          Education
        </div>
        <div className="education-details pl-2">
          <h1 className="title font-semibold">Borcelle University</h1>
          <p className="font-medium">Bachelor of Business Management</p>
          <p className="font-medium">2014 - 2023</p>
        </div>
        <div className="education-details pl-2">
          <h1 className="title font-semibold">Borcelle University</h1>
          <p className="font-medium">Bachelor of Business Management</p>
          <p className="font-medium">2014 - 2018</p>
        </div>
      </div>

      {/* Skills Section */}
      <div className="skills grid-rows-auto grid gap-4">
        <div className="w-60 rounded-full border-2 border-[#103581] bg-[#103581] px-14 py-1 text-center text-white">
          Skills Summary
        </div>
        <div className="skills-details pl-2">
          <div className="flex">
            <p className="mb-3 mr-20 font-medium">Design Process</p>
            <div className="h-5 w-40 rounded-full text-white bg-blue-600 text-center">
              78 %
            </div>
          </div>
          <div className="flex">
            <p className="mb-3 mr-8 font-medium">Project Management</p>
            <div className="h-5 w-40 rounded-full text-white bg-blue-600 text-center">
              81 %
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
