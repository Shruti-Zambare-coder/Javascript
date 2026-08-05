 // =========== Arrow Functions ========================= //

// 1.Convert into Arrow Functions

/* function greet() {
    console.log("Hey Good Morning");
}
greet();  */

// Arrow function
const greet = () => {
 console.log("Hey Good Morning");
}
greet();

// Q2. Convert this into an arrow function.
/* function square(num) {
    return num * num;
}

*/

// Arrow function

const square = (num) => {
   return num * num;

}
 console.log("Hey Good Morning");
console.log(square(45));


//Q3.
/* Convert into an arrow function.
function add(a, b) {
    return a + b;
}
*/

const add = (a, b) => {
 return a + b;
}
console.log(add(4,456));


// 4. Convert into an arrow function.
/* function isEven(num) {
    return num % 2 === 0;
}
*/

const isEven = (num) => {
    return num % 2 === 0;
}
console.log(isEven(45));


//5. Convert into an arrow function.
/* function getLength(str) {
    return str.length;
} */

const getLength = (str) => {
    return str.length;
}
console.log(getLength("Arrow Function"));

// =========================== Part B - Write Using Arrow Functions =========================== 
//6 . Write an arrow function to find the cube of a number.

const calCube = (val) => {
    return val * val * val;
}
console.log(calCube(5));


//7. ==========================  Write an arrow function that returns the largest of two numbers ========================== 

const largestNo = (no1 , no2) => {
    if(no1 > no2) {
        return no1
    }
    else {
        return no2
    }
}
console.log(largestNo(20,15));

//8. ==========================  Write an arrow function that checks whether a number is positive or negative.========================== 

const checkNo = (no) => {
    if(no > 0){
        return "Positive";
    }
    else if(no < 0)
    {
        return "Negative";          
    }
    else{
        return 0;
    }
} 
console.log(checkNo(-10));
console.log(checkNo(0));
console.log(checkNo(45));

//9. Write an arrow function that returns the reverse of a string.

const reverseString = (string) => {
    return string.split("").reverse().join("");
    //split("") → Converts the string into an array.
    // reverse() → Reverses the array.
    //join("") → Joins the array back into a string.
}
console.log(reverseString("hello"));
console.log(reverseString("hello reverse"));


//10. Write an arrow function that converts Celsius into Fahrenheit.
const temp = (celsius) => {
    return ( celsius * 9/5) + 32;
}
console.log(temp(45));
console.log(temp(12));


// ========================= Part C - Arrays + Arrow Functions =======================


//11. Use an arrow function with your custom calculate() function to create a new array that contains the double of every number.

let numbers = [10,20,30,40,50];

//arrow funtion
function calculate(arr, callback) {
    return arr.map(callback);
}
let result = calculate(numbers, (num) => num * 2);
console.log(result);


//12. Using the same array, create a new array containing the square of every number.
let squareNumbers = numbers.map((num) => num * num);
console.log(squareNumbers);

//13. Convert every number into a string.

let stringNumbers = numbers.map((num) => String(num));

console.log(stringNumbers);

//14. Convert every number into

let valueNumbers = numbers.map((num)=> "Value : " + num);
console.log(valueNumbers);


//15 give
let names = ["Rahul","Anjali","Pooja","Ramesh"];

let NamePrifix = names.map((nm) => "Mr./Ms. " + nm);
console.log(NamePrifix);

//================================================  Part D - Arrow Functions with Callback ================================================

//16 

let number16 = 10;
// HOF
function performCalculation(number, callback) {
    //console.log(number, callback);
    return callback(number);
}

// Square
console.log("Square:", performCalculation(number16, (num) => num * num));

//Cube
console.log("Cube:", performCalculation(number16, (num) => num * num * num));

//Multiply by 10
console.log("Multiply by 10:", performCalculation(number16, (num) => num * 10));

//Divide by 5
console.log("Divide by 5:", performCalculation(number16, (num) => num / 5 ));


// 17
let salary = 45000;
//HoF
function salaryCalculation(salary , callback) {
    return callback(salary);
} 
// Add Bonus
console.log("Bouns 5K" ,salaryCalculation(salary, (sal)=> sal + 5000));
// Deduct Tax
console.log("Deduct tax : 18%" ,salaryCalculation(salary, (sal)=> sal -(sal * 18/100 )));
// Add HRA 10%
console.log("HRA 10%" ,salaryCalculation(salary, (sal)=> sal + (sal * 10/100 )));
//Calculate PF 12%

//18
let name18 = "Dhoni";
function processName(name, callback) {
   return callback(name);
}
//Convert to Uppercase
console.log("Convert to Uppercase :", processName(name18,(nm) => nm.toUpperCase()));

//Convert to Lowercase
console.log("Convert to Uppercase :", processName(name18,(nm) => nm.toLowerCase()));

//Add "Mr."
console.log("Add Mr. :", processName(name18,(nm) => "Mr." + nm));

//Find Length
console.log("Find Length :", processName(name18,(nm) => nm.length));

//19.
let marks = [45,78,90,35,67];
//Add 5 marks

function marksCal(mark , callback){
    return mark.map(callback);
}
//Add 5 marks
console.log("Add 5 marks" , marksCal(marks,(res) => res + 5 ));

//Convert into Pass/Fail
console.log("Result:", marksCal(marks,(res) => res >= 40 ? "PASS" : "FAIL"));

//Multiply by 2
console.log("Multiply by 2",  marksCal(marks,(res) => res * 2 ));

// Convert into Grade
let grade = marksCal(marks,(res) => {
    if(res >= 85) {
        return "A";
    }
   else if(res >= 60) {
        return "B";
    }
    else if(res >= 40) {
        return "C";
    }
    else {
        return "FAIL";
    }
}); 

console.log("Grade" , grade);

