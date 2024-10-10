import logo from "../assets/JClogo.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      {/* Logo */}
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="home">
          <img src={logo} className="mx-2" width="100" height="75" alt="LOGO" />
        </a>
      </div>
      {/* Linkedin */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/juan-carlos-guerrero-borunda-2b92642ab/"
          target="._blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        {/* github */}
        <a
          href="https://github.com/Juanca752"
          target="._blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
