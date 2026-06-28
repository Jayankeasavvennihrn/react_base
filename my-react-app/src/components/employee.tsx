// import { useEffect, useState } from 'react';
import Header from './header';
import useEmployee from '../hooks/useEmployee';

interface Employee {
    name: string;
    id: number;
    email: string;
    phone: string;
}
function Employee() {

    const {employee, loading, error} = useEmployee();

    return <>
        {loading && <p>Loading Employee...</p>}
        {!loading && !employee && <p>{error}</p>}
        {employee && !loading && <Header name={employee.name} id={employee.id} email={employee.email} phone={employee.phone} />}</>
}

export default Employee;