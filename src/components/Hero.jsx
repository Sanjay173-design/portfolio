import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <motion.section
      id="home"
      className="container hero"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="hero-content">
        {/* LEFT SIDE */}
        <div className="hero-text">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="accent">HN Sanjay</span>
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            Full-Stack Developer • Cloud Enthusiast
          </motion.h3>

          <motion.p
            className="muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            I build scalable, cloud-ready applications using MERN, AWS and
            modern frontend tooling — DevOps Engineer in progress and sometimes
            a YouTuber.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <a href="/HN-Sanjay.pdf" download className="btn glow">
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE (IMAGE) */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <img src={profileImg} alt="HN Sanjay" />
        </motion.div>
      </div>
    </motion.section>
  );
}
