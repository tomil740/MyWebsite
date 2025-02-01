import { FaGithub, FaLinkedin, FaEnvelope, FaMedium } from "react-icons/fa"; // Import icons
import "../style/HeroSection.css"

const HeroSection = () => (
  <div className="ProfileBox">
    <img
      className="ProfileImg"
      src="/images/profileImg.JPG"
      alt="Tomi Levi's profile picture"
    />
    <div className="ProfileTextBox">
      <h1>Tomi Levi</h1>
      <div className="BrakeLine"></div>
      <p className="SubText">
        Full Stack Developer | Bringing your ideas to life with tailored,
        scalable solutions
      </p>
    </div>
    <div className="ProfileIcons">
      <a
        href="https://github.com/tomil740"
        className="IconItem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={30} />
      </a>
      <a
        href="https://www.linkedin.com/in/tomilevi"
        className="IconItem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={30} />
      </a>
      <a href="mailto:tomil@hotmail.co.il" className="IconItem">
        <FaEnvelope size={30} />
      </a>
      <a
        href="https://medium.com/@tomil0535264486"
        className="IconItem"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaMedium size={30} />
      </a>
    </div>
  </div>
);

export default HeroSection;
