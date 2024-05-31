// INTERFACE

interface User {
    name: string;
    age: number;
    email: string;
    start: () => string; // for arrow functions
    data(): string; // for normal functions
    setInt(int: string): void;
}


// let's re-open the User interface and add a new property
interface User {
    // adding a new property
    phone: number;
}


let aryna : User = {
    name: "Aryan",
    age: 18,
    email: "a@k.dev",
    start: () => {
        return "This is a function ";
    },
    data: () => {
        return "This is a simpler function ";
    },
    setInt: (int) => {
        console.log(int);
    },
    phone: 1234567890
}

console.log(aryna.start());

interface Admin extends User {
    admin: boolean;
    adminID : number;
    role : "admin" | "superadmin";
}

