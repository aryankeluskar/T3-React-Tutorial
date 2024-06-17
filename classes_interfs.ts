// CLASSES
class NetflixUser {
    private _courseCount = 1;

    public name: string; // public by default in TS
    email: string;
    age: number;
    private readonly _id: string;
    constructor(
        name: string,
        age: number,
        email: string) {
        console.log("New user added");
        this.email = email;
        this.age = age;
        this.name = name;
        this._id = Math.random().toString(36).substring(2);
    }

    get getEmail(): string{
        return `netflix${this.email}`;
    }

    get getCourseCount(): number{
        return this._courseCount;
    }

    set setCourseCount(count: number){ // can not have a return type at all
        if(count < 1){
            count = 1;
            throw new Error("Course count can not be less than 1");
        }
        this._courseCount = count;
    }
}



let arian = new NetflixUser("Arian", 18, "a@k.dev");
let newAryan = new NetflixUser("Aryan", 18, "a@k.dev");
// console.log(aryan._id); // error because it is private



// INTERFACES

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


let aryna: User = {
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
    adminID: number;
    role: "admin" | "superadmin";
}

