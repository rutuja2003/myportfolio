import {Col} from "react-bootstrap";
import EducationCard from "./EducationCard";

import { education } from "../../../details";

const Education = () => {
  return (
    <section id="education" className="my-5 text-center">
      <div class="row justify-content-evenly">
        <Col sm={12} data-aos="zoom-in-up"> 
            <h1 className="fw-bold mb-5 text-warning"><u>Education</u></h1>
        </Col>
        {education.map((data) => <EducationCard key={data.id}  education={data} />)}
        </div>
    </section>
  )
}

export default Education