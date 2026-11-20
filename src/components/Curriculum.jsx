import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { profiles } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProfileCard = ({ index, name, description, url }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-tertiary2 p-6 rounded-2xl sm:w-[300px] w-full hover:bg-tertiary transition-colors"
      >
        <div className="flex items-center gap-4">
          {name === "GitHub" ? (
            <div className="w-12 h-12 rounded-full bg-primary flex justify-center items-center">
              <img
                src={github}
                alt=""
                className="w-7 h-7 object-contain"
              />
            </div>
          ) : (
            <span className="w-12 h-12 rounded-full bg-primary flex justify-center items-center text-white font-bold text-[20px]">
              in
            </span>
          )}
          <div>
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-1 text-secondary text-[14px]">{description}</p>
          </div>
        </div>
      </a>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Connect</p>
        <h2 className={styles.sectionHeadText}>Professional Profiles</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Explore my work and professional background.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
