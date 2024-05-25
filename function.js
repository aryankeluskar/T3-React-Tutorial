// FUNCTIONS
// since i did not specify the type of the argument, TS will infer the type to be ANY which is problematic
// therefore, unlike variables, it is important to specify the type of the arguments in functions
function addTwo(num) {
    // return "Hello"; - throws an error because the function is supposed to return a number
    return num + 2;
}
console.log(addTwo(2));
// good practice to specify the return type of void function so other devs know that the function does not return anything
function login(name, password, age) {
    if (age === void 0) { age = 20; }
    console.log(name + " has logged in at age " + age);
}
login("Aryan", "password", 18);
login("Aryan", "password");
// login(); - throws an error because the function requires two arguments instead of assuming undefined in normal JS
var inputUser = function (name, email) {
    console.log(name + " has email " + email);
    return name + " has email " + email;
};
// The never type represents values which are never observed. In a return type, this means that the function throws an exception or terminates execution of the program.
function throwError(message) {
    throw new Error(message);
}
