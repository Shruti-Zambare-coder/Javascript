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
// 


 
