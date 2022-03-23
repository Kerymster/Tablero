import React from "react";
import Sidebar from "../../components/aside/Sidebar";
import NavigationBar from "../../components/navbar/NavigationBar";
import Widgets from "../../components/widgets/Widgets";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <NavigationBar />
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
      </div>
    </div>
  );
};

export default Home;
