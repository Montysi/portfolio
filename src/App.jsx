import styled from "styled-components";
import { Link } from "react-scroll";
import Introduction from "./pages/introduction";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  return (
    <div>
      {/* Navigation Menu */}
      <Navbar>
        <NavLink to="introduction" smooth={true} duration={500}>
          Home
        </NavLink>
        <NavLink to="about" smooth={true} duration={500}>
          About
        </NavLink>
        <NavLink to="projects" smooth={true} duration={500}>
          Projects
        </NavLink>
        <NavLink to="contact" smooth={true} duration={500}>
          Contact
        </NavLink>
      </Navbar>

      {/* Sections */}
      <Section id="introduction">
        <Introduction />
      </Section>
      <Section id="about">
        <About />
      </Section>
      <Section id="projects">
        <Projects />
      </Section>
      <Section id="contact">
        <Contact />
      </Section>
    </div>
  );
}

export default App;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #f39c12;
  }
`;

// Styled Section Wrapper
const Section = styled.section`
  height: 100vh; /* Full screen height */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-bottom: 1px solid #ccc;
`;