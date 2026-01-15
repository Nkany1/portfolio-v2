export default function Navbar() {
    return (
      <header style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
        <nav style={{ display: "flex", gap: "14px", alignItems: "center" }}>
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#technologies">Technologies</a>
          <a href="#certifications">Certs</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>
    );
  }
  