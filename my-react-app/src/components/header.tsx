import { useState } from "react";
import EmployeeCard from "./employee_card";
import "./header.css";

// interface Employee {
//     name: string
//     id: number
//     status?: string
// }

function Header() {
    // const employee: Employee = {
    //     name: "Jayan Keasav Vennih",
    //     id: 12345,
    //     status: "Present"
    // }
    const [employee, setEmployee] = useState({
        name: "Jayan Keasav Vennih",
        id: 12345,
        status: "Present"
    });

    const [employeeState, setEmployeeState] = useState(employee.status ?? "Absent");

    const [buttonText, setButtonText] = useState(employeeState !== "Present" ? "Check In" : "Check Out");

    const [count, setCount] = useState(0);

    const markAttendence = () => {
        if (employeeState === "Present") {
            setEmployee({ ...employee, status: "Absent" });
            setEmployeeState("Absent");
            setButtonText("Check In");
        } else {
            setCount((prevCount) => prevCount + 1);
            setEmployee({ ...employee, status: "Present" });
            setEmployeeState("Present");
            setButtonText("Check Out");
        }
    }

    return <>
        <div className="header-component">
            <div className="title">
                <h1>BGRES Attendance Dashboard</h1>
            </div>
            <div className="employee-section">
                <div className="button-section">
                    <button className="attendance-button" onClick={markAttendence} >{buttonText}</button>
                </div>
                <div className="counter-section">
                    <p className="counter-button">Count is {count} <a onClick={()=> setCount(0)}>Reset</a></p>
                </div>
                <div className="employee-info">
                    <EmployeeCard name={employee.name} id={employee.id} status={employeeState} />
                </div>
            </div>
        </div>
    </>;
}

export default Header;