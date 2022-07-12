import React, { useState } from "react";
import "./styles.css";
import Modal from "./Modal.js"
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import icon1 from "./icon1.png"

export default function App() {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
    
  const getData = (events) => {
    setEvents(events)
  }
  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  console.log(events)

  return (
    <div className="App">
        <div>            
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[dayGridPlugin]}
                events={events}
            />
        </div>
        <div>
            <button className="bookingButton" onClick={openModal}><img src={icon1} /></button>
            {showModal ? <Modal closeModal={closeModal} getData={getData} /> : null}
        </div>
    </div>
  );
}