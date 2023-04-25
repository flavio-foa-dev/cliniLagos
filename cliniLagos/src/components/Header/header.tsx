import "./header.css"
import {Link} from "react-router-dom"
import { SignIn, Stethoscope } from "@phosphor-icons/react"

export default function Header() {
  return (
    <div className="header">
      <Link to="/"><Stethoscope size={50} weight="fill" color="blue" className="p-2 rounded-full bg-white"/></Link>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <Link to="/login" className="flex gap-1 hover:border-b-2 hover:border-blue-50"><SignIn/>Login</Link>
   </div>
  )
}
