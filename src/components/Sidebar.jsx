import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Sidebar = ({ userInfo }) => {
  return (
    <div className="sidebar z-20 ml-20 h-full bg-black px-16 text-white shadow-xl">
      <div className="sidebar-details flex flex-col gap-5 pb-16 pt-[260px]">
        <h1 className="self-center text-2xl">About Me</h1>
        <p className="mb-3 text-center text-sm">{userInfo.description}</p>
        <div className="mb-3 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaPhone />
            {userInfo.phoneNumber}
          </div>
          <div className="flex items-center gap-2">
            <MdEmail />
            {userInfo.email}
          </div>
          <div className="flex items-center gap-2">
            <FaLocationDot />
            {userInfo.location}
          </div>
        </div>
        <div className="-mb-2 rounded-full border-2 border-sky-600 px-20 py-1">
          Language
        </div>
        <ul className="ml-12 list-disc pb-1">
          {userInfo.languages.map((lang, index) => (
            <li key={index}>{lang}</li>
          ))}
        </ul>
        <div className="-mb-2 rounded-full border-2 border-sky-600 px-20 py-1">
          Expertise
        </div>
        <ul className="ml-12 list-disc">
          {userInfo.expertise.map((exp, index) => (
            <li key={index}>{exp}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
