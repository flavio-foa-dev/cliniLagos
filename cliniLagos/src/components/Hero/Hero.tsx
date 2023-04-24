import "./hero.css"

export default function Hero() {
  return (
    <section className="hero">
      <div className="flex flex-col items-end mr-6 gap-2 p-2">
        <a href="#" className=" text-blue-600 font-bold text-lg">Gastroenterologista</a>
        <a href="#" className=" text-blue-600 font-bold text-lg">Endocrinologista</a>
        <a href="#" className=" text-blue-600 font-bold text-lg">Dermatologista</a>
        <a href="#" className=" text-blue-600 font-bold text-lg">Clinica Medica</a>
        <a href="#" className=" text-blue-600 font-bold text-lg">Cardiologista</a>
        <a href="#" className=" text-blue-600 font-bold text-lg">Pediatria</a>
      </div>
    </section>
  )
}
