import "./header.css"
import {Link} from "react-router-dom"
import { SignIn, Stethoscope } from "@phosphor-icons/react"

export default function Header() {
  return (
    <div className="header">
      <Link to="/"><Stethoscope size={40}></Stethoscope></Link>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
   </div>
  )
}
