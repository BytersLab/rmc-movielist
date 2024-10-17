import PropTypes from "prop-types";
import { Nav, Navbar, Container } from "react-bootstrap";

export function BSNavbar({ brand, navlinks }) {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{brand}</Navbar.Brand>
          <Nav className="me-auto">
            {navlinks.map((item) => {
              return item;
            })}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

BSNavbar.propTypes = {
  brand: PropTypes.string.isRequired,
  navlinks: PropTypes.array.isRequired,
};
