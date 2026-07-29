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
let a22= "JavaScript";
let position = a22.indexOf("Script");
console.log(position);

//22.Find the position of "Developer".
let a33="Full Stack Developer";
let devPosition = a33.indexOf("Developer");
console.log(devPosition);

//23.Check whether a sentence contains "React".
let a44 = "Hey I am learning React JS";
let checkReact = a44.includes("React");
console.log(checkReact);

//24.Check whether a URL starts with "https".
let URL ="http://github.com/Shruti-Zambare-coder/Javascript";
let httpsCheck = URL.includes("https");
console.log(httpsCheck);

//// ==================================================  Part 5: Trim  ==================================================
//trim() removes whitespace from the beginning and end of a string. It does not remove spaces between words.

//26.Remove the extra spaces.
let username = "     Rahul     ";
let extraSpace = username.trim();
console.log(extraSpace);


// 27.Print the length before and after trimming.
console.log("Before Trim:", username.length);

let length = extraSpace.length;
console.log("After trim:" , length);

//28. Remove the spaces.
let emailID = "   admin@gmail.com   ";
let noSpaceEmail = emailID.trim();
console.log(noSpaceEmail);

//// ==================================================   Part 6: Split  ==================================================
//split() breaks the string into an array.

//29 Split: HTML,CSS,JavaScript into an array.
let webTech = "HTML,CSS,JavaScript";
let arraywebTech = webTech.split(",");
console.log(arraywebTech);

// 30.Split:using spaces.
let colors ="Red Green Blue";
let colorsArray = colors.split(" ");
console.log(colorsArray);


// 31.Split:01-02-2025 into day, month, year.
let date= "01-02-2025";
let arraydate= date.split("-");
console.log(arraydate);

console.log("Day:", arraydate[0]);
console.log("Month:", arraydate[1]);
console.log("Year:", arraydate[2]);

// 32.Count how many skills are available after splitting.
let skills = "HTML,CSS,JavaScript,React,Node";
let arraySkills = skills.split(",");
console.log(arraySkills);
console.log("Total Skills" , arraySkills.length);

//// ================================================== Part 7: Concatenation  ==================================================
//cconcat() joins strings together.
// " " adds a space.


// 33. Join first name and last name.
let fname = "Shruti";
let lname = "Zambare" ;
let fullN = fname.concat(" " , lname);  

console.log("My Full name:" , fullN);



// 34. Join: Hello and World with a space.

let fWord = "Hello";
let sWord = "World";

let word = fWord.concat( " ", sWord );
console.log(word);



//35. Create the following sentence using variables:
//Hi, my name is Rahul and I am learning JavaScript.
let course1 = "Javascript";
// console.log('My name is ${fname} and I am learning ${course1}'); // '' not working
console.log(`My name is ${fname} and I am learning ${course1}`);
console.log("My name is " + fname + " and I am learning " + course1 + ".");

//// ================================================== Part 8: Real-Life Examples ==================================================

// 36.Create an email: firstname.lastname@gmail.com using variables.
let crateEmail = `${fname.toLowerCase()}.${lname.toLowerCase()}@gmail.com`;
console.log(crateEmail);

// 37. Create a username by joining: First Name , Birth Year Example Rahul1999
let Birth = 1995;
let nameJoin = fname.concat(Birth);
console.log(nameJoin);

// 38.Remove all spaces from:
// Full Stack Developer
let aaa3 = "Full Stack Developer";
let removeSpace = aaa3.replaceAll(" ", "");
console.log(removeSpace);

// 39.Convert:
// javascript
// into
// JavaScript

//40. Capitalize the first letter of your city.

//// ================================================== Part 8:  Interview Levels ==================================================

let str = "JavaScript";
console.log(str.slice(4)); //Script

console.log(str.substring(4, 10)); // Script

let str1 = "Hello";

console.log(str1.charAt(1)); // e
console.log(str1[1]);// e

let str2 = "JavaScript";
console.log(str2.includes("script")); //false

let str3 = "JavaScript";
console.log(str3.toUpperCase().slice(4)); //SCRIPT










