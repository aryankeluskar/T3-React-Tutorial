// ALIASES

type User = {
    name: string;
    age: number;
    isActive: boolean;

    // readonly properties can only be set during initialization or in the constructor
    readonly _id: string;
    readonly things: string[];

    // optional properties need a question mark
    creditCard?: number;
}

function createUser(user: User): boolean {
    console.log(user.name + " is authenticated: " + user.isActive);
    return true;
}

let newUser:User = { _id: "123", things: ["thing1", "thing2"], name: "Aryan", age: 18, isActive: true };


// UNION
let score: number | string = "10";

let data : (string | number)[] = [1, 2, 3, "4", "5"];

// LITERALS

let pi : 3.14 = 3.14;
console.log(pi);

let seats : "upper" | "berth" | "lower" = "upper";
seats = "berth";
console.log(seats);