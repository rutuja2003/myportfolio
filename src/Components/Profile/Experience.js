import { Col } from "react-bootstrap";
import { CircleFill,GeoAltFill } from "react-bootstrap-icons";
import {experiences, projects} from "../../details.js";

const Experience = () => {
  return (
    <section id="experience" className="row justify-content-evenly my-5">
      <Col sm={12} md={8}>
        <h1 className="text-center my-md-5 my-3 text-warning" data-aos="zoom-in-up"><u>Experiences</u></h1>
      </Col>

      <Col sm={12} md={8}>
        {experiences.map((exp,ind) => (
            <>
            <CircleFill color="green" key={ind*1} />
            <div className="vertical" key={ind*1+6}>
                <h3 className="fw-bold text-info mb-3" data-aos="zoom-in"><u>{exp.jobtitle}</u></h3>
                <button className="btn btn-secondary my-2" data-aos="zoom-in">{exp.from} - {exp.to}</button> <span data-aos="zoom-in-left" className="float-end "><GeoAltFill color="red"/> {exp.location}</span>
                <h5 className="text-muted" data-aos="zoom-in"><i>{exp.company}</i></h5>
                <ul className="my-2">
                    {exp.desc.map((item,index) => <li key={index} data-aos="zoom-in-left" data-aos-delay="50" className="my-1">{item}</li>)}
                </ul>
            </div>
            </>
        ))}
        
      </Col>
    </section>
  );
};

export default Experience;
