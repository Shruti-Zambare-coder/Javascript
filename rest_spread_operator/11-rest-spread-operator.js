
//1. ================== You are building a user profile page. When the user updates their city, you should not mutate the original object. Instead, create a new object with the updated city.
//Immutability means not modifying the original object or array. Instead, we create a new copy with the required changes.
const user = {
  id: 101,
  name: "John",
  city: "Delhi"
};

// Update city to "Mumbai"
// Object.freeze(user);
// user.city = "Mumbai";
console.log("Updated user object", user);

// Create a new object with updated city
const updatedUser = {
  ...user,  //the spread operator (...) to copy all properties from the original object into a new object.
 city: "Mumbai"
};


//updatedUser.city = "Mumbai";
console.log("New object" , updatedUser);

//2. ==================  Combining Product Lists (Spread Operator)

const electronics = ["Laptop", "Mobile"];
const accessories = ["Mouse", "Keyboard"];

const ProductList = [...electronics ,...accessories];
console.log("Product List", ProductList);



//3. ======================================== Dynamic Shopping Cart Total (Rest Operator)

//A shopping cart can contain any number of item prices. Create a function that accepts unlimited prices and returns the total amount.

function cartTotal(...price) {
    let totalPrice = price.reduce((accum, currentPrice) => {
        return accum = accum + currentPrice;
    }, 0);

    console.log("Total:", totalPrice);
}

cartTotal(100, 200, 300);
cartTotal(50, 20);
cartTotal(1000);


//4. ============================= Extract User Information (Rest Operator + Destructuring)
//  Extract User Information (Rest Operator + Destructuring) 
// Scenario Your application receives a user object, but an API only needs the user's name. Store the remaining properties in another object.
const user1 = {
  id: 1,
  name1: "Alice",
  email: "alice@gmail.com",
  role: "Admin"
};

console.log("Before extract" , user1);

// Extract name and store the remaining properties
const { name1 , ...remainingUser } = user1;


console.log("Extracted Name:", name1);
console.log("Remaining User:", remainingUser);
console.log("Original User:", user1);



// 5. ======================================== 5. Passing Data to a Function (Spread Operator)
//A function expects three separate arguments, but the values are stored in an array. Pass the array values correctly to the function.
function introduce(name, age, city) {
  console.log(`${name} is ${age} years old and lives in ${city}`);
}

const person = ["Rahul", 24, "Pune"];


// Call the function
introduce(...person); 
//The spread operator (...) expands an array into individual elements, allowing us to pass them as separate arguments to a function.

