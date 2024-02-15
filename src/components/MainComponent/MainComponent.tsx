import React from "react";
import "./MainComponent.css";
import UserTable from "../Table/Table";
import SignUpsChart from "../BarChart/BarChart";
import { useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";


const MainComponent: React.FC = () => {
    const navigate = useNavigate()
  const openNewPage = () => {
    navigate("/")
  };

  const data = [
    {
      businessName: "cta media concepts",
      name: "taiwo adebayo",
      phone: "wa.me/+2347033618481",
      signedUp: "7 hours ago",
    },
    {
      businessName: "teddy kivisi",
      name: "teddy kivisi",
      phone: "wa.me/+97433562179",
      signedUp: "9 hours ago",
    },
    {
      businessName: "aferuan franklin",
      name: "aferuan franklin",
      phone: "wa.me/+2349059808172",
      signedUp: "18 hours ago",
    },
    {
      businessName: "2fro studios",
      name: "mukhtar nasir amin",
      phone: "wa.me/+2349035820671",
      signedUp: "20 hours ago",
    },
    {
      businessName: "debopixels",
      name: "debo adebowale",
      phone: "wa.me/+2349016490565",
      signedUp: "22 hours ago",
    },
    {
      businessName: "vkconcept",
      name: "williams victor",
      phone: "wa.me/+2348176860084",
      signedUp: "29 hours ago",
    },
    {
      businessName: "robby studios",
      name: "robson eliud",
      phone: "wa.me/+255742943755",
      signedUp: "37 hours ago",
    },
    {
      businessName: "mo_stores_n_essentials",
      name: "mo_stores_n_essentials ",
      phone: "wa.me/+2347031857131",
      signedUp: "39 hours ago",
    },
    {
      businessName: "val studios",
      name: "golu chukwunonso success",
      phone: "wa.me/+2347062586804",
      signedUp: "39 hours ago",
    },
    {
      businessName: "favour cartel",
      name: "chukwu favour ogochukwu",
      phone: "wa.me/+2349065099828",
      signedUp: "40 hours ago",
    },
  ];

  return (
    <div>
      <div className="sidebar">
        <a href="#news" className="sidebar-name">
          Jahkamso
        </a>
        <a href="#contact">Home</a>
        <a href="">
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
