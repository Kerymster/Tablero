import React from "react";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Chart.css";
const Chart = () => {
  return (
    <div className="chart">
      <div className="top">
        <h1 className="title">Title</h1>
        <MoreVertOutlinedIcon />
      </div>
      <div className="bottom">
        <div className="progCard">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5} />
        </div>
        <p className="title">Total sales today</p>
        <p className="amount">$300</p>
        <p className="desc">Last payments may not be included</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <ArrowDownwardIcon fontSize="small" />
              <div className="resultAmount">$61.0k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <ArrowUpwardIcon fontSize="small" />
              <div className="resultAmount">$61.0k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult negative">
              <ArrowDownwardIcon fontSize="small" />
              <div className="resultAmount">$61.0k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
