import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // You can use react-icons for simplicity
import "../style/TopBar.css";
import ThemeToggleBut from '../theme/ThemeToggleBut';


const TopBar = () => { 
  return (
    <header className="top-menu-bar">
      <div className="header">Tomi Levi, Apps Development</div>

      <div className="menu-icons">
        <a href="mailto:tomil@hotmail.co.il" className="icon-item">
          <FaEnvelope />
        </a>
        <a href="https://www.linkedin.com/in/tomilevi" className="icon-item">
          <FaLinkedin />
        </a>
        <a href="https://github.com/tomil740" className="icon-item">
          <FaGithub />
        </a>

        {/* Theme Toggle Button */}
        <ThemeToggleBut />
      </div>
    </header>
  );
};

export default TopBar;
