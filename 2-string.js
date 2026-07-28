9// ================= String =============================
//1.Create a variable called fullName and store your full name.

let fullName = "Shruti Zambare";
console.log("Full Name:", fullName);

//2. Print the length of your name.
console.log("Length" , fullName.length );

//3 .Convert your name into uppercase.
console.log("Uppercase", fullName.toUpperCase());

//4.Convert your name into lowercase.
console.log("Lowercase" ,  fullName.toLowerCase());

//5. Print the first character of your name.
console.log("First Character :", fullName[0]);

// 6. Print the last character of your name.
console.log("Last Character :", fullName[fullName.length-1]);

// 7. Print the character at index 4.
console.log("Character at index 4:", fullName[4]);

//8, Check whether your name contains the letter "a".
console.log(fullName.includes('a'));

//9. Check whether your city starts with "P".
let city = "kolhapur";
console.log(city.startsWith("p")); 
//startsWith() is a string method that checks whether a string begins with a specific character or word. It returns true if the string starts with the given value; otherwise, it returns false.


// 10.Check whether your email ends with .com.
let email = "shrti@gmail.com";
console.log(email.endsWith(".com")) // endsWith() Check whether your email ends with .com.

// ==================================================  Part 2: Extracting Strings ========================= ========================= 

//11. Extract the first 5 characters from your name.
console.log("Extract the first 5 characters " , fullName.slice(0, 5));
//slice() is a string method used to extract part of a string. The first argument is the starting index, and the second argument is the ending index (which is not included).


//12. Extract the last 4 characters from your name.
console.log("Extract the last 4 characters " , fullName.slice(-4)); //-4 means start 4 characters from the end of the string.

//13. Extract your first name from:
let firstName = fullName.slice(0, fullName.indexOf(" "));
 // finds the position of the first space. Then slice(0, indexOf(' ')) extracts all characters before the space, which gives the first name

 console.log(firstName);

 //14. Extract your last name.
 let lastName = fullName.slice(fullName.indexOf(" ") + 1);
 
 console.log(lastName);


 //15. Print only "JavaScript" from:
 let course = "Learn JavaScript Programming";
 let language = course.slice(6, 16);
 console.log(language);



// ================================================== Part 3: Replace  ==================================================
 // replace() is a string method used to replace part of a string with another string. It replaces the first matching occurrence and returns a new string.

//16.Replace "Java" with "Type".
let lang = "JavaScript";
let relpacelanguage = lang.replace("Java" , "Type");

console.log(relpacelanguage);


//17 Replace "India" with "USA".
let a1= "I live in India";
let country  = a1.replace("India" , "USA");
console.log(country);

//18. Replace the first "apple" with "banana".
let fruits = "apple apple apple";

let changeFruit = fruits.replace("apple" , "banana"); //replace() replaces only the first matching occurrence
console.log(changeFruit);

//19.Replace all spaces with -. 
let a11= "JavaScript Full Stack Developer";
let a11Updated = a11.replaceAll(" " , "-");
console.log(a11Updated);


//20 . Replace every comma with a pipe (|).
let ProgrammingLang = "HTML,CSS,JavaScript,React";
let UpdatedProgLang = ProgrammingLang.replaceAll("," , "|");
console.log(UpdatedProgLang);


//// ================================================== Part 4: Searching  ==================================================

// 21. Find the position of "Script".