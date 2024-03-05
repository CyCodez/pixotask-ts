import React from "react";
import "./main-component.css";
import UserTable from "../Table/table";
import SignUpsChart from "../BarChart/bar-chart";
import useMainComponent from "../Hooks/use-main-component";
import useData from "../Hooks/use-data";
import "@fortawesome/fontawesome-free/css/all.min.css";

const MainComponent: React.FC = (): JSX.Element => {
  const { openNewPage } = useMainComponent();
  const data = useData();
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
