import { useState } from "react";
import {Link} from "react-bootstrap-icons";
import ProjectModal from "./ProjectModal";

const ProjectCard = ({ project }) => {
  const [modalShow,setShowModal] = useState(false);

  return (
    <>
    <div className="hovereffect" data-aos={project.style} data-aos-delay="100" style={{borderRadius: "5px"}}>
      <img className="img-fluid" src={project.image} alt="" />
      <div className="overlay">
        <h2 className="fw-bold fs-3">{project.title}</h2>
        <a
          className="info"
          onClick={()=>setShowModal(true)}         
        >
          <Link size={50}/>
        </a>
      </div>
    </div>

    <ProjectModal show={modalShow} key={project.id} onHide={()=> setShowModal(false)} project={project}/>
    </>
    
  );
};

export default ProjectCard;


/*

*/