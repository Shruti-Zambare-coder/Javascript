

// To convert a JavaScript object into JSON, use JSON.stringify().

// JSON.stringify() → Object ➜ JSON String
// JSON.parse() → JSON String ➜ JavaScript Object




/* Valid JASON
✅ Keys must always be in double quotes.
✅ Strings must be in double quotes.
❌ No trailing commas after the last key-value pair.
✅ Valid JSON data types are:
String ("John")
Number (25)
Boolean (true, false)
Null (null)
Object ({})
Array ([])
 */


//1.================================= You are sending user information to a server through an API. APIs typically expect data in JSON format.

const user = {
  id: 101,
  name: "Rahul",
  age: 24,
  city: "Pune"
};


// Convert the JavaScript object into a JSON string.
let JsonUser = JSON.stringify(user);

// Print the JSON string.
console.log("converted object into a JSON string :", JsonUser);

// Print the data type of the converted value.
console.log("Data type of the converted value :" , typeof(JsonUser));


//2. =================================  Read JSON Data from an API
//Your application receives the following JSON response from a server.

const response = '{"id":1,"name":"Laptop","price":55000}';


// 1. Convert the JSON string into a JavaScript object.
let ObjectResponse = JSON.parse(response);
console.log("Convreted JSON into jS Object : ", ObjectResponse);

//2. Print the product name.
console.log("Product name :", ObjectResponse.name);

//3. Print the product price.
console.log("Product Price: ", ObjectResponse.price);

//4. Print the data type after conversion.
console.log("data type after conversion :", typeof(ObjectResponse));


//3. ========================================= Question 3: Find Invalid JSON

//A junior developer has written the following JSON examples. Some are valid, while others are not.
// Identify which ones are valid JSON and explain why the invalid ones fail.
/*
A
{
    "name":"John",
    "age":25
}
// Valid: Keys are enclosed in double quotes, values are valid, and there is no trailing comma.


B
{
    name:"John",
    age:25
}
// Invalid : Keys (name and age) are not enclosed in double quotes. In JSON, all keys must be in double quotes.

C
{
    "name":"John",
    "age":25,
}
// Invalid here is a trailing comma after "age":25,. JSON does not allow a comma after the last property.


D
{
    "name":"John",
    "isStudent":true
}
//VAlid : Keys use double quotes, and true is a valid JSON boolean value.

*/


//Question 4:============================================= Store Student Data as JSON

//Create a JavaScript object representing a student.
// The object should contain:
// id
// name
// course
// marks
// isPassed

//1. Create the object.

let student = {
      ID :101,
      name : "Shourya" ,
      course : "MERN Stack",
      marks : 97,
      isPassed : true
}

//2.: Convert object to JSON string
let studentJSON = JSON.stringify(student);
console.log("Converted student obejct to JSON :" , studentJSON);

//3.Convert the JSON string back into an object.
let StudentObject = JSON.parse(studentJSON);
console.log("JSON to object :", StudentObject);

//4. Print the student's name and marks.
console.log("Student name: " + StudentObject.name  + " and Marks :" + StudentObject.marks);


// 5. =======================  Build a Product Catalog
const products = `[
  {
    "id":1,
    "name":"Laptop",
    "price":50000
  },
  {
    "id":2,
    "name":"Mouse",
    "price":800
  },
  {
    "id":3,
    "name":"Keyboard",
    "price":1500
  }
]`;


//1. Convert the JSON string into a JavaScript array.
let JSArray = JSON.parse(products);
console.log("Converted the JSON string into a JavaScript array:", JSArray);

//2. Print the names of all products using a loop.
for(let i = 0; i < JSArray.length; i++) {
     console.log(JSArray[i].name);
} 

//3. Find the total price of all products.
let totalPrice = JSArray.reduce((accum , pricevalue)=> {

  return accum = accum + pricevalue.price;

}, 0 );
console.log("Total Price:", totalPrice);

//4. Print the product with the highest price
let highestPrice = JSArray.reduce((accum, priceValue) => {
    if (accum.price < priceValue.price) {
        return priceValue;
    } else {
        return accum;
    }
});

console.log("Highest Price Product:", highestPrice);