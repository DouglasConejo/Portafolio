import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import { languages } from "../constants";

const LanguageCard = ({ name, level }) => (
  <motion.div
    className="bg-tertiary2 p-8 rounded-3xl xs:w-[320px] w-full"
  >
    <h3 className="text-white font-bold text-[20px]">{name}</h3>
    <p className="mt-2 text-secondary text-[16px]">{level}</p>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary3 rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Languages spoken</p>
          <h2 className={styles.sectionHeadText}>Languages</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {languages.map((language) => (
          <LanguageCard key={language.name} {...language} />
        ))}
      </div>
    </div>
  );
};

export default Feedbacks;
