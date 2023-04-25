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
        <a href="#">Home</a>
        <a href="#">Sobre nós</a>
        <a href="#">Serviços</a>
        <a href="#contato">Contato</a>
      </nav>
    </div>
  );
}
