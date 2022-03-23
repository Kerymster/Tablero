import React from "react";
import "./Widgets.css";
import KeyboardControlKeyIcon from "@mui/icons-material/KeyboardControlKey";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import BalanceOutlinedIcon from "@mui/icons-material/BalanceOutlined";
const Widgets = ({ type }) => {
  let data;
  const amount = 100;
  const percentage = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See All Users",
        icon: (
          <PersonOutlineIcon
            className="icon"
            style={{ color: "white", backgroundColor: "#f05454" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View All Orders",
        icon: (
          <ShoppingBagOutlinedIcon
            className="icon"
            style={{ color: "white", backgroundColor: "#eab625" }}
          />
        ),
      };
      break;
    case "earning":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "View net earnings",
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ color: "white", backgroundColor: "#88e552" }}
          />
        ),
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See Details",
        icon: (
          <BalanceOutlinedIcon
            className="icon"
            style={{ color: "white", backgroundColor: "#30475E" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardControlKeyIcon />
          {percentage}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
