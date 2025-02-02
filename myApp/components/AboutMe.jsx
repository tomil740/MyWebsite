import "../style/AboutMe.css"

const AboutMe = () => {
  return (
    <section className="AboutMeSection">
      <div className="AboutMeTextBox">
        <h1 className="Header">Hi, I’m Tomi – a Full Stack Developer! 👋</h1>
        <p className="Paragraph1">
          I specialize in building production-ready mobile and web applications,
          taking projects from concept to completion with a focus on quality and
          innovation. My journey as a developer is driven by passion and a
          commitment to delivering impactful solutions. Whether it's building
          seamless web platforms or crafting robust mobile apps, I turn ideas
          into reality.
        </p>
        <p className="CallToAction">
          Ready to explore my work or learn what I do best? Let’s connect and
          create something amazing together!
        </p>
        <div className="ActionButtonsRow">
          <a href="#my-work-section" className="ActionButton">
            My Work
          </a>
          <a href="#extra-description" className="ActionButton">
            What I Do Best
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
