import React from "react";
import "./NavigationBar.css";
import SearchIcon from "@mui/icons-material/Search";
import LanguageRoundedIcon from "@mui/icons-material/LanguageRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
const NavigationBar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Busca.." />
          <SearchIcon />
        </div>
        <div className="items">
          <div className="item">
            <LanguageRoundedIcon className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img src="https://picsum.photos/200" alt="" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
