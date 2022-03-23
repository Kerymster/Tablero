import React from "react";
import Sidebar from "../../components/aside/Sidebar";
import NavigationBar from "../../components/navbar/NavigationBar";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavigationBar />
        <div className="widgets"></div>
      </div>
    </div>
  );
};

export default Home;
