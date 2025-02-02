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
    imageUrl:
      "https://private-user-images.githubusercontent.com/126959122/408875790-e72d85ab-7aee-4ab0-82de-5603f4ea7c3e.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg1MDkxNDgsIm5iZiI6MTczODUwODg0OCwicGF0aCI6Ii8xMjY5NTkxMjIvNDA4ODc1NzkwLWU3MmQ4NWFiLTdhZWUtNGFiMC04MmRlLTU2MDNmNGVhN2MzZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIwMlQxNTA3MjhaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT03NzQzYTNjMDQ3OGMxMmQ4MTNiNjVkMTYzM2FkZWU3NjA4ZmVmZjlkNDc5YTM0Nzk4NzkyZmJhOWY2MGFiYzk4JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.gDOJQnQd6qI_3f1hoNhBb8K8AVrttdFHIQ9N-4rXZ-4",
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
      liveDemo: "https://github.com/tomil740/SmartHome/tree/Version1",
      media: "https://github.com/tomil740/SmartHome/tree/Version1",
    },
  },
  {
    name: "TeachHub",
    description:
      "TeachHub is a collaborative service marketplace that bridges cultural gaps and promotes skill-sharing. Available across mobile, desktop, and web, it allows users to exchange services and expertise. The platform fosters cross-cultural collaboration with features like user matching, real-time communication, and virtual currency, creating a community of diversity, learning, and mutual understanding.",
    imageUrl:
      "https://private-user-images.githubusercontent.com/126959122/401215900-436b8dba-233c-4d95-bb86-0b923bae5c8c.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3Mzg0ODk2NDcsIm5iZiI6MTczODQ4OTM0NywicGF0aCI6Ii8xMjY5NTkxMjIvNDAxMjE1OTAwLTQzNmI4ZGJhLTIzM2MtNGQ5NS1iYjg2LTBiOTIzYmFlNWM4Yy5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjAyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIwMlQwOTQyMjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT00NWZkMTIyYmNhODM2NjUyZDAwOGIzZGQ0NzgzYjdlN2JjOWM3ZGVlYTM3MmU2MWFhMjk1MjlmODA0YzQ1OTk5JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.po9L9F-m6XbuBdBCUreccJ5vmOzEfXqGJLSLR-GlIoM",
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
