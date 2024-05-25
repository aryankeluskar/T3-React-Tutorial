// TYPES 
var user = { name: "Aryan", age: 18 };
console.log("Aryan");
console.log(user.name);
var email = "hi@aryan.greenflag";
// this colon is not required because TS can infer the type based on the value assigned to the variable, but it is good practice to specify the type of the variable.
console.log(email);
email.toLocaleUpperCase();
// user.toLocaleUpperCase();
// as you can see, a squiggly line appears under the user object, this is because the user object is not a string and the toLocaleUpperCase() method is not available for objects.
var loggedIn = true;
var fun = "Hello";
fun = 20;
console.log(fun);
