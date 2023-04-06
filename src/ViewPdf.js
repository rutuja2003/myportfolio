import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { Modal, Button,Col } from "react-bootstrap";
import { Download } from "react-bootstrap-icons";
import resume from "./Rutuja Sathe Resume 1.pdf";
const ViewPdf = ({ show, onHide }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      backdrop="static"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <a href={resume} download className="btn btn-success">
            <Download size={20} color="purple"/>
        </a>
      </Modal.Header>
      <Modal.Body >
        <div class="row justify-content-evenly">
          <Col sm={10}>
            <Document
              file={resume}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Col>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ViewPdf;
