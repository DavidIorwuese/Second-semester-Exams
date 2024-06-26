import { useState, useEffect } from "react";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { useLocation } from "react-router-dom";

const singleRepo = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const URL = `https://api.github.com/repos/${location.state.owner.login}/${location.state.name}`;
  let API_KEY = import.meta.env.VITE_MSG;
  useEffect(() => {
    axios({
      method: "get",
      url: URL,
      auth: API_KEY,
    }).then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Oval width="200" color="#fff" />
      </div>
    );
  }
  return (
    <div>
        <div className=" bg-[#242424] text-white h-screen pt-20 md:pt-24 items-center justify-center">
          <div className="flex flex-col items-center justify-center font-bold">
            <h1 className="mb-6 text-2xl">
              Repo by {location.state.owner.login}
            </h1>
            <img
              src={location.state.owner.avatar_url}
              title={location.state.owner.login}
              alt="Owner"
              className="rounded-2xl"
              width={100}
              height={100}
            />
            <h2 className="text-2xl font-bold text-white mt-5">
              {location.state.name}
            </h2>
            <div className="mt-3 p-3 text-center">
              <p>{location.state.description}</p>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p>Stars: {location.state.stargazers_count}</p>
            <p>Forks: {location.state.forks_count}</p>
            <p>Open Issues: {location.state.open_issues_count}</p>
            <p>
              last updated: {new Date(location.state.updated_at).toDateString()}
            </p>
            <div className="inline items-center justify-center">
              <div className="flex flex-col md:inline font-bold">
                <button className="mt-6 mx-2 py-2 md:px-12 px-9 rounded-xl bg-[#ffffff] text-[#1b1b1b] hover:bg-[#c0efff]">
                  <a
                    rel="canonical"
                    href={location.state.html_url}
                    target="_blank"
                  >
                    View on Github
                  </a>
                </button>
                <button className="mt-3 mx-2 py-2 md:px-12 px-9 rounded-xl bg-[#ffffff] text-[#1b1b1b] hover:bg-[#c0efff]">
                  <a rel="canonical" href="/">
                    Go Back
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default singleRepo;
