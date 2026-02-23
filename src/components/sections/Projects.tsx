type Project = {
  name: string;
  description: string;
  repoUrl: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    name: "Trivia App",
    description:
      "An interactive trivia application focused on clean UI, fast gameplay, and a smooth user experience. Built to be easily extensible, with planned improvements such as categories, scoring, and user authentication.",
    repoUrl: "https://github.com/Nkany1/trivia",
    liveUrl: "https://triviaaa-app.netlify.app/",
  },

  {
    name: "Portfolio",
    description:
      "An interactive trivia application focused on clean UI, fast gameplay, and a smooth user experience. Built to be easily extensible, with planned improvements such as categories, scoring, and user authentication.",
    repoUrl: "https://github.com/Nkany1/trivia",
    liveUrl: "https://triviaaa-app.netlify.app/",
  },

  {
    name: "Bet App",
    description:
      "An interactive trivia application focused on clean UI, fast gameplay, and a smooth user experience. Built to be easily extensible, with planned improvements such as categories, scoring, and user authentication.",
    repoUrl: "https://github.com/Nkany1/trivia",
    liveUrl: "https://triviaaa-app.netlify.app/",
  },

];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <h2>Projects</h2>

        <div className="projects__grid">
          {projects.map((p) => (
            <div className="project-card" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>

              <div className="project-actions">
                <a href={p.repoUrl} target="_blank" rel="noreferrer">
                  View Repository →
                </a>

                {p.liveUrl && (
                  <a href={p.liveUrl} target="_blank" rel="noreferrer">
                    Live Demo →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}