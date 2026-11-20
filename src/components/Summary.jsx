import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const competencies = [
  "Engineering & technical analysis",
  "Software quality & validation",
  "Requirements & workflow validation",
  "Risk & issue identification",
  "Change impact analysis",
  "Data consistency & API validation",
  "Automated testing & verification",
  "Root cause analysis",
  "Process & continuous improvement",
  "SDLC, Agile & Scrum",
  "Cross-functional collaboration",
  "Technical documentation",
  "Quality & reliability",
];

const Summary = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My resume</p>
      <h2 className={styles.sectionHeadText}>Professional Summary</h2>
    </motion.div>

    <div className="mt-4 flex w-full flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="max-w-3xl text-secondary text-[17px] leading-[30px]"
      >
        Here is a summary of my experience, strengths, and technical background.
        Download my full CV for more details.
      </motion.p>
      <motion.a
        variants={fadeIn("", "", 0.15, 1)}
        href="/Douglas-Conejo-CV.pdf"
        download="Douglas-Conejo-CV.pdf"
        className="inline-flex shrink-0 items-center rounded-xl bg-tertiary px-6 py-3 font-semibold text-white transition-colors hover:bg-[#219EBC]"
      >
        Download CV (PDF)
      </motion.a>
    </div>

    <motion.div
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-10"
    >
      <h3 className="text-white text-[24px] font-bold">Profile</h3>
      <p className="mt-4 max-w-5xl text-secondary text-[16px] leading-8">
        Software Engineer with a Bachelor's Degree in Software Engineering and
        professional experience supporting the development, validation, testing,
        and improvement of software solutions. Experienced in analyzing system
        behavior, validating requirements and workflows, performing API and data
        consistency checks, identifying issues, and collaborating with
        development and QA teams to improve product quality and reliability.
        Strong background in software quality, SDLC, Agile environments,
        automated testing, technical analysis, and process improvement. Currently
        expanding my knowledge in cybersecurity, risk assessment, and security
        fundamentals.
      </p>

      <h3 className="mt-10 text-white text-[24px] font-bold">
        Core Competencies
      </h3>
      <ul className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
        {competencies.map((competency) => (
          <li
            key={competency}
            className="flex items-start gap-3 text-secondary text-[15px] leading-7"
          >
            <span className="mt-[10px] h-2 w-2 shrink-0 rounded-full bg-[#FFECC5]" />
            {competency}
          </li>
        ))}
      </ul>

    </motion.div>
  </>
);

export default SectionWrapper(Summary, "summary");
