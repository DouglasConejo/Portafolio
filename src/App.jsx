import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Summary,
  Tech,
  Works,
  StarsCanvas,
  Curriculum,
  ExperienceWork
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative-z-0-bg-primary ">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar />
          <Hero />
        </div>
        <Summary />
        <About />  
        <Experience />    
        <Tech />
        <ExperienceWork/>
        <Works />
        <Curriculum />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
