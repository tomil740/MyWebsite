import "../style/mainPage.css"
import HeroSection from './HeroSrction';
import AboutMe from './AboutMe';
import ExtraDescription from './ExtraDescription';
import ProjectsSection from './ProjectsSection';

const MainPage = () => {
const projectList = [
  {
    name: "DeliveryGuyIncomeAnalyzer",
    description:
      "The Delivery Guy Analyzer app, available for iOS and Android, helps delivery workers track their performance and earnings efficiently. The MVP version is simple and clean, focusing on core functionality. The app offers adjustable time frames, a battery-efficient design, and a user-friendly interface for easy access to earnings and work efficiency data.",
    imageUrl:
      "https://gorgeous-entremet-c6e20e.netlify.app/oldPortfolio/assets/images/fullApp.png",
    platforms: ["android", "ios"],
    isProduction: true,
    links: {
      github: "https://github.com/mobile-app",
      media: "https://github.com/mobile-app",
    },
  },
  {
    name: "MilkFlow",
    description:
      "MilkFlow is a B2B platform for managing milk product demand and supply. Built with React.js and Firebase using MVVM architecture, it provides a scalable, mobile-first solution for seamless operations between customers and distributors. With features promoting collaboration and efficiency, the platform fosters a dynamic and connected ecosystem for the dairy industry.",
    imageUrl: "./images/MilkFlow2.png",
    platforms: ["web"],
    isProduction: true,
    links: {
      github: "https://github.com/tomil740/MilkFlow",
      liveDemo: "https://themilkflow.netlify.app/",
      media: "https://github.com/tomil740/MilkFlow",
    },
  },
  {
    name: "SmartHome",
    description:
      "Smart House 1.0 is a multiplatform app for iOS and Android, built with Firebase Kotlin and Compose. It enables real-time remote monitoring and control of the user's home, displaying key metrics like temperature and offering solutions for unusual situations, such as recommending to turn on the air conditioner if the temperature is too high.",
    imageUrl:
      "https://gorgeous-entremet-c6e20e.netlify.app/oldPortfolio/assets/images/smarthouse1.0.png",
    platforms: ["android", "ios"],
    isProduction: false,
    links: {
      github: "https://github.com/tomil740/SmartHome/tree/Version1",
      media: "https://github.com/tomil740/SmartHome/tree/Version1",
    },
  },
  {
    name: "TeachHub",
    description:
      "TeachHub is a collaborative service marketplace that bridges cultural gaps and promotes skill-sharing. Available across mobile, desktop, and web, it allows users to exchange services and expertise. The platform fosters cross-cultural collaboration with features like user matching, real-time communication, and virtual currency, creating a community of diversity, learning, and mutual understanding.",
    imageUrl: "./images/TeachHub.png",
    platforms: ["web"],
    isProduction: false,
    links: {
      github: "https://github.com/tomil740/TeachHub",
      liveDemo: "https://appleseeds-teachhub-project.vercel.app/",
      media: "https://github.com/tomil740/TeachHub",
    },
  },
];

  return (
    <div className="MainPage">
      <div className="MainContent">
        <HeroSection />
        <AboutMe />
      </div>
      <div>
        <ExtraDescription />
      </div>
      <div>
        <ProjectsSection projects={projectList} />
      </div>
    </div>
  );
};

export default MainPage;
