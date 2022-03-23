import React from "react";
import Sidebar from "../../components/aside/Sidebar";
import NavigationBar from "../../components/navbar/NavigationBar";
import Datatable from "../../components/datatable/Datatable";
import "./Datalist.css";
const Datalist = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <NavigationBar />
        <Datatable />
      </div>
    </div>
  );
};

export default Datalist;
