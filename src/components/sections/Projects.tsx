"use client";

import { useState } from "react";

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
      "An interactive trivia application focused on clean UI and fast gameplay.",
    repoUrl: "https://github.com/Nkany1/trivia",
    liveUrl: "https://triviaaa-app.netlify.app/",
  },

  {
    name: "Portfolio App",
    description:
      "An interactive trivia application focused on clean UI and fast gameplay.",
    repoUrl: "https://github.com/Nkany1/trivia",
    liveUrl: "https://triviaaa-app.netlify.app/",
  },

  {
    name: "BET App",
    description:
      "An interactive trivia application focused on clean UI and fast gameplay.",
    repoUrl: "https://github.com/Nkany1/trivia",
    liveUrl: "https://triviaaa-app.netlify.app/",
  },
  // Add future projects here
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 1);

  return (
    <section id="projects" className="projects">
      <div className="projects__inner">
        <h2>Projects</h2>

        <div className="projects__grid">
          {visibleProjects.map((p) => (
            <div className="project-card" key={p.name}>
              <h3>{p.name}</h3>
              <p>{p.description}</p>

              <div className="project-actions">
                <a href={p.repoUrl} target="_blank" rel="noreferrer">
                  Repository →
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

        {projects.length > 1 && (
          <button
            className="toggle-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        )}
      </div>
    </section>
  );
}