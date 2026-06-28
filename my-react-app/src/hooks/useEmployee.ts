import { useEffect, useState } from "react";
// import { UserContext } from "../context/UserContext";
interface Employee {
    name: string;
    id: number;
    email: string;
    phone: string;
}

function useEmployee() {
    const [employee, setEmployee] = useState<Employee | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function employeeDataCalling() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/3");

                const data = await response.json();
                setEmployee(data); // Update the state with the fetched employee data
                // <UserContext.Provider value={data} />
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

    return { employee, loading, error };
}

export default useEmployee;