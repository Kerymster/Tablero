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
        homeContainer
      </div>
    </div>
  );
};

export default Home;
