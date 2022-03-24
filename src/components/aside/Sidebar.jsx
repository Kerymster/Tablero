import React from "react";
import "./Sidebar.css";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ProductionQuantityLimitsRoundedIcon from "@mui/icons-material/ProductionQuantityLimitsRounded";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import NotificationsActiveOutlinedIcon from "@mui/icons-material/NotificationsActiveOutlined";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import FaceOutlinedIcon from "@mui/icons-material/FaceOutlined";
import MeetingRoomOutlinedIcon from "@mui/icons-material/MeetingRoomOutlined";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="section-top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="logo-name">TABLERO</div>
        </Link>
      </div>

      <div className="section-mid">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon" /> <span>Dashboard</span>
          </li>
          <p className="title">LISTS</p>
          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" /> <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <li>
              <ProductionQuantityLimitsRoundedIcon className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <BorderColorOutlinedIcon className="icon" /> <span>Orders</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon className="icon" /> <span>Delivery</span>
          </li>
          <p className="title">USEFUL </p>
          <li>
            <QueryStatsIcon className="icon" /> <span>Stats</span>
          </li>
          <li>
            <NotificationsActiveOutlinedIcon className="icon" />{" "}
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <FitnessCenterRoundedIcon className="icon" />{" "}
            <span>System Health</span>
          </li>
          <li>
            <SettingsIcon className="icon" /> <span>Setting</span>
          </li>
          <p className="title">USER</p>
          <li>
            <FaceOutlinedIcon className="icon" /> <span>Profile</span>
          </li>
          <li>
            <MeetingRoomOutlinedIcon className="icon" /> <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="section-bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default Sidebar;
