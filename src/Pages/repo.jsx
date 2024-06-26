import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import Paginate from "../Components/paginate";

const ListOfRepos = () => {
  const location = useLocation();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const URL = `https://api.github.com/users/${location.state.user.repos[0].login}/repos`;
  let API_KEY = import.meta.env.VITE_MSG;

  useEffect(() => {
    axios({
      method: "get",
      url: URL,
      auth: API_KEY,
    }).then((response) => {
      setRepos(response.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen">
          <Oval width="200" color="#fff" />
        </div>
      </>
    );
  }
  return (
    <>
        <div className="main">
          <Paginate data={repos} />
        </div>
    </>
  );
};

export default ListOfRepos;
