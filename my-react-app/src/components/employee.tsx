import { useEffect, useState } from 'react';
import Header from './header';

interface Employee {
    name: string;
    id: number;
    email: string;
    phone: string;
}
function Employee() {

    const [employee, setEmployee] = useState<Employee | null>(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {
        async function employeeDataCalling() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

                const data = await response.json();
                setEmployee(data);
            } catch (error) {
                console.log(error);
                if (error instanceof Error) {
                    setError(error.message);
                } else {
                    setError("Failed to load employee");
                }
            } finally {
                setLoading(false);
            }
        }

        employeeDataCalling();
    }, [])

    return <>
        {loading && <p>Loading Employee...</p>}
        {!loading && !employee && <p>{error}</p>}
        {employee && !loading && <Header name={employee.name} id={employee.id} email={employee.email} phone={employee.phone} />}</>
}

export default Employee;