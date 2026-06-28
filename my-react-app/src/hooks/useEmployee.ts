import { useEffect, useState } from "react";
// import { UserContext } from "../context/UserContext";

function useEmployee() {
    const [employee, setEmployee] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    useEffect(() => {
        // Fetch employee data from an API or perform any side effects here
        async function fetchEmployeeData() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
                const data = await response.json();
                setEmployee(data); // Update the state with the fetched employee data
                // <UserContext.Provider value={data} />
            } catch (error) {
                setError("Error fetching employee data");
                console.error("Error fetching employee data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchEmployeeData();
    }, []);

    return { employee, loading, error };
}

export default useEmployee;