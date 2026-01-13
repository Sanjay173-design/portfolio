import Reveal from "./Reveal";
import { motion } from "framer-motion";

const projects = [
  {
    title: "License Management System",
    desc: "Full-stack License Management System - Admin & User dashboards, license creation, assignment, activation, email notifications, logs, export reports, AWS deployment. MERN + AWS - role based access, DynamoDB, cloud infra. Note: Server Is Currently Turned off",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="container card">
      {/* 👇 EVERYTHING inside Reveal */}
      <Reveal>
        <h2 className="accent">Projects</h2>

        {projects.map((p) => (
          <motion.div
            key={p.title}
            className="card glow"
            style={{ marginTop: 16 }}
            whileHover={{ scale: 1.03 }}
          >
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <div style={{ display: "flex", gap: 10 }}>
              <a
                className="accent"
                href={
                  "https://github.com/Sanjay173-design/license-management-system"
                }
              >
                GitHub
              </a>
              <a className="accent" href={"13.61.94.101/register"}>
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </Reveal>
    </section>
  );
}
