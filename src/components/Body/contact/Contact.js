import React from "react";
import { SocialData } from "./socialContact";
import "./socialContact.css";

function Contact() {
  const data = SocialData;
  return (
    <div className="social-contacts">
      <div className="social-contact">
        {data.map((item) => {
          return (
            <a href={item.link} target="_blank">
              <div className="social-icon-div">
                <img src={item.icon} className="social-icon" />
              </div>
            </a>
          );
        })}
      </div>
      <div className="download">
        <a
          href="hhh"
          target="_blank"
        >
          <i class="fi-rr-cloud-download download-icon" />
          <span className="resume">Resume</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
