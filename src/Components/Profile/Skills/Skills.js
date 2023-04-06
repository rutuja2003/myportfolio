import { useState } from "react";
import 'react-circular-progressbar/dist/styles.css';
import { Col } from "react-bootstrap";
import { Link } from "react-bootstrap-icons";
import { skills } from "../../../details";
import SkillsCard from "./SkillsCard.js";

const Skills = () => {
  const [showModal, setShowModal] = useState(false);

  const showModalHandler = () => {
    setTimeout(() => {
      setShowModal(true);
    }, 500);
  };
  return (
    <section id="skills" className="row mt-5 mb-2 justify-content-center">
      <Col sm={12} md={11}  data-aos="zoom-in">
        <h1 className="text-center my-5 text-warning"><u>Skills</u></h1>
      </Col>

      {skills.map((skill, index) => (
        <Col key={index} className="my-3" data-aos="zoom-in-up" sm={4} lg={3}>
          <SkillsCard skill={skill} />
        </Col>
      ))}

      {/* end skills  */}
    </section>
  );
};

export default Skills;
