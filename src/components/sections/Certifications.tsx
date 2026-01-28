export default function Certifications() {
  return (
    <section id="certifications" className="certs">
      <div className="certs__inner">
        <h2>Certifications</h2>

        <div className="certs__list">
          <div className="cert-card">
            <h3>Bash Mastery: The Complete Guide to Bash Shell Scripting</h3>
            <p>Completed via LinkedIn Learning — command-line scripting and automation.</p>

            <div className="cert-actions">
              <span className="cert-issuer">Issuer: LinkedIn Learning</span>
              <a
                className="cert-pdf"
                href="/certs/bash_nkanyiso.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View as PDF
              </a>
            </div>
          </div>

          <div className="cert-card">
            <h3>The Complete Oracle APEX Fundamentals Course</h3>
            <p>Completed via LinkedIn Learning — Oracle APEX fundamentals.</p>

            <div className="cert-actions">
              <span className="cert-issuer">Issuer: LinkedIn Learning</span>
              <a
                className="cert-pdf"
                href="/certs/oracle_apex_Nkanyiso.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View as PDF
              </a>
            </div>
          </div>

          <div className="cert-card">
            <h3>Microsoft Excel – Excel from Beginner to Advanced</h3>
            <p>Completed via LinkedIn Learning — Excel functions and data analysis.</p>

            <div className="cert-actions">
              <span className="cert-issuer">Issuer: LinkedIn Learning</span>
              <a
                className="cert-pdf"
                href="/certs/Excel_nkanyiso.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View as PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
