import React from "react";
import { FiLinkedin } from "react-icons/fi";
import { LuGithub } from "react-icons/lu";
import { RxTwitterLogo } from "react-icons/rx";

const MiddleSection = () => {
  return (
    <>
      <section id="home">
        <div className="socials">
            <div className="inside">
          <div>
            <a href="https://www.linkedin.com/in/edwin-rodriguez-fullstack/">
            <FiLinkedin color="white" size='30px'/>
            </a>
          </div>
          <div>
            <a href="https://github.com/EdwinCodes9">
            <LuGithub color="white" size='30px'/>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/code_9e?s=11">
            <RxTwitterLogo color="white" size='30px'/>
            </a>
          </div>
          </div>
        </div>
        <div className="home">
        <div className="name"><h1>Edwin Rodriguez</h1></div>
          <div className="lineup">
            <div className="line"></div>
            <div className="space"></div>
            <h2>Software Engineer</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddleSection;
