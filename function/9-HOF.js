
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

// 8.

