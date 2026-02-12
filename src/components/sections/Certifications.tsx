

const certifications = [
  {
    title: "Bash Mastery: The Complete Guide to Bash Shell Scripting",
    issuer: "LinkedIn Learning",
    pdf: "/certs/Bash_nkanyiso.pdf",
  },
  {
    title: "The Complete Oracle APEX Fundamentals Course",
    issuer: "LinkedIn Learning",
    pdf: "/certs/oracle_apex_Nkanyiso.pdf",
  },
  {
    title: "Microsoft Excel – Excel from Beginner to Advanced",
    issuer: "LinkedIn Learning",
    pdf: "/certs/Excel_nkanyiso.pdf",
  },
];


export default function Certifications() {
  return (
    <section id="certifications" className="certs">
      <div className="certs__inner">
        <h2>Certifications</h2>

        <div className="certs__list">
          {certifications.map((cert) => (
            <div className="cert-card" key={cert.title}>
              <h3>{cert.title}</h3>
              <p>Issuer: {cert.issuer}</p>

              <a
                className="cert-pdf"
                href={cert.pdf}
                target="_blank"
                rel="noreferrer"
              >
                View as PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
