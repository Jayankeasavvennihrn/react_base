import { useState } from "react";
import EmployeeCard from "./employee_card";
import "./header.css";

interface Employee {
    name: string
    id: number
    status?: string
    email?: string
    phone?: string
}

function Header(props: Employee) {
    // const employee: Employee = {
    //     name: "Jayan Keasav Vennih",
    //     id: 12345,
    //     status: "Present"
    // }

    const [status, setStatus] = useState(
        props.status ?? "Absent"
    );


    const [count, setCount] = useState(0);

    const markAttendence = () => {
        if (status === "Present") {
            setStatus("Absent");
        } else {
            setCount((prevCount) => prevCount + 1);
            setStatus("Present");
        }
    }

    return <>
        <div className="header-component">
            <div className="title">
                <h1>BGRES Attendance Dashboard</h1>
            </div>
            <div className="employee-section">
                <div className="button-section">
                    <button className="attendance-button" onClick={markAttendence} >{status === "Present" ? "Check Out" : "Check In"}</button>
                </div>
                <div className="counter-section">
                    <p className="counter-button">Count is {count} <a onClick={() => setCount(0)}>Reset</a></p>
                </div>
                <div className="employee-info">
                    <EmployeeCard name={props.name} id={props.id} status={status} email={props.email} phone={props.phone} />
                </div>
            </div>
        </div>
    </>;
}

export default Header;