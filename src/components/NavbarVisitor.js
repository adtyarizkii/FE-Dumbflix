import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/dumbflix-logo.png";

function NavbarVisitor() {
  return (
    <div>
      <Navbar
        fixed="top"
        bg="dark"
        variant="dark"
        expand="lg"
        className="navbg"
        style={{ height: "10vh" }}
      >
        <Container>
          <Nav>
            <Nav.Link>
              <Link to="/" className="navlink text-white">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/tvshows" className="navlink text-white">
                TV Shows
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/movies" className="navlink text-white">
                Movies
              </Link>
            </Nav.Link>
          </Nav>
          <Navbar.Brand as={Link} to="/" style={{ marginLeft: "17.5rem" }}>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <button className="btnregist me-2">Register</button>
            <button className="btnlogin">Login</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarVisitor;
