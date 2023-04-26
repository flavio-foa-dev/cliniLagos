import { useContext } from "react"
import constextDoctor from "../../contex"
import { Stethoscope } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

export default function CheckoutRecibo() {
  const {doctor}= useContext<any>(constextDoctor)
  return (
    <div className="container mx-auto p-4">
      <div className="bg-white shadow rounded-lg p-4 flex flex-col items-center">
      <Stethoscope
          color="blue"
          className="w-32 h-32 p-1 border-2 rounded-full bg-slate-100 "
        />
      <h1 className="text-xl font-bold mb-2">Clinica Lagos</h1>
      <h2 className="text-xl font-bold mb-2">Recibo de marcação de consulta</h2>
      <div className="w-full bg-slate-100 p-3" >
        <p className="mb-2"><strong>Médico:</strong> {doctor.nome}</p>
        <p className="mb-2"><strong>Especialidade:</strong> {doctor.especialidade}</p>
        <p className="mb-2"><strong>Dia:</strong> {doctor.day}</p>
        <p className="mb-2"><strong>Horário:</strong> {doctor.time}</p>
      </div>
    </div>
    <Link to="/" className="btn-back">Voltar para a página inicial</Link>
    </div>
  )
}
