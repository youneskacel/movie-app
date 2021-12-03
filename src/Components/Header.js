import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import {Link , useNavigate} from 'react-router-dom'
import {useState} from 'react'


const Header = (props) => {
  let navigation = useNavigate()
  const [search , setSearch] = useState("")
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
              <Nav.Link  > <Link className="itemList" to="/">Home</Link></Nav.Link>
              <Nav.Link  ><Link className="itemList" to="/newest">Newest</Link></Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>{setSearch(e.target.value)}}
              />
              <Button 
              variant="outline-success"
              onClick={()=>{navigation(`search/${search}`)}}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
