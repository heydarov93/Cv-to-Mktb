import React from "react";
import "./style.css";

class PersonalInfo extends React.Component {
  render() {
    return (
      <div className="PersonalInfo__Container">
        <h3>Personal Info</h3>
        <ul>
          <li>
            Ad: <span>Yaşar</span>
          </li>
          <li>
            Yaşar: <span>29</span>
          </li>
          <li>
            Ünvan: <span>Bakı, Xəzər, Mərdəkan</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default PersonalInfo;
