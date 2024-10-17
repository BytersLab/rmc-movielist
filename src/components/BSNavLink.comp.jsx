import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";

export function BSNavLink({ text, href }) {
  return (
    <>
      <Nav.Link href={href}>{text}</Nav.Link>
    </>
  );
}

BSNavLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};
