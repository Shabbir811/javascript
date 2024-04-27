"use strict"
//compersions : these  are  boolean type also known as compersion opretors
// compersion opretors: !=,==,===,>,<,<=,>=

//compersion with numbers:
console.log(5>1);// output is true 
console.log(5<1);// output is false 
console.log(5==="5 ");// output is false  (strict check with data type)
console.log(5==1);// output is false 
console.log(5!=1);// output is true 
console.log(5>=1);// output is true 

//it's also same with string
console.log("green".toUpperCase() === "GREEN"); //ouput is true

//compersion with null: => avoid this type of compersions
console.log(null == 0); //output is false  
console.log(null >= 0); //output is  true 
console.log(null > 0); //output is false  


//compersion with undefined:
console.log(undefined == 0); //output is false  
console.log(undefined >= 0); //output is  false 
console.log(undefined > 0); //output is false  

