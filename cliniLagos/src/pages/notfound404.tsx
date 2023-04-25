import { Link } from "react-router-dom";
import "./notfound.css"


export default function Notfound404() {
  return (
    <>

<div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found__title">404</h1>
        <h2 className="not-found__subtitle">Página não encontrada</h2>
        <p className="not-found__paragrafo">Lamentamos, mas a página que você está procurando não existe.</p>
        <Link to="/" className="btn-back">Voltar para a página inicial</Link>
      </div>
    </div>


    </>
  )
}
