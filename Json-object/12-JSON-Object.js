

// To convert a JavaScript object into JSON, use JSON.stringify().

// JSON.stringify() → Object ➜ JSON String
// JSON.parse() → JSON String ➜ JavaScript Object

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
console.log(" product name :", ObjectResponse.name);

//3. Print the product price.
//4. Print the data type after conversion.
