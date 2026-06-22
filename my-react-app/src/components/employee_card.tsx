
interface EmployeeCardProps {
    name: string
    id: number
    status?: string
}

function EmployeeCard({ name, id, status }: EmployeeCardProps) {
    return (
        <div className="employee-card">
            <h3>{name}</h3>
            <p>Employee ID: {id}</p>
            {status && <p>Status: {status}</p>}
        </div>
    );
}

export default EmployeeCard;