import Madhukar_Resume from "./Madhukar-kumar-Resume.pdf";
import styled from "styled-components";
import { Button } from "./ResumeElements";
export const Resume1 = () => {
  const openResume = () => {
     window.open(
      "https://drive.google.com/file/d/15awixk1doQqpm2xmTP_Ot7Fb3FoUo9R6/view?usp=sharing"
        );
  };
  return (
    <div>
      <a
       href={Madhukar_Resume}
       download="Madhukar-Kumar-Resume"
        className="nav-link resume"
        id="resume-button-1 resume-link-1"
      >
        <Button
          onClick={openResume}
          id="resume-link-1"
          className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg nav-link resume"
        >
          Resume
        </Button>
      </a>
    </div>
  );
};

export const Resume2 = () => {
  const openResume = () => {
     window.open(
          "https://drive.google.com/file/d/15awixk1doQqpm2xmTP_Ot7Fb3FoUo9R6/view?usp=sharing"
        );
  };

  return (
    <div>
      <a
       href={Madhukar_Resume}
       download="Madhukar-kumar-Resume"
        className="nav-link resume"
        id="resume-button-2 resume-link-2"
      >
        <Button
          onClick={openResume}
          id="resume-link-2"
          className="btn btn-md
                    bg-accent hover:bg-accent-hover 
                    transition-all md:btn-lg nav-link resume"
        >
          Resume
        </Button>
      </a>
    </div>
  );
};