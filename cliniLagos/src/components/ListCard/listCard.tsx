import {medicos} from "../../data/data"
import Cards from '../Cards/Cards'

export default function ListCard() {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {medicos.map((medicos) =>{
        return <Cards
          key={medicos.id}
          id={medicos.id}
          nome={medicos.nome}
          especialidade={medicos.especialidade}
          foto={medicos.foto}
          telefone={medicos.telefone}
          email={medicos.email}
        />
      })}
    </div>
  )
}
