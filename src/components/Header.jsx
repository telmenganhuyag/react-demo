import React from "react";
import { Link } from "react-router-dom";

const Header = ({ userInfo }) => {
  return (
    <div className="hero absolute top-16 z-30 flex h-[153px] w-full items-center gap-60 bg-[#103581] shadow-xl">
      <img
        src={userInfo.profilePicUrl}      
        alt="profile-pic"
        className="ml-40 h-52 w-52 rounded-full border-4 border-[#104181] object-cover"
      />
      <div className="flex flex-col text-white">
        <div className="text-6xl font-bold uppercase">
          {userInfo.name.split(" ")[0]} <br /> &nbsp;&nbsp;&nbsp;&nbsp;
          {userInfo.name.split(" ")[1]}
        </div>
        <p className="self-center font-light">{userInfo.title}</p>
      </div>
      <div className="ml-16 self-end text-yellow-500">
        <Link to="edit">Edit Profile</Link>
      </div>
    </div>
  );
};

export default Header;
