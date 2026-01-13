import Reveal from "./Reveal";
const skills = [
  "React",
  "Node.js",
  "MongoDB",
  "Express.js",
  "AWS",
  "Git",
  "GitLab",
  "Docker",
  "TailwindCSS",
  "Figma",
  "Nginx",
  "Python",
  "Redux",
  "Ant-Design",
  "Vercel",
  "Netlify",
  "Bootstrap",
  "Postman",
  "Pandas",
  "NumPy",
  "Jest & SuperTest",
  "Power Bi",
  "JavaScript",
];

export default function Skills() {
  return (
    <section id="skills" className="container card">
      <Reveal>
        <h2 className="accent">Skills</h2>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          {skills.map((s) => (
            <div key={s} className="card skill" style={{ padding: "8px 14px" }}>
              {s}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
