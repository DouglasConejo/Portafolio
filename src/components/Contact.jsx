import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const contactEmail = "douglas.conejo2002@gmail.com";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState("");
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSendError("");
    setSent(false);

    try {
      await emailjs.send(
        "service_3i6glkj",
        "template_sl19frk",
        {
          form_name: form.name,
          to_name: "Douglas",
          from_email: form.email,
          to_email: contactEmail,
          message: form.message,
        },
        "6e5jJVlV_cUgq9MOa"
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS contact form failed:", error);
      setSendError(error?.text || error?.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  const emailFallback = `mailto:${contactEmail}?subject=${encodeURIComponent(
    `Portfolio contact from ${form.name}`
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )}`;

  return (
    <div
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary4 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary4 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary4 py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="bg-tertiary4 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
          {sent && (
            <p role="status" className="text-green-400">
              Thanks! Your message has been sent.
            </p>
          )}
          {sendError && (
            <div role="alert" className="text-secondary">
              <p>
                The form couldn't send your message. The link opens an email
                draft; review it and press Send in your email app.
              </p>
              <a className="text-white underline" href={emailFallback}>
                Open an email draft
              </a>
              <p className="mt-2">
                Or email me directly at{" "}
                <a className="text-white underline" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
                .
              </p>
              {import.meta.env.DEV && (
                <p className="mt-2 text-sm">EmailJS error: {sendError}</p>
              )}
            </div>
          )}
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
