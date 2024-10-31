import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiencesWork } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
const ExperienceCard = ({ experienceWork }) => {
    if (!experienceWork) {
      return null; // or handle the case when experienceWork is undefined
    }
  
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "#023047",
          color: "#FFF",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #023047" }}
        date={experienceWork.date}
        iconStyle={{ background: experienceWork.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={experienceWork.icon}
              alt={experienceWork.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">{experienceWork.title}</h3>
          <p
            className="text-secondary text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experienceWork.company_name}
          </p>
        </div>
  
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experienceWork.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };

const ExperienceWork = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>I have worked on</p>
        <h2 className={styles.sectionHeadText}>My experience</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiencesWork.map((experienceWork, index) => (
            <ExperienceCard key={index} experienceWork={experienceWork} />
          ))}
        </VerticalTimeline>
      </div>
      <motion.div variants={textVariant()}>
    
      </motion.div>

    </>

  );
};

export default SectionWrapper(ExperienceWork, "experienceWork");