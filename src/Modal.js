import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

function Modal({closeModal, getData}) {    
    const [selectedDate, setDate] = useState(new Date());
    const [name, setName] = useState("");
    const [events, setEvents] = useState([]);
    
    const onChange = (e) => setName(e.target.value);
    const saveName = () => {
        localStorage.setItem("name", events);
    }
    const handleSchedule = (e) => {
        if(name === "") {
            alert("이름을 입력해주세요.");
        } else {
            e.preventDefault();        
            const scheduleObj = {
                title: name,
                date: selectedDate
            }  
            setEvents(currentArray => [scheduleObj, ...currentArray]);
            saveName();
            getData(events);
        }
        
    }

    return (
        <div className="modalBackground">
            <div className="modal">
                <h1>Modal</h1>
                <div>
                    <DatePicker
                        className="input"
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={10}
                        timeCaption="time"
                        dateFormat="M월 d일 h:mm aa"
                        minDate={new Date()}
                        selected={selectedDate}
                        onChange={(date) => setDate(date)}
                    />
                    <input className="input" onChange={onChange} value={name} placeholder="이름" type="text" />
                </div>
                <div>
                    <button className="button" onClick={handleSchedule}>Save</button>
                    <button className="button" onClick={closeModal}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;