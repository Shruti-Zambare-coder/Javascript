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

//callback
function helloConcat(user){
    console.log("Hello " + user);
}

//HOF
function greetUsers(arr, callback){
     return arr.forEach(callback);
}

greetUsers(users, helloConcat);


//6. ========================== Build your own map() ========================== . 
let numbers = [2,4,6,8,10];
// callback Triple of every number
function triple(number) {
   return number * number * number;
}

// Half of every number
function halfNumber(number) {
   return number / 2;
}

// HOF
function modifyArray(arr, callback) {
   return numbers.map(callback);
}
console.log("Given Numbers" , numbers);
console.log("triple Number:" , modifyArray(numbers, triple));
console.log("half Number:" , modifyArray(numbers, halfNumber));

// Q7. ========================== Discount Calculator ==========================

let prices = [100,200,300,400];
//callbak
function discount10(price) {
    return price - (price * 10 / 100);
}

function discount18(price) {
    return price - (price * 18 / 100);
}

function gst(price) {
    return  price + (price * 18 / 100);
}



// HOF
function CalPrice(priceArray, callback) {
    return priceArray.map(callback);
}
console.log("Price" , prices);
console.log("10% Discount Prices:" , CalPrice(prices, discount10));
console.log("18% Discount Prices:" , CalPrice(prices, discount18));
console.log("Price after adding 18% gst" , CalPrice(prices, gst));


// 8. ========================== Student Marks.==================================

let marks = [35,48,70,90,22];

//callback 
function GraceMark(mark) {
  return mark + 5;
}

//callback 
function PercentageMark(mark){
 return mark + "%";
}

//callback 
function doubleMark(mark){
   return mark  * 2 ;
}
//HOF
function calMarks(marksarray, callback) {
    return marksarray.map(callback);
    
}
console.log("Marks:" , marks);
console.log("Grace Marks:" , calMarks(marks, GraceMark));
console.log("Percentage:", calMarks(marks, PercentageMark));
console.log("Double Marks:", calMarks(marks, doubleMark));


//9 . ==================================  String Modifier ================================== 
let names = ["amit","rohit","pooja"];

//callback
function NameUppercase(nm) {
  return nm.toUpperCase();
}
function NameLowercase(nm) {
  return nm.toLowerCase();
}

// Add Mr./Ms.
function NamePrifix(nm){
    return ("Mr./Ms. " + nm);
}

//HOF
function modifyNmes(nameArray, callback){
   return nameArray.map(callback);
}
console.log("names:" , names);
console.log("Names in Uppercase:" , modifyNmes(names, NameUppercase));
console.log("Names in Lowercase:" , modifyNmes(names, NameLowercase));
console.log("Names in Lowercase:" , modifyNmes(names, NamePrifix));


//10. . ================================== Area Calculator . ==================================

//callback
function squareArea(length){
   return length * length ;
}
function rectangleArea(width ,  height){
   return width * height;
}
function circleArea(radious){
  return  3.14 * radious * radious
}

//HOF
function findArea(callback, ...values) {
   return callback(...values);
 
}
console.log("Sqaure area : " , findArea(squareArea, 40));
console.log("Rectangle  area : " , findArea(rectangleArea, 20, 30));
console.log("circle area : " , findArea(circleArea, 17));