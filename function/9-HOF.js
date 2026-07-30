
//Q1 ================================== Using forEach(), print every element of==================================

let array = [10,20,30,40];
array.forEach((num) => {
    console.log(num);
});

//2.================================== Using forEach(), print the square of every number.==================================

let square = [];

array.forEach((num)=>{
    return square.push(num * num);
});
console.log(square)

//3.================================== Using map(), convert into double   =============================
let arraymap = [5,10,15];

let double = [];

array.map((digit)=> {
      double.push(digit * 2);
});

console.log("double",double);

//4.================================== Using map(), convert into uppercase.  =============================

let name = ["ram","amit","pooja"];

let uppercaseName;

uppercaseName = name.map((currentName, currentIndex)=>{
    // console.log(currentIndex);
    return currentName.toUpperCase();
});
console.log('toUppercaseNames', uppercaseName);
console.log('orginal Array', name);



//5.Using map(), add 100 to every number..==================================
let array1 = [45,758, 55 , 77, 63];
let incrase100 = array1.map((currentValue, currentIndex)=> {
return currentValue + 100;
});

console.log('After incrasing', incrase100);

//6 ..==================================filter  Return only odd numbers.==================================
let array2 = [10,15,20,35,40];

let OddValues = array2.filter((currentElement)=>{
    return  currentElement % 2 !== 0;

});

console.log("Odd no.s" , OddValues);

//7 ..==================================filter  Return only odd numbers.==================================
let array7 = [100,15,20,305,40];
let GraterNo = array7.filter((currentElement)=>{
    return  currentElement > 50;

});
console.log("No.s grater than 50" , GraterNo);

//8 ..================================== Filter all negative numbers. ==================================

let array8 = [14, -15, 0, 83, -10, 77, -46, 35];
let NegativeNo = array8.filter((currentElement) => {
    return currentElement < 0 ;
});
console.log("Negative" , NegativeNo);


// 9. ==== ==== ==== ====  return only students who scored more than 60.======== ====
let marks = [45, 89, 53, 87, 63, 50, 33];
let marks60 = marks.filter((currentElement)=> {
  return currentElement > 60;
  });

  console.log("students who scored more than 60" , marks60);

// 10 =========================================== Return only products costing more than ₹1000.==================================

let prices = [800, 1230, 850, 2500, 1500, 1200];

let costlyPrice = prices.filter((currentPrice)=> {
    return currentPrice > 1000; 
});
  console.log("products costing more than ₹1000 are :" , costlyPrice);

  // ================================================= find() =========================================
//find() returns the first element in an array that matches the given condition. If no element matches, it returns undefine 


  // 11 ========= Find the first even number. .========

let nums = [45, 89, 53, 87, 63, 50, 33];
let FirstEven = nums.find((currentnum)=>{
    return currentnum % 2 == 0;
});

console.log("the first even number:" , FirstEven);

// 12 ======Find the first student whose marks are greater than 80.===
let newMarks =[{name: "Student1" , marks: 80},
               {name: "Student2", marks: 38},
               {name: "Student3", marks: 68},
               {name: "Student4", marks:46},
               {name: "Student5", marks:99 },
               {name: "Student6", marks:86},
               {name: "Student6", marks:85},
               {name: "Student7", marks:33}];
let fistMarks = newMarks.find((currentMarks) => {
    return currentMarks.marks > 80;
});
console.log("first student whose marks are greater than 80" , fistMarks);

// Q13=========== Find the first negative number.==========

let arrayNeg = [14, -15, 0, 83, -10, 77, -46, 35];
let Firstnegative = arrayNeg.find((currentnum)=>{
    return currentnum <= 0;
});
console.log("the first negative number:" , Firstnegative);


// ================================================= Some() =========================================
//some() returns the 

//14 === Check whether the array contains any negative number.=======
let anyNeg = arrayNeg.some((currentno)=>{
    return currentno < 0;
});
console.log("array contains any negative number" , anyNeg);

//Q15 === Check whether any student scored 100.  ======
let student = newMarks.some((currentMarks)=>{
    return currentMarks.marks = 0;
});
console.log("student scored 100" , student);

//Q16 ===== Check whether any product costs more than ₹5000 ======
let pricesCost = prices.some((currentPrice)=>{
    return currentPrice > 5000;
});
console.log("any product costs more than ₹5000 ", pricesCost);



// ================================================= every() =========================================

//Q17 Check whether all numbers are positive.
let noArray = [55, 58, -8, 23, 69, -98];
let postiveNoArray = noArray.every((currentElement)=>{
    return currentElement > 0;
});
console.log("all numbers are positive " , postiveNoArray);


// Q18 Check whether all students passed (pass marks 35)
let Subjectmarks = [45, 89, 53, 87, 63, 50, 39];
let StudentPass = Subjectmarks.every((currentElement)=>{
    return currentElement > 35;
});
console.log("all students passed " , StudentPass);

// ================================================= sort() =========================================
//19. Sort the following numbers in ascending and descending order.

let givenArray =[45,12,78,1,99,25];

let ascending = [...givenArray].sort((a, b) => a - b);
let descending = [...givenArray].sort((a, b) => b - a);

console.log("Ascending:", ascending);
console.log("Descending:", descending);

