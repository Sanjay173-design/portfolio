import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(
        "https://tiidgnjell.execute-api.eu-north-1.amazonaws.com/dev/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (res.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      setStatus("Error sending message.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="container card"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* <h2 className="accent">Contact Me</h2>

        <motion.form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            maxWidth: 520,
          }}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <motion.input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />

          <motion.input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />

          <motion.input
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
            whileFocus={{ scale: 1.02 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          />

          <motion.button
            className="btn glow"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            Send Message
          </motion.button>
        </motion.form>

      {status && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{ marginTop: 8 }}
        >
          {status}
        </motion.p>
      )}
    </motion.section>
  );
} */}

      <div className="contact-layout">
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2 className="accent">Contact Me</h2>
          <p className="muted">
            Feel free to reach out for collaboration, opportunities.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <motion.form
          className="contact-form"
          onSubmit={handleSubmit}
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
        >
          <input
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            required
          />

          <button className="btn glow" type="submit">
            Send Message
          </button>

          {status && <p>{status}</p>}
        </motion.form>
      </div>
    </motion.section>
  );
}
