import React from "react";

const Link = ({ to, Icon }) => {
  return (
    <a
      href={to}
      className="h-[64px] w-[64px] flex items-center justify-center bg-white border border-theme-gray-300 rounded-[19px]"
    >
      <Icon size={24} color="#13143C" />
    </a>
  );
};

export default Link;
