export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <h2>Projects</h2>

        <div className="project-card">
          <h3>Trivia App</h3>
          <p>
            An interactive trivia application focused on clean UI, fast gameplay,
            and a smooth user experience. Built to be easily extensible, with planned
            improvements such as categories, scoring, and user authentication.
          </p>


          <div style={{ display: "flex", gap: "16px" }}>
            <a
              href="https://github.com/Nkany1/trivia"
              target="_blank"
              rel="noreferrer"
            >
              View Repository →
            </a>

            <a
              href="https://triviaaa-app.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
