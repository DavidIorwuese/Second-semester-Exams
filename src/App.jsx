import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Repo from "./Pages/repo";
import RepoId from "./Pages/repoId";
import Page404 from "./Pages/page404";
import Navbar from "./Components/navBar";
import "./index.css";

const App = () => {
  return (
    <>
      <div className="bg-[#242424] text-white flex min-h-screen flex-col">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repo/:user" element={<Repo />} />
            <Route path="/repo/:user/:repoId" element={<RepoId />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
      </div>
    </>
  );
};

export default App;
