import React from "react";

const Header = () => {
  return (
    <div className="fixed z-50 w-screen bg-slate-500 p-6 px-16">
      <div className="hidden md:flex w-full h-full bg-red-500 p-4"></div>
      <div className="flex md:hidden w-full h-full bg-yellow-200 p-4"></div>
    </div>
  );
};

export default Header;
