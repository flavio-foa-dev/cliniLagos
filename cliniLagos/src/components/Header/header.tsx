import "./header.css"

export default function Header() {
  return (
    <div className="header">
      <span>Logo</span>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
      <span>Login</span>
   </div>
  )
}
