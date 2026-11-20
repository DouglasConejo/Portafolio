import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";

import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText2}>Technical Skills</h2>
        <p className={styles.sectionSubText}>
          Technologies I use to build and validate software
        </p>
      </motion.div>

      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7">
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8, scale: 1.04 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.04 }}
            className="group px-3 pb-4 pt-2"
          >
            <div className="h-28 w-full">
              <BallCanvas icon={technology.icon} />
            </div>
            <p className="text-center text-[14px] font-medium text-secondary transition-colors group-hover:text-white">
              {technology.name}
            </p>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 text-center text-secondary text-[15px]">
        Software quality and test automation with Playwright, Cypress, E2E, and
        API testing.
      </p>
    </>
  );
};

export default SectionWrapper(Tech, "tech");
