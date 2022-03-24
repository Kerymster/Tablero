import React, { useState } from "react";
import Sidebar from "../../components/aside/Sidebar";
import NavigationBar from "../../components/navbar/NavigationBar";
import SearchIcon from "@mui/icons-material/Search";
import "./Addnew.css";

const Addnew = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  console.log(file);
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <NavigationBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://via.placeholder.com/150"
              }
              alt="uploaded"
            />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image:
                  <SearchIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>
              {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
                </div>
              ))}

              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnew;
