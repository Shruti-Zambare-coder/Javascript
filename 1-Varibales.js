//
let name = "shruti";
let age = 30;
let city = "Kolhapur";

console.log("My Name is", name); 
console.log("My age is", age ); 
console.log("I live in", city); 

//2. Store two numbers in variables.
let no1 = 20;
let no2 = 15;

console.log("First Number : ", no1); 
console.log("First Number : ", no2); 


//3. Create variables using:
let myName = "Shruti"; //camelCase
let my_nmae = "Shruti" //snake_case
let MyName = "shruti" //PascalCase
console.log("My Name is", myName); 
console.log("My Name is", my_nmae); 
console.log("My Name is", MyName); 

//4. Create a constant called country.Try changing its value.
const country = "India";
 //country = "Dubai"; // Uncaught TypeError: Assignment to constant variable.


 //5. Store:
 let stringValue = "hi"; //String
 let numberValue = 45;  //Number
 let BoolenValue = true ; //Boolean
 let NullValue = null  ; //null
 let UndefinedValue = undefined;//Undefined

console.log("Type of String is: ", typeof stringValue); //string
console.log("Type of Nuember is", typeof numberValue);
console.log("Type of Boolen value is" , typeof BoolenValue);
console.log("Type of UndefinedValue value is", typeof undefined);

//6.Arithmetic Operators
// Take two numbers.

 let newNo1 = 20;
 let newNo2 = 50;
//let newNo1 = Number(prompt("Enter first number:"));
//let newNo2 = Number(prompt("Enter second number:"));

console.log("addition :", (newNo1 + newNo2));
console.log("Subtraction : ", newNo1 - newNo2);
console.log("Multiplication :", newNo1 * newNo2);
console.log("Division :",  newNo1 / newNo2);
console.log("Modulus :",  newNo1 % newNo2);



let width = 5 ;
let Length  = 45;
//let width = Number(prompt("Enter width"));
//let Length  = Number(prompt("Enter Length "));

//7.Calculate the area of a rectangle.
console.log("Area is :",  width * Length);

//8.Calculate the perimeter of a rectangle.
console.log("perimeter is :",  (2 * (width + Length)));

//9.Calculate the area of a circle.
let radious = 20;
//let radious = Number(prompt("Enter radious"));

//Calculate the area of a circle.
//  pie = 3.14;
console.log("Perimeter is :",  ((Math.PI * radious * radious)));



// 10.Convert hours into minutes.
 let hours = 5;
// let hours = Number(prompt("Enter hours"));
console.log("Total Minutes" ,(60 * hours));
console.log(hours + " hours = " + (60 * hours) + " minutes"); 


// 11. Convert hours into seconds.

let min = 120;
// let min = Number(prompt("Enter Minutes"));
console.log(min + " Miuntes = " + (60 * min) + " seconds " );

// 12. Convert kilometers into meters.

let kilometer = 10;
// let kilometer = Number(prompt("Enter the kilometers"));
console.log(kilometer + " Kilomters = " + (1000 * kilometer) + " Meters"); 

// 13.Convert Celsius into Fahrenheit.
let celsius  = 95;
// let celsius = Number(prompt("Enter the Celsius"));
console.log(celsius + " Celsius = " + (( celsius * 9/5) + 32) + " Fahrenheit"); 

// Part 3: Assignment Operators

// Perform
let marks = 50;
//marks += 10;
console.log("After += 10: " + (marks += 10)); // 60

marks -= 5;
console.log("After -= 5: " + marks); //55 

marks *=2;
console.log("After *=2: " + marks); //110 

marks /= 5;
console.log("After /= 5: " + marks); //22 

marks %=3;
console.log("After %=3: " + marks); //1 

//15. Increase it by ₹5000.
let salary = 25000;
salary += 5000;
console.log("After incraseing the salary = ", salary); //30000

// 16. Decrease the salary by ₹2000 using an assignment operator

salary -= 2000;
console.log("After Decreasing the salary by ₹2000 using an assignment operator = ", salary); //28000;


//Part 4: Comparison Operators
//17 Compare two numbers using:
let CompareNo1 = 20;
let CompareNo2 = 30;
// let CompareNo1 = Number(prompt("Enter first no1."));
// let CompareNo2 = Number(prompt("Enter first no2."));

console.log("No 1 > No2 :" , CompareNo1 > CompareNo2 );
console.log("No 1 < No2 :" , CompareNo1 < CompareNo2 );
console.log("No 1 >= No2 :" , CompareNo1 >= CompareNo2 );
console.log("No 1 <= No2 :" , CompareNo1 <= CompareNo2 );
console.log("No 1 == No2 :" , CompareNo1 == CompareNo2 ); //== compares only the value (type conversion is allowed).
console.log("No 1 === No2 :" , CompareNo1 === CompareNo2 ); //=== compares both the value and the data type (no type conversion).in JavaScript because it is strict equality and avoids unexpected type conversions.
console.log("No 1 != No2 :" , CompareNo1 != CompareNo2 );
console.log("No 1 !== No2 :" , CompareNo1 !== CompareNo2 ); //Use !== for strict inequality.


//18.Check whether two variables have equal values.
let num1 = 10;
let num2 = "10";
console.log("Using == :", num1 == num2); // == (Loose Equality) compares only the value. It converts the data types if needed. 10 == "10" → true

console.log("Using ===:", num1 === num2); // === (Strict Equality) compares both the value and the data type. It does not convert data types.10 === "10" → false


// 19. Check whether age is greater than 18.

let age1 = 50;
console.log(age1 > 18);

//Part 5: Logical Operators
let ageLicense = 22;
let hasLicense = true;

// Check if the person can drive
let canDrive = ageLicense >= 18 && hasLicense;

console.log("Can Drive:", canDrive);

//22. Check if a student is eligible for placement.
//Conditions:

let cgpa = 8;
let agecgpa = 10;
let placement = agecgpa >= 18 && cgpa >= 7;

console.log("Eligible for Placement:", placement);

//23. Check whether a number is between 10 and 50.
no1 = 80;
let result = no1 >=10 && no1 <= 50 ; 
console.log("number is between 10 and 5 ?", result);

// 24.Check whether a user is logged in OR is an admin.

let logged = false;
let admin = false;

if (logged || admin) {
    console.log("Access Granted");
} else {
    console.log("Access Denied");
}


//24. Use the NOT operator on
console.log(!true);
console.log(!false);

// Part 6: Increment & Decrement
let count = 10;

console.log("Increment", count++); //10 
console.log(count);//11


console.log("Decrement : ", count--);//11
console.log(count);//11

//26 Predict the output.s

let x = 5;
console.log(x++);
console.log(x);


// 29.Predict the output.
let x1 = 5;
console.log("before :", ++x1); //6
console.log(x1);

//30 Predict the output.
let a = 10;

console.log(a++); //  10 =11
console.log(++a); // 12
console.log(a--); // 12 == 11
console.log(--a); //10


//31. Calculate simple interest.
// let principal = prompt("Enter the principal Amount");   // P
// let rate = prompt("Enter the rate");        // R
// let time = prompt("Enter the time"); 

let principal = 2000;   // P
let rate = 5;        // R
let time = 2; 

let simplIntreste = ((principal * rate * time) / 100);
console.log(" simple interest" , simplIntreste);


//32.Calculate total marks of five subjects.
let maths= 66;
let english = 88;
let physics = 74;
let it = 90;
let chemistry = 78;

let total = maths + english + physics + it+ chemistry;
console.log("Total Marks", total);

//33. Calculate percentage.
let percentage= (total / 500) * 100;
console.log("Percentage : ", percentage +"%");

//34. Calculate average marks.
let average =  total /5;
console.log("Average", average);

// 35.Swap two variables using a third variable.
 let aa= 50;
 let bb= 70;
 let swap = aa;
  aa = bb,   // aa > 20 
  bb = swap; 
console.log("After swapping : aa=", aa + " and bb =" , bb);

// 36. Swap two variables without using a third variable.
 let cc= 170;
 let dd = 45; 
[cc, dd]= [dd , cc]; //Destructuring assignment is an ES6 feature. It allows us to swap two variables in a single line without using a temporary variable. The values on the right side are evaluated first, then assigned to the variables on the left side.

console.log("After swapping : cc=", cc + " and dd =" , dd);

//37 . Store the price of a product. Add 18% GST.

//let productPrice = Number(prompt("Enter product price"));
let productPrice = 450
let gst = (productPrice * 18) /100;
console.log("GST amount", gst);

let finalPrice = productPrice + gst;
console.log("Final Amount: " , finalPrice);

//38 .Store your monthly salary.
//let msalary = Number(prompt("Enter Montly Salary."))
let msalary = 49000;
let rent = 10000;
let food = 12000;
let internet = 2200;

let balance = msalary - (rent + food + internet) ;
console.log("Remaning Balance:" , balance);


//39. Calculate the age after 10 years.
// let currentAge =  Number(prompt("Enter current age"));
 let currentAge = 20;
let futureAge = currentAge + 10;
console.log("Future age after 10 years", futureAge); 

// 40 Create variables for:
let vName = "shruti";
let vAge = 30;
let Course = "React JS";

console.log("My name is " + vName + ". I am " + vAge + " years old and learning " + Course + ".");

// 41.Predict the output.
let a1 = "5";
let b1 = 5;

console.log(a1 == b1); // true
console.log(a1 === b1); // false; 

// 42.Predict the output.
console.log(10 + "5"); // 105
console.log("10" - 5);  // 5
console.log("10" * 2); // 20
console.log("10" / 2); //5


// 43. Predict the output.
let xA = 5;
let yA = 10;

console.log(xA++ + ++yA); //16

//44. Predict the output.
let a2 = true;
let b2 = false;

console.log(a2 && b2); //false
console.log(a2 || b2); // true
console.log(!a2); //false

//45.Predict the output.
let xs = 10;

xs += 5; //15
xs *= 2;  //30
xs /= 3;  //10

console.log(xs); //10






























