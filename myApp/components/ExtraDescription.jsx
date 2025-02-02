import React from "react";
import "../style/AboutMe.css";

const ExtraDescription = () => {
  return (
    <section id="extra-description" className="ExtraDescriptionSection">
      <div className="ExtraDescriptionTextBox">
        <h2 className="Header">What I Do Best</h2>
        <p className="Paragraph1">
          I build solutions that work — from mobile apps to web platforms and
          beyond. Here's what I can offer:
        </p>
        <div className="subList">
          <ul>
            <li>
              📱 <strong>Mobile Development</strong>: Expertise in native
              Android and Kotlin Multiplatform (KMP) to build fast, reliable
              apps for both Android and iOS.
            </li>
            <li>
              🌐 <strong>Web Development</strong>: Full-stack solutions using
              React.js, TypeScript, and backend technologies to deliver
              seamless, scalable web apps.
            </li>
            <li>
              🤖 <strong>Embedded Systems</strong>: Experience with Arduino and
              IoT to integrate hardware with software for innovative solutions.
            </li>
            <li>
              🔧 <strong>Tailored Solutions</strong>: I analyze each project to
              choose the most fitting technology stack, ensuring performance,
              scalability, and reliability.
            </li>
          </ul>
        </div>
        <div className="ActionButtonsRow"> 
          <a href="#my-work-section" className="ActionButton">
            My Work
          </a>
          <a href="mailto:tomil@hotmail.co.il" className="ActionButton">
            Let’s Start
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExtraDescription;
