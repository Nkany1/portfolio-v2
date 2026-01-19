export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__inner">
        <h2>Contact</h2>
        <p>
          Interested in working together or want to learn more about my work?
          You can reach me here:
        </p>

        <div className="contact__links">
          <a
            href="https://www.linkedin.com/in/nkanyiso-mncwabe-68b74a104"
            target="_blank"
            rel="noreferrer"
            className="contact__link"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Nkany1"
            target="_blank"
            rel="noreferrer"
            className="contact__link"
          >
            GitHub
          </a>

          <a
            href="mailto:your-email@example.com"
            className="contact__link"
          >
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
