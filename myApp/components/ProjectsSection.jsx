import { useState } from "react";
import ProjectItem from "./ProjectItem";
import "../style/ProjectsSection.css";

const ProjectsSection = ({ projects }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const filteredProjects = selectedPlatform
    ? projects.filter((project) => project.platforms.includes(selectedPlatform))
    : projects;

  return (
    <section id="my-work-section" className="MyWorkSection">
      <h2 className="SectionTitle">My Work</h2>

      {/* Platform filter chips */}
      <div className="PlatformFilters">
        {["android", "web", "ios"].map((platform) => (
          <div
            key={platform}
            className={`PlatformChip ${
              selectedPlatform === platform ? "active" : ""
            }`}
            onClick={() =>
              setSelectedPlatform(
                selectedPlatform === platform ? null : platform
              )
            }
          >
            <div className="PlatformHeader">
              {platform.charAt(0).toUpperCase() + platform.slice(1)}
            </div>
            <div className="PlatformSubheader">
              {platform === "android" && "Native high-quality apps"}
              {platform === "web" && "Browser-based multiplatform solutions"}
              {platform === "ios" && "Native high-quality apps for iOS"}
            </div>
          </div>
        ))}
      </div>

      {/* Display filtered projects */}
      <div className="ProjectsContainer">
        {filteredProjects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
