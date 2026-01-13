import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="container card ">
      <Reveal>
        <h2 className="accent">Education</h2>

        {/* College */}
        <div className="edu-item edu-glow">
          <h3>Bachelor of Engineering (ECE)</h3>
          <p className="edu-place">
            VTU University – Proudhadevaraya Institute of Technology (PDIT),
            Hospet
          </p>
          <p className="edu-meta">
            CGPA: <strong>9.13</strong>
          </p>

          <div className="edu-metric">
            <div className="edu-metric-header">
              <span>CGPA</span>
              <span className="edu-score">9.13</span>
            </div>

            <div className="edu-bar">
              <div className="edu-bar-fill" style={{ width: "91%" }}></div>
            </div>
          </div>
        </div>

        {/* 12th */}
        <div className="edu-item edu-glow">
          <h3>Class XII</h3>
          <p className="edu-place">Vignan Independent PU College, Hospet</p>
          <p className="edu-meta">
            Percentage: <strong>87.68%</strong>
          </p>

          <div className="edu-metric">
            <div className="edu-metric-header">
              <span>Percentage</span>
              <span className="edu-score">87.68%</span>
            </div>

            <div className="edu-bar">
              <div className="edu-bar-fill" style={{ width: "88%" }}></div>
            </div>
          </div>
        </div>

        {/* 10th */}
        <div className="edu-item edu-glow">
          <h3>Class X</h3>
          <p className="edu-place">Little Flower Convent High School, Hospet</p>
          <p className="edu-meta">
            Percentage: <strong>87%</strong>
          </p>

          <div className="edu-metric">
            <div className="edu-metric-header">
              <span>Percentage</span>
              <span className="edu-score">87%</span>
            </div>

            <div className="edu-bar">
              <div className="edu-bar-fill" style={{ width: "87%" }}></div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
