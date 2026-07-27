// Q1. ==========================  Welcome Message========================== 


//callback function
function welcome() {
    console.log("welcome to javscript");
}

// higer order fucntion
function welcomProg(func) {
    for (let i = 1; i <= 3; i++) {
        func();
    }

    //func();
    // func();
    //  func();
}

// Calling the HOF
welcomProg(welcome);


// 2. ==========================  Calculator using Callback ========================== 
//callback function
function addition(no1, no2) {
    return no1 + no2;
}
//callback function
function Subtraction(no1, no2) {
    return no1 - no2;
}
//HOF
function performOperation(no1, no2, callback) {
    return callback(no1, no2);
}
console.log(performOperation(145, 55, addition));
console.log(performOperation(457, 100, Subtraction));


//3. ========================== Temperature Converter ========================== 
//callback function
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
//callback function
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
//HOF
function convertTemperature(temp, callback) {
    return callback(temp);
}

console.log(convertTemperature(45, toFahrenheit));
console.log(convertTemperature(145, toCelsius).toFixed(2));


//4. ========================== Salary Calculator ========================== . 

let salary = 50000;
//callback function
function addBonus(salary) {
  return salary + 5000;
}
//callback function
function addTax(salary) {
  return salary - 2000;
}
//HOF
function calculateSalary(salary, callback) {
    return callback(salary);
}

console.log(calculateSalary(salary, addBonus));
console.log(calculateSalary(salary, addTax));


//5. ========================== Greeting  user  ========================== . 
let users = ["Rahul", "Anjali", "Ramesh"];

//HOF
function greetUsers(arr, callback){
    return arr;
}