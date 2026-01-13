import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function BottomNav() {
  return (
    <footer className="bottom-nav">
      <h3>HN Sanjay</h3>
      <p className="role">Full-Stack Developer</p>

      <div className="bottom-icons">
        <a
          href="https://github.com/YOUR_GITHUB"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/YOUR_LINKEDIN"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a href="mailto:YOUR_EMAIL@gmail.com">
          <FaEnvelope />
        </a>
      </div>

      <small>
        © {new Date().getFullYear()} HN Sanjay. All rights reserved.
      </small>
    </footer>
  );
}
