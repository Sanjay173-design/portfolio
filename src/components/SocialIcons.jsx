import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div
      className="social-container"
      style={{
        position: "fixed",
        left: 24,
        bottom: 24,
        display: "flex",
        flexDirection: "column",
        gap: 14,
        zIndex: 100,
      }}
    >
      <a
        href="https://github.com/Sanjay173-design"
        target="_blank"
        rel="noreferrer"
        className="social glow"
      >
        <FaGithub size={22} />
      </a>

      <a
        href="https://www.linkedin.com/in/hn-sanjay"
        target="_blank"
        rel="noreferrer"
        className="social glow"
      >
        <FaLinkedin size={22} />
      </a>
    </div>
  );
}
