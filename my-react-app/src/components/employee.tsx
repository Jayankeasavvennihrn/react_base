import { useState, useEffect } from 'react';
import Header from './header';

interface Employee {
    name: string;
    id: number;
    email?: string;
    phone?: string;
}
function Employee() {

    const [employee, setEmployee] = useState<Employee | null>(null);

    useEffect(()=> {
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data);
            setEmployee(data);
        })
    }, [])

    return <>{employee && <Header name={employee.name} id={employee.id} email={employee.email} phone={employee.phone} />}</>
}

export default Employee;