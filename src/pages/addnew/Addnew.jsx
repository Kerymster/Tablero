import React from "react";
import Sidebar from "../../components/aside/Sidebar";
import NavigationBar from "../../components/navbar/NavigationBar";
import SearchIcon from "@mui/icons-material/Search";

import "./Addnew.css";
const Addnew = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavigationBar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https://via.placeholder.com/150" alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <SearchIcon className="icon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <div className="formInput">
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Half-blood_prince" />
              </div>
              <div className="formInput">
                <label htmlFor="">Name & Surname</label>
                <input type="text" placeholder="Severus Snape" />
              </div>
              <div className="formInput">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="s.snape@hogwarts.edu" />
              </div>
              <div className="formInput">
                <label htmlFor="">Phone</label>
                <input type="text" placeholder="+1 234 567 8990" />
              </div>
              <div className="formInput">
                <label htmlFor="">Password</label>
                <input type="text" />
              </div>
              <div className="formInput">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  placeholder="Hogwarts school of wizardary & witchcraft"
                />
              </div>
              <div className="formInput">
                <label htmlFor="">Country</label>
                <input type="text" placeholder="U.S.A" />
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnew;
