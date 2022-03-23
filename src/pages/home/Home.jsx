import React from "react";
import Sidebar from "../../components/aside/Sidebar";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">Content</div>
    </div>
  );
};

export default Home;
