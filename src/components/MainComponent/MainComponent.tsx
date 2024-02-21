import React from "react";
import "./MainComponent.css";
import UserTable from "../Table/Table";
import SignUpsChart from "../BarChart/BarChart";
import useMainComponent from "../hooks/useMainComponent";
import useData from "../hooks/useData";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MainComponent: React.FC = () => {
    const { openNewPage } = useMainComponent()
  const data = useData()
  return (
    <div>
      <div className="sidebar">
        <a href="#news" className="sidebar-name">
          Jahkamso
        </a>
        <a href="#contact">Home</a>
        <a href="#home">
          <button className="mybtn" onClick={openNewPage}>
            Logout <i className="fas fa-sign-out-alt"></i>
          </button>
        </a>
      </div>

      <div className="content">
        <h1>Overview</h1>
        <div className="flex-container">
          <div>
            <p className="title">Total sales</p>
            <p className="amount">$200</p>
          </div>
          <div>
            <p className="title">New signups</p>
            <p className="amount">$10</p>
          </div>
          <div>
            <p className="title">Total members</p>
            <p className="amount">$120</p>
          </div>
        </div>
        <div className="chart-container">
          <SignUpsChart />
        </div>
        <div>
          <UserTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
