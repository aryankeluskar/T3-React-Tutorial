// FUNCTIONS

// since i did not specify the type of the argument, TS will infer the type to be ANY which is problematic
// therefore, unlike variables, it is important to specify the type of the arguments in functions
function addTwo(num: number): number{
    // return "Hello"; - throws an error because the function is supposed to return a number
    return num + 2;
}

console.log(addTwo(2));


// good practice to specify the return type of void function so other devs know that the function does not return anything
function login(name: string, password: string, age: number = 20): void{
    console.log(name + " has logged in at age " + age);
}

login("Aryan", "password", 18);
login("Aryan", "password");
// login(); - throws an error because the function requires two arguments instead of assuming undefined in normal JS

let inputUser = (name: string, email: string): string => {
    console.log(name + " has email " + email);
    return name + " has email " + email;
}

// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function throwError(message: string): never{
    throw new Error(message);
}

// OBJECTS  

let newUser = { newName: "Aryan", isAuth: true };

function createUser({newName, isAuth}: {newName: string, isAuth: boolean}): boolean {
    console.log(newName + " is authenticated: " + isAuth);
    return true;
}

createUser(newUser);