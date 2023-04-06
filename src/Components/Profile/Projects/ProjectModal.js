import Modal from "react-bootstrap/Modal";
import { Col, Row, Button } from "react-bootstrap";
import {BoxArrowUpRight} from "react-bootstrap-icons";
import { colors } from "../../../details";



const ProjectModal = ({ show, onHide, project }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal"
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {project.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="row justify-content-evenly">
        <Col md={5} sm={12}>
          <img src={project.image} className="img-fluid my-md-5" alt="" />
        </Col>

        <Col md={6} sm={12}>
          <h5 className="text-center my-3 text-warning">
            <u>Project Description</u>
          </h5>
          <ul>
            {project.desc.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          {/* tools */}
          {project.tools.length > 0 && (
            <Row>
              <Col sm={12}>
                <h5 className="text-warning">
                  <u>Tools</u>
                </h5>
              </Col>
              <Col>
                {project.tools.map((tool, id) => (
                  <span
                    key={id}
                    className={`badge bg-${(colors[tool]?colors[tool]:"info")} mx-2 my-1`}
                    style={{ fontSize: "15px" }}
                  >
                    {tool}
                  </span>
                ))}
              </Col>
            </Row>
          )}


          {/* end tools */}
        </Col>
      </Modal.Body>
      <Modal.Footer>
        {project.service && <a href={project.service} target="_blank" className="btn btn-info">
        <BoxArrowUpRight size={20}/> View deployed
        </a>}
        <a href={project.link} target="_blank" className="btn btn-success">
        <BoxArrowUpRight size={20}/> View on Github
        </a>
      </Modal.Footer>
    </Modal>
  );
};

// <span class="badge bg-primary">Primary</span>

export default ProjectModal;
