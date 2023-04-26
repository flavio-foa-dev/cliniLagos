import "./header.css";
import { Link, useLocation } from "react-router-dom";
import { Stethoscope } from "@phosphor-icons/react";

export default function Header() {
  const location = useLocation();
  return (
    <div className="header">
      <Link to="/">
        <Stethoscope
          size={30}
          color="blue"
          className="w-full h-full p-1 border-2 rounded-full bg-white"
        />
      </Link>
      <nav className="flex gap-5  ">
        <Link to="/" className="link">Home</Link>
        {location.pathname === '/' &&
        (<a className="link" href="#listCard">Agendar</a>)}
        <Link to="/sobre" className="link">Sobre</Link>
        <a className="link"href="#contato">Contato</a>
      </nav>
    </div>
  );
}
