import { useState } from "react";
import "./agendamento.css"


const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
const times = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

export default function Agendamento(): JSX.Element {

  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);

  function selectDay(day: string) {
    setSelectedDay(day);
    setSelectedTime(null);
  }

  function selectTime(time: string) {
    setSelectedTime(time);
  }

  function bookAppointment() {
    console.log(`Agendado para ${selectedDay} às ${selectedTime}`);
  }

  return (
    <>
     <h1>Agendamento</h1>
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
      </div>
      <button
        className="book"
        onClick={bookAppointment}
        disabled={!selectedDay || !selectedTime}
      >
        Agendar Horário
      </button>
    </div>
    </>
  )
}
