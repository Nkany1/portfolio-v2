
"use client";


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




import { useState } from "react";

export default function Certifications() {
  const [showAll, setShowAll] = useState(false);

  const visibleCerts = showAll
    ? certifications
    : certifications.slice(0, 2);

  return (
    <section id="certifications" className="certs">
      <div className="certs__inner">
        <h2>Certifications</h2>

        <div className="certs__list">
          {visibleCerts.map((cert) => (
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

        {certifications.length > 2 && (
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