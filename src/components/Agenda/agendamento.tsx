import { useContext, useState } from "react";
import "./agendamento.css"
import constextDoctor from "../../contex";
import { Link } from "react-router-dom";



const daysOfWeek = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

export default function Agendamento(): JSX.Element {

  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const {doctor, setDoctor} = useContext<any>(constextDoctor)


  function selectDay(day: string) {
    setSelectedDay(day);
    setSelectedTime(null);
    setDoctor((previous: any) => ({...previous, day}));

  }

  function selectTime(time: string) {
    setSelectedTime(time);
    setDoctor((previous: any) => ({...previous, time}));

  }

  function bookAppointment() {
    console.log(`Agendado para ${selectedDay} às ${selectedTime}`);

  }

  return (
    <>
     <h1>Agendamento Dr. {doctor.nome}</h1>
     <h2>Especialidade {doctor.especialidade}</h2>
     <div className="container">
      <h1 className="p-10">Agenda de Horários</h1>
      <div className="calendar">
        {daysOfWeek.map(day => (
          <div
            key={day}
            className={`calendar-day ${day === selectedDay ? 'selected' : ''}`}
            onClick={() => selectDay(day)}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="timeslots">
        {times.map(time => (
          <div
            key={time}
            className={`timeslot ${time === selectedTime ? 'selected' : ''}`}
            onClick={() => selectTime(time)}
          >
            {time}
          </div>
        ))}
      </div><Link to="/checkout">
      <button
        className="book"
        onClick={bookAppointment}
        disabled={!selectedDay || !selectedTime}
      >
        Agendar Horário
      </button></Link>
    </div>
    </>
  )
}
