
//Shallow copy copies only the first level. Nested objects are still copied by reference.
//structuredClone() creates a deep copy of an object. It copies the object as well as all nested objects and arrays, so changes made to the copied object do not affect the original object.

//1. =====================================================

const student = {
    name: "Alice",
    age: 22
};


//1. Create a copy using direct assignment (=).

const CopyStudent = student;
// /When we assign an object using =, a new object is not created. Both variables reference the same object. Therefore, changing one object also affects the other.
//console.log("Copied student :", CopyStudent);

//Change the name in the copied object.
CopyStudent.name = "Alina";

//Print both objects.
console.log("student Object :", student);

console.log("Copied student Object:", CopyStudent);


//Explain why both objects changed or didn't change.
console.log("When we assign an object using =, a new object is not created. Both variables reference the same object. Therefore, changing one object also affects the other.");


//// 2.======================================================
const employee = {
    name: "John",
    salary: 50000,
    department: "IT"
};

//1. Create a shallow copy using the spread operator.
const employeeCopy = {...employee};  

//2. Change only the salary.
employeeCopy.salary=35000;

//3. Print both objects.
console.log("original object :", employee);

console.log("shallow Object:", employeeCopy);
//
// Explain why the original object remains unchanged.
//The original object remains unchanged because the spread operator creates a new object instead of copying the reference. Therefore, changing a top-level property in the copied object does not affect the original object.



//3 ======================================================
const user = {
    name: "Rahul",
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
};

//Create a shallow copy.
let userCopy ={...user};

//Change the city in the copied object.
userCopy.address.city = "Pune";

//Print both objects.
console.log("original user object :", user);
console.log("shallow user Object :", userCopy);

//Draw the memory diagram.

//Explain why the original object also changes.
//Because { ...user } creates a shallow copy.
//The top-level object is copied, but the nested address object is still shared.
//Both user.address and userCopy.address point to the same nested object.//shared same memory


//4 ======================================================
const products = [
    {
        name: "Laptop",
        price: 50000
    },
    {
        name: "Phone",
        price: 25000
    }
];

// Create a shallow copy.
let ProductCopy = [...products];  //creates a new array, but it does not create new copies of the objects inside the array.

// Change the price of the first product.
ProductCopy[0].price = 70000;

//Print both arrays.
console.log("original Product Array :", products);
console.log("shallow Product Array :", ProductCopy);


//Explain why both arrays changed.
//The spread operator creates a new array, but the objects inside the array are still shared by reference. Therefore, modifying a nested object affects both the original and copied arrays. This is called a shallow copy.
//


//5.======================================================
const company = {
    name: "OpenAI",
    employees: [
        {
            name: "Alice",
            skills: ["JavaScript", "React"]
        }
    ]
};

//1. Create a deep copy using structuredClone().
const DeepCompany = structuredClone(company);


// Add a new skill "Node.js" to the copied object.
DeepCompany.employees[0].skills.push("Node.Js");

// Verify that the original object is unchanged.
console.log("Company Object :", company);
console.log("Company deep Object:", DeepCompany);


//Repeat the same task using a shallow copy and compare the results.
ShallowCompany= {...company};
ShallowCompany.employees[0].skills.push("Typescript");
console.log("Company Object :", company);
console.log("Company Shallow Object:", ShallowCompany);

//Explain when you would choose a shallow copy versus a deep copy in a real-world application.

//I use a shallow copy when I only need to modify top-level properties because it is faster and simpler. I use a deep copy when I need completely independent nested objects or arrays, so changes to nested data don't affect the original.

//1. When to use a Shallow Copy
//Use a shallow copy when you only need to change top-level properties.

//2. When to use a Deep Copy

//Use a deep copy when your object contains nested objects or arrays and you need to modify those nested values independently.