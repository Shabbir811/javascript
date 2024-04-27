 //++++++++++++++++++++++++conversion++++++++++++++++++++++
 
 let score = 22

 console.log(typeof(score)); // output is number


    score = "22"

 console.log(typeof(score)); // output is string

 // conversions: Number, String, Boolean, 

let type_conversion = Number(score)
console.log(type_conversion); // output is 22 which data type is a number


// *if score variable value is string+number => Number
score = "22xyz"  // update variable value
let newScore = Number(score)   //declear a variable and change score varable's data type

console.log(typeof newScore); //output is number 
console.log(newScore);  // output NaN (not a number)


// *if score variable value is null => Number
score = null

newScore = Number(score)   //declear a variable and change score varable's data type

console.log(typeof newScore); //output is number 
console.log(newScore);  // output 0 (zero)



// *if score variable value is undefined => Number
score = undefined

newScore = Number(score)   //declear a variable and change score varable's data type

console.log(typeof newScore); //output is number 
console.log(newScore);  // output is NaN



// *if score variable value is boolean (true/false)  => Number
score = true

newScore = Number(score)   //declear a variable and change score varable's data type

console.log(typeof newScore); //output is number 
console.log(newScore);  // // if score variable value is string => Number
score = "shabbir"

newScore = Number(score)   //declear a variable and change score varable's data type

console.log(typeof newScore); //output is number => Number
console.log(newScore);  // output is NaN


// *if score variable value is string => Number
score = "shabbir"

newScore = Number(score)   //declear a variable and change score varable's data type

console.log(typeof newScore); //output is number
console.log(newScore);  // output is NaN


// if score variable value is number =>  boolean
score = 1

newScore = Boolean(score)   //declear a variable and change score varable's data type

console.log(typeof newScore); // boolean
console.log(newScore);  // output  if value is 1 output is true and else if value is 0 output is false



// if score variable value is string =>  boolean
score = ""

newScore = Boolean(score)   //declear a variable and change score varable's data type

console.log(typeof newScore); // boolean
console.log(newScore);  // output  if value is string  output is true and else if value is "" output is false


score = true
newScore = String(score)

console.log(typeof(newScore)); //out is string
console.log(newScore); //output is true



//___________________operations---------------------------

let  value = 45;
let neg_value = -value

console.log(neg_value); // output is -45


console.log(2+3); ///output is 5
console.log(2-3); ///output is -1
console.log(2*3); ///output is 6
console.log(6/3); ///output is 2
console.log(6%3); ///output is 0
console.log(2**3); ///output is 8

// concat: add two sting or one string and one nunmber
let str1 = " sha "
let str2 = " bbir "
let num = 123

console.log(str1.concat(str2,str1," ghulam ")); //output is  (sha bbir sha ghulam)
console.log(str1.concat(num)); //output is  (sha 123)

// console.log(num.concat(str1)); //output is  error because it's a string method

console.log("1"+2);  //output is 12
console.log(1+"2");  //output is 12
console.log("1"+"2");  //output is 12
console.log("1"+"2"+4);  //output is 124
console.log("1"+2+4);  //output is 124
console.log(1+2+"4");  //output is 34


console.log(2+4*5%3); // THIS IS poor readability of code 

let counter = 0
console.log(++counter); // this is prefix  increament its  unary opreater add 1  output is 1
console.log(counter++);  // this is postfix unary opreator  output still 1 bceause  this add 1 second time we call
console.log(counter); // output is 2  
