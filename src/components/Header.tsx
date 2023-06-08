import React from "react";

const Header = () => {
  return (
    <>
      <div className="NAVBAR">
        <div className="first-cont">
          <h3>Edwin Rodriguez</h3>
        </div>
        <div className="section-cont">
          <ul>
            <li className="cc">HOME</li>
            <li className="cc">ABOUT</li>
            <li className="cc">SKILLS</li>
            <li className="cc">PROJECTS</li>
            <li className="cc">CONTACTS</li>
          </ul>
        </div>
        <div className="outline">
          <img className="profile" src={require("../assets/IMG_4871.jpg")}/>
        </div>
      </div>
    </>
  );
};

export default Header;
