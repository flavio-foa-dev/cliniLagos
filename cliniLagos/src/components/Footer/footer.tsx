
import { FacebookLogo, InstagramLogo, WhatsappLogo } from "@phosphor-icons/react"
import "./footer.css"

export default function Footer() {
  return (
    <footer id="contato">
      <div className="footer-container">
        <span>Contatos</span>
        <div className="contatos">
        <span>Telefone: (21) 2121-2121</span>
        </div>
        <nav className="social flex gap-3 h-full">
          <FacebookLogo className="h-full" size={50}/>
          <InstagramLogo />
          <WhatsappLogo />
        </nav>
        <div className="copy">
          &copy; 2023 Minha Empresa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  )
}
