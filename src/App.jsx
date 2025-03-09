import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import Introduction from "./pages/introduction";
import About from "./pages/about";
import Projects from "./pages/projects";
import Contact from "./pages/contact";

function App() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const introductionSection = document.getElementById("introduction");
      const introductionSectionBottom = introductionSection.offsetHeight;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= introductionSectionBottom) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <Section id="introduction">
        <Introduction />
      </Section>

      <Navbar isSticky={isSticky}>
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
  position: ${(props) => (props.isSticky ? "sticky" : "absolute")};
  top: ${(props) =>
    props.isSticky ? "0" : "100vh"}; 
  width: 100%;
  background: rgba(0, 0, 0, 0.8);
  padding: 10px;
  display: flex;
  justify-content: center;
  gap: 20px;
  z-index: 10;
  transition: none; 
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


const Section = styled.section`
  height: 100vh; 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  border-bottom: 1px solid #ccc;
`;