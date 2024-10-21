import React from "react";

const GridLayout = ({ children }) => {
  return (
    <div className="relative grid grid-cols-[1fr_3fr] gap-4">{children}</div>
  );
};

export default GridLayout;
