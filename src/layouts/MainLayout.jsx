import React from "react";

import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="bg-neutral-600/95 px-64">
      <div className="min-h-screen bg-white"><Outlet /></div>
      
    </div>
  );
};

export default MainLayout;
