import { createContext } from "react";

interface User {
    name: string;
    id: number;
    email: string;
    phone: string;
}

export const UserContext = createContext<User | null>(null);