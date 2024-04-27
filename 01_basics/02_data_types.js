//  data types in javascript:

// there are  msin  two  psrtd of dsts typed

// 1) premittive : call by vslue :
   // these are 8: string,number,boolean,undefined,null,symbol,bigint



   

let f_name = "shabbir"  // this is  string data types is's written in "".
let age = 27     // this is a number data type .
let isfellow = true// this is a boolean type  it's true or false
let number= null   // null  =>  null is data type  it is emty or 0
let cast = undefined // its samiler to null  but there  litle defference  when we not assign a value to a varriable;
let symbolss = Symbol("ss") // this is a unique data type
let bigNumbers = 23355665777767773435465464n//bigint data type
//object data type

// to check type of values  we use "typeof
//syntax: typeof variableName
//        typeof(variableName)

console.log(typeof f_name); // output is string
console.log(typeof age); // output is nember
console.log(typeof isfellow); // output is boolean
console.log(typeof number); // output is object
console.log(typeof cast); // output is undefine
console.log(typeof symbolss); // output is function 



//2) non premittive: csll by referece
   //these are 2:  arrays,objects,functions

let arr = ["rose","jasmine","sunflower"] // this is array data type


let obj ={
    name: "shabbir",
    age: 27,
    email: "u7233@.com"
}  //this is object data  type 



let functions= function(){
    console.log(`this is a function data type`)
}

console.log(typeof arr); // data type is object
console.log(typeof obj);// data type is object
console.log(typeof obj);
console.log(typeof functions);// data type is function/ object function