
interface EmployeeCardProps {
    name: string
    id: number
    status?: string
    email?: string
    phone?: string
}

function EmployeeCard({ name, id, status, email, phone }: EmployeeCardProps) {
    return (
        <div className="employee-card">
            <h3>{name}</h3>
            <p>Employee ID: {id}</p>
            {status && <p>Status: {status}</p>}
            {email && <p>Email: {email}</p>}
            {phone && <p>Phone: {phone}</p>}
        </div>
    );
}

export default EmployeeCard;