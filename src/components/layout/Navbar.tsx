export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a href="#home" className="navbar__brand">
          Nkanyiso
        </a>

        <nav className="navbar__links">
          <a href="#projects">Projects</a>
          <a href="#technologies">Tech Stack</a>
          <a href="#certifications">Certifications</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}
