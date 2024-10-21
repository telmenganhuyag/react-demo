import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="hero absolute top-16 z-30 flex h-[153px] w-full items-center gap-60 bg-[#103581] shadow-xl">
      <img
        src="src/assets/profile-pic.webp"
        alt="profile-pic"
        className="ml-40 h-52 w-52 rounded-full border-4 border-[#104181] object-cover"
      />
      <div className="flex flex-col text-white">
        <div className="text-6xl font-bold uppercase">
          Richard <br /> &nbsp;&nbsp;&nbsp;&nbsp;Sanchez
        </div>
        <p className="self-center font-light">Product Designer</p>
      </div>
      <div className="self-end ml-16 text-yellow-500">
          <Link to="/edit">Edit Profile</Link>
        </div>
    </div>
  );
};

export default Header;
