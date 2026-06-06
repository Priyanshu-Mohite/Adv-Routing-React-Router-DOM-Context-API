import React from "react";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();

  let Handle = () => {
    navigate("/");
  };

  let Handle2 = () => {
    navigate(-1);
  };

  return (
    <div>
      <h1>About Page</h1>

      <button
        onClick={Handle}
        className="bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active: scale-95"
      >
        Return To Home Page
      </button>

      <button
        onClick={Handle2}
        className="bg-red-400 px-5 py-2 rounded m-2 cursor-pointer active: scale-95"
      >
        Back
      </button>
    </div>
  );
};

export default About;
