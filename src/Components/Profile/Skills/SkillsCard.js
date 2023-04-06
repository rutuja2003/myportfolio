import React from "react";
import { CircularProgressbar,buildStyles } from "react-circular-progressbar";

const SkillsCard = ({ skill }) => {
  return (
    <div className="flip-card" >
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={skill.img} alt="Avatar" />
        </div>
        <div className="flip-card-back">
          {/*  style={{width:"300px",height:"300px"}} */}
          <h3 className="my-2 text-wrap fw-bold text-info"><u>{skill.title}</u></h3>
          <div className="circular_progress">
            <CircularProgressbar
              styles={buildStyles({                 
                backgroundColor: '#130F40',
                textColor: '#f88',
              
              })}
              value={skill.val}
              text={`${skill.val}%`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
