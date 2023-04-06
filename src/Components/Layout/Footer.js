import { Row, Container, Col } from "react-bootstrap";
import { social } from "../../details";
const Footer = () => {
  return (
    <Container fluid className="mt-5 mb-2 footer">
      <div className="row justify-content-evenly">
        <div class="col-md-12 text-center">
          <p >
            Copyright &copy;
            <script>document.write(new Date().getFullYear());</script> All
            rights reserved | Rutuja Sathe
          </p>
        </div>
      </div>
    </Container>
  );
};
export default Footer;
