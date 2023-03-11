import React from "react";
import PersonalInfo from "../PersonalInfo";
import Experience from "../Experience";
import Contacts from "../Contacts";
import "./style.css";

class UserCv extends React.Component {
  render() {
    return (
      <div className="UserCv">
        <h2>Cv to MKTB</h2>
        <PersonalInfo />
        <Experience />
        <Contacts />
      </div>
    );
  }
}

export default UserCv;
