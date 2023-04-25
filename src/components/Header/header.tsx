import "./header.css";
import { Link } from "react-router-dom";
import { Stethoscope } from "@phosphor-icons/react";

export default function Header() {
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
        <Link to="/agendamento" className="link">Agendamento</Link>
        <Link to="/sobre" className="link">Sobre nós</Link>
        <a className="link"href="#contato">Contato</a>
      </nav>
    </div>
  );
}
