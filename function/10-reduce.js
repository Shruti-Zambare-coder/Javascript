
// reduce() is an array method that reduces all elements of an array into a single value, such as a sum, product, maximum, or object.
//array.reduce((accumulator, currentValue) => {
//     return updatedValue;
// }, initialValue);

//============================== 1.Find the Total Even Numbers ==============================
const numbers = [12, 7, 18, 25, 30, 41, 56];
let totalEven  = numbers.reduce((count, no) => {
    if (no % 2 == 0) {

        count ++;
    }
    return count;
}, 0);

console.log("Total Even Numbers:", totalEven );



//=============================   2: Find the Total Odd Numbers ============================= 

const numbers1 = [15, 8, 21, 40, 33, 18, 51];
let totalOdd = numbers1.reduce((count, num) => {
    if (num % 2 != 0) {
        count ++;
    }
    return count;
},0);
console.log("Total Odd Numbers:", totalOdd );


//=============================   3: Find the Average Marks ============================= 
const marks = [78, 85, 92, 66, 89];
let Average = marks.reduce((avg ,mark )=>{
   return avg = avg + mark;

},0);
let avgmark = Average / marks.length;
console.log("Total Marks Avg:", avgmark );


//=============================   4: Find the Total Price of Products ============================= 
//Calculate the total bill amount.
const products = [
    { name: "Laptop", price: 55000 },
    { name: "Mouse", price: 1200 },
    { name: "Keyboard", price: 2500 },
    { name: "Monitor", price: 18000 }
];


let TotalAmount = products.reduce((total, product)=> {
   return total + product.price;
   
},0);
console.log("the total bill amount:", TotalAmount );

//=============================   5:Count Positive and Negative Numbers  ============================= 
const numbers3 = [10, -5, 7, -8, 20, -1, 3];
let positive = 0;
let negative = 0;
numbers3.reduce((num, value) => {
    if (value >= 0) {
        positive++;
    } else {
        negative++;
    }
    return num;
}, 0);

console.log("Postive No:" , positive );
console.log("Negative No:" , negative );

//=============================   6:Convert an Array into an Object  ============================= 

const users = [
    { id: 101, name: "Rahul" },
    { id: 102, name: "Priya" },
    { id: 103, name: "Amit" }
];

let userObject = users.reduce((accum, user)=>{
   accum[user.id] = user.name; 
   return accum;
},{});

console.log("Object:" , userObject );

//=============================   7: Count the Occurrence of Each Number ============================= 

const numbers4 = [1, 2, 3, 2, 1, 4, 2, 3, 1];

let OccurrenceNum = numbers4.reduce((accum , currentValue)=> {
    if(accum[currentValue]){
       accum[currentValue]++;
    }
    else{
        accum[currentValue] =1;
    }
    return accum;
},{});
console.log("Occurrence", OccurrenceNum);


//=============================  8: Find the Shortest Student Name  ============================= 

const students = [
    "Rahul",
    "Amit",
    "Priya",
    "Om",
    "Karan"
];

let shortesName = students.reduce((accum , student) =>{
    console.log("Accum", accum);
    console.log("student", student);
 if(student.length < accum.length){
    return student;
 }
 else {
    return accum;
 }

},);
console.log("Shortest name is: ", shortesName);

//=============================  9: Create a Comma-Separated String  ============================= 

const cities = [
    "Mumbai",
    "Pune",
    "Nagpur",
    "Nashik"
];

let string = cities.reduce((accum, city)=> {
      
},);



//============================= 10 . Find the Student with Highest Marks ============================= 
const students1 = [
    { name: "Rahul", marks: 82 },
    { name: "Priya", marks: 95 },
    { name: "Amit", marks: 76 },
    { name: "Sneha", marks: 91 }
];

let highestMarks = students1.reduce((accum, student)=> {
    if(accum.marks < student.marks) {
        return student;
    }else {
        return accum;
    }
},);

console.log("Highest Marks", highestMarks);


