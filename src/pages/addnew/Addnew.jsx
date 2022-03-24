import React from "react";
import Sidebar from "../../components/aside/Sidebar";
import NavigationBar from "../../components/navbar/NavigationBar";
import "./Addnew.css";
const Addnew = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavigationBar />
        test
      </div>
    </div>
  );
};

export default Addnew;
