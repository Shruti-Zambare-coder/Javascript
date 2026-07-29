 // 1.Array of favorite movies
let favoriteMovies = [
  "3 Idiots",
  "Rahena he tere dil me",
  "Speed",
  "vivah",
  "Pushpa",
  "RRR",
  "Jab We met"
];

console.log(favoriteMovies);
console.log("First Movie", favoriteMovies[0]);
console.log("Last Movie:", favoriteMovies[favoriteMovies.length - 1]);
console.log("Total Move" , favoriteMovies.length);


//2.// Array of 10 mobile brands
let mobileBrands = ["Samsung", "Apple", "OnePlus", "Xiaomi", "Vivo",  "Oppo", "Realme", "Motorola",  "Google",  "Nothing"];
// Print the 3rd brand
console.log(mobileBrands);
console.log("3rd Mobile brand Name", mobileBrands[2]);
console.log("5th Mobile brand Name", mobileBrands[4]);
console.log("last Mobile brand Name", mobileBrands[mobileBrands.length-1]);


//3.Create an array of 8 cities you want to visit.
let cities = ["Jaipur", "Kerala", "Nagpur",  "Hyderabad",  "Mumbai",  "Shimla",  "Kashmir",  "Goa"];
console.log("Total No.of cities", cities.length);


//4. Create an array containing your family members' names.
let family = ["Shruti", "Shirish", "Shourya" ,"Shilpa"]
console.log(family[0]);
console.log(family[1]);
console.log(family[2]);
console.log(family[3]);


//5. Create an empty array called tasks.Add 5 daily tasks using push().

let tasks = [];
tasks.push("Exercise","Lunch making" , "Office Work", "Study JavaScript","take care of baby" )
console.log(tasks);


// ====================================== Part 2 - push(), pop(), shift(), unshift() ====================================== 

//6. Food Delivery App

const food = [];
food.push("Pizza", "Burger", "Pasta"); // First customer's order
food.push("Sandwich"); //// Later, another customer orders Sandwich
console.log("List of custom order food", food);


// 7. Online Classroom 
const student = ["Amar" , "Shubham", "Shweta", "Madhu"];
student.push("Priyanka");
console.log("Student List" , student);

// Hospital Queue
const HospitalQueue = ["Rahul", "Amit", "Sneha", "Priya"];
HospitalQueue.shift(); 
//shift() removes the first element from an array. It also shifts the remaining elements one position to the left.
console.log("Hospital Queue" , HospitalQueue); 


// 
const songs = ["Song1", "Song2", "Song3", "Song4"];
songs.pop();
console.log("Songs List" , songs); 

// push()	Add element(s) to the end
// pop()	Remove the last element
// unshift()	Add element(s) to the beginning
// shift()	Remove the first element


// 10 Cricket Team //Captain Dhoni joins at the beginning.

let CricketTeam =['Virat', 'Rohit', 'Gill', 'Hardik'];
CricketTeam.unshift("Dhoni");
console.log("Cricket Team" , CricketTeam);


// ====================================== Part 3 -slicet() ====================================== 
let numberArray = [20 , 50, 89, 45, 77,56, 86, 23, 0, 12,77, 88, 66,23, 11,8, 75, 63, 27];
let firstNoArra= numberArray.slice(0,5);
console.log("Fisrt 5 no : " , firstNoArra);

let lastNoArra= numberArray.slice(-5);
console.log("last 5 no: " , lastNoArra);


let MiddleNoArra= numberArray.slice(7,125);
console.log("Middle 5 no.: " , MiddleNoArra);


// 12.Create an array of weekdays.
//Extract only weekdays from Monday to Wednesday.


