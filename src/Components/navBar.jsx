import React, { useState } from "react";
import { Link } from "react-router-dom";

const navBar = (props) => {

  return (
    <nav className="fixed w-full h-16 bg-[#1b1b1b] z-[90] top-0">
      <div
        className="flex justify-between items-center w-full h-full px-4 2xl:px-16 text-white shadow-sm font-mono"
        role="navigation"
      >
        <Link to="/" className="font-bold text-lg">
          Github Repos
        </Link>

      </div>

    </nav>
  );
};

export default navBar;
