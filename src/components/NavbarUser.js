import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/dumbflix-logo.png";
import UserBlank from "../assets/blank-profile.png";
import Profil from "../assets/profile.png";
import Pay from "../assets/bill.png";
import LogoutIcon from "../assets/logout.svg";

function NavbarUser() {
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">TV Shows</Nav.Link>
            <Nav.Link href="#movies">Movies</Nav.Link>
          </Nav>
          <Navbar.Brand as={Link} to="/" style={{ marginLeft: "17.5rem" }}>
            <img src={Logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav style={{ marginRight: "5%" }}>
              <NavDropdown
                title={
                  <div>
                    <img
                      className="rounded-circle"
                      src={UserBlank}
                      alt="User"
                      style={{ width: "35px", marginTop: "10px" }}
                    />
                  </div>
                }
                id="nav-dropdown"
              >
                <NavDropdown.Item
                  bg="dark"
                  variant="dark"
                  style={{ backgroundColor: "black", color: "white" }}
                  as={Link}
                  to="/user/profile"
                >
                  <img
                    src={Profil}
                    alt="icon"
                    style={{ width: "25px", marginRight: "5px" }}
                  />
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item
                  style={{ backgroundColor: "black", color: "white" }}
                  as={Link}
                  to="/user/my-list-film"
                >
                  <img
                    src={Pay}
                    alt="icon"
                    style={{ width: "25px", marginRight: "5px" }}
                  />
                  Pay
                </NavDropdown.Item>
                <NavDropdown.Divider
                  style={{ backgroundColor: "grey", color: "white" }}
                />
                <NavDropdown.Item
                  // onClick={logout}
                  style={{ backgroundColor: "black", color: "white" }}
                >
                  <img
                    src={LogoutIcon}
                    alt="icon"
                    style={{ width: "25px", marginRight: "5px" }}
                  />
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarUser;
