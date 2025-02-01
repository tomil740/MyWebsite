import "../style/mainPage.css"
import HeroSection from './HeroSrction';
import AboutMe from './AboutMe';
import ExtraDescription from './ExtraDescription';

const MainPage = () => {
  return (
    <div className="MainPage">
      <div className="MainContent">
        <HeroSection />
        <AboutMe />
      </div>
      <div>
        <ExtraDescription/>
      </div>
    </div>
  );
};

export default MainPage;
