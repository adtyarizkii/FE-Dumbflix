import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Logo from "../assets/dumbflix-logo.png";
import Login from "./ModalLogin";
import Register from "./ModalRegist";

function NavbarVisitor() {
  const [loginShow, setLoginShow] = useState(false);
  const [registerShow, setRegisterShow] = useState(false);

  const registerHere = (e) => {
    e.preventDefault();
    setRegisterShow(false);
    setLoginShow(true);
  };

  const loginHere = (e) => {
    e.preventDefault();
    setLoginShow(false);
    setRegisterShow(true);
  };

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
            <button
              className="btnregist me-2"
              onClick={() => setRegisterShow(true)}
            >
              Register
            </button>
            <button className="btnlogin" onClick={() => setLoginShow(true)}>
              Login
            </button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* modal */}
      <Login
        loginHere={loginHere}
        loginShow={loginShow}
        setLoginShow={setLoginShow}
      />
      <Register
        registerHere={registerHere}
        registerShow={registerShow}
        setRegisterShow={setRegisterShow}
      />
    </div>
  );
}

export default NavbarVisitor;
