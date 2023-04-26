import { useContext, useEffect } from "react";
import "./card.css"
import { Link} from "react-router-dom";
import constextDoctor from "../../contex";

type propsCard = {
  id: number
  nome: string;
  especialidade: string;
  foto: string;
  telefone: string;
  email: string;
}

export default function Cards(props: propsCard){

 const {doctor, setDoctor} = useContext<any>(constextDoctor)

  function agendamento(nome:string, especialidade:string){
    setDoctor({nome, especialidade})
    console.log("agendamento aaaaa", doctor)
  }

  useEffect(() => {
    console.log("agendamento aaaaa", doctor)
  },[doctor])

  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={props.foto} alt={props.especialidade}></img>
        </div>
        <div className="card-info">
          <p className="text-title">{props.nome}</p>
          <p className="text-body">{props.especialidade}</p>
        </div>
        <div className="card-footer">
          <span className="text-title">Agendar</span>
          <div className="card-button" onClick={() => agendamento(props.nome, props.especialidade)}>
            <Link to={{
              pathname:"/agendamento"
              }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#0B38BF" viewBox="0 0 256 256">
              <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-38.34-85.66a8,8,0,0,1,0,11.32l-48,48a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L116,164.69l42.34-42.35A8,8,0,0,1,169.66,122.34Z">
              </path>
            </svg></Link>
          </div>
        </div>
      </div>
    </>
  )
}
