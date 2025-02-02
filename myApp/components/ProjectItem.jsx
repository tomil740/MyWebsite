import "../style/ProjectsSection.css";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa"; // For Live Demo
import { FaPhotoVideo } from "react-icons/fa"; // For Media

const ProjectItem = ({ project }) => {
  const platformIcons = {
    android: "📱 Android",
    ios: "🍏 iOS",
    web: "🌐 Web",
    embedded: "🔧 Embedded",
  };

  return (
    <div className="ProjectItem">
      <div className="ProjectImageWrapper">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="ProjectImage"
        />
      </div>
      <div className="ProjectContent">
        <h3 className="ProjectName">{project.name}</h3>
        <div className="ProjectPlatforms">
          {project.platforms.map((platform) => (
            <span key={platform} className="PlatformTag">
              {platformIcons[platform] || platform}
            </span>
          ))}
        </div>
        <p className="ProjectDescription">{project.description}</p>

        {project.isProduction && (
          <div className="ProductionBadge">✅</div> // Small production mark
        )}

        <div className="ProjectActions">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="ActionButton github"
            >
              <FaGithub className="Icon" />
              GitHub
            </a>
          )}
          {project.links.liveDemo && (
            <a
              href={project.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="ActionButton liveDemo"
            >
              <FaExternalLinkAlt className="Icon" />
              Live Demo
            </a>
          )}
          {project.links.media && (
            <a
              href={project.links.media}
              target="_blank"
              rel="noopener noreferrer"
              className="ActionButton media"
            >
              <FaPhotoVideo className="Icon" />
              Media
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
