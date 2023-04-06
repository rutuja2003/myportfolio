import { Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard.js";
import { projects } from "../../../details";

const Project = () => {
  return (
    <section id="project" className="row my-5 justify-content-center">
      <Col sm={12} className="mb-5 mt-3">
        <h1 className="mt-5 mb-3 text-center fw-bold text-warning" data-aos="zoom-in"><u>Projects</u></h1>
      </Col>

      {projects.map((project) => (
        <Col md={6} sm={12} className="my-4">
          <ProjectCard key={project.id} project={project} />
        </Col>
      ))}
    </section>
  );
};

export default Project;
