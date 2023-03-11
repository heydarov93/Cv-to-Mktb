import React from "react";

class Contacts extends React.Component {
  render() {
    return (
      <div className="Contacts__Container">
        <h3>Contacts</h3>
        <ul>
          <li>
            Tel: <span>(+994)55 779 50 99</span>
          </li>
          <li>
            Mail: <span>heyderov.yashar@mail.ru</span>
          </li>
        </ul>
      </div>
    );
  }
}

export default Contacts;
