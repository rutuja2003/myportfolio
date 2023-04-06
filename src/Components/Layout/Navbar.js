import { Container, Nav, Navbar, DropDown } from "react-bootstrap";

const MyNav = () => {
  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      fixed="top"
      className="my__nav"
      expand="md"
    >
      <Container fluid="md" className="mx-auto">
        <Navbar.Brand className="nav__heading mx-auto fw-bold text-info">
         Rutuja Sathe
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-sm-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#education">Education</Nav.Link>
            {/* <Nav.Link href="#experience">Experiences</Nav.Link> */}
            {/* <Nav.Link href="#project">Projects</Nav.Link> */}
            <Nav.Link href="#skills">Skills</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
