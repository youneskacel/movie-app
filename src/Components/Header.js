import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Header = (props) => {
   let exp = "header comp"
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">Movies App</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" onClick={()=> props.setSection("home")}>Home</Nav.Link>
              <Nav.Link href="#action2" onClick={()=> props.setSection("newest")}>Newest</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
