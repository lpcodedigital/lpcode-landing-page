// src/components/Navbar.tsx
import '../../styles/Nabvar.css';

interface NavbarProps {
  setSection: (section: string) => void;
}

const Navbar = ({ setSection }: NavbarProps) => {
  return (
      <nav className="navbar">
          <ul>
              <li><a onClick={() => setSection("home")}>Inicio</a></li>
              <li><a onClick={() => setSection("about")}>Sobre Nosotros</a></li>
              <li><a onClick={() => setSection("contact")}>Contacto</a></li>
              <li><a onClick={() => setSection("privacy")}>Privacidad</a></li>
          </ul>
      </nav>
  );
};

export default Navbar;

