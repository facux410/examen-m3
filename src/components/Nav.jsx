import Logo from "../logoHenry.png";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";
import { Container, Navbar } from "react-bootstrap";

function NavB({ onSearch }) {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Container fluid>
          <div className="logo-name">
            <img src={Logo} alt="logoHenry" typeof="logo" width={30} />
            <Navbar.Brand href="#" className="text-light">
              Henry - Weather App
            </Navbar.Brand>
          </div>
          <SearchBar onSearch={onSearch} />
        </Container>
      </Navbar>
    </>
  );
}

export default NavB;
