import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="sidebar z-20 ml-20 h-full bg-black px-16 text-white shadow-xl">
      <div className="sidebar-details flex flex-col gap-5 pb-16 pt-[260px]">
        <h1 className="self-center text-2xl">About Me</h1>
        <p className="mb-3 text-center text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          sit amet quam rhoncus, egestas dui eget, malesuada justo. Ut aliquam
          augue dui.
        </p>
        <div className="mb-3 flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <a href="#">
              <FaPhone />
            </a>
            +123-456-7890
          </div>
          <div className="flex items-center gap-2">
            <a href="#">
              <MdEmail />
            </a>
            hello@reallygreatsite.com
          </div>
          <div className="flex items-center gap-2">
            <a href="#">
              <FaLocationDot />
            </a>
            123 Anywhere St., Any City
          </div>
        </div>
        <div className="-mb-2 rounded-full border-2 border-sky-600 px-20 py-1">
          Language
        </div>
        <ul className="ml-12 list-disc pb-1">
          <li>English</li>
          <li>German</li>
          <li>Spain</li>
        </ul>
        <div className="-mb-2 rounded-full border-2 border-sky-600 px-20 py-1">
          Expertise
        </div>
        <ul className="ml-12 list-disc">
          <li>Management</li>
          <li>Creativity</li>
          <li>Digital Marketing</li>
          <li>Negotiation</li>
          <li>Critical Thinking</li>
          <li>Leadership</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
