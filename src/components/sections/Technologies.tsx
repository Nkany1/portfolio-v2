const techStack = [
  "Linux",
  "Git & GitHub",
  "Docker (learning)",
  "CI/CD (learning)",
  "Azure (learning)",
  "SQL",
  "Next.js",
  "TypeScript",
  "REST APIs",
];

export default function Technologies() {
  return (
    <section id="technologies" className="tech">
      <div className="tech__inner">
        <h2>Tech Stack</h2>
        <p>Tools, platforms, and technologies I use in my day-to-day work.</p>

        <div className="tech__grid">
          {techStack.map((item) => (
            <span key={item} className="tech__tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
