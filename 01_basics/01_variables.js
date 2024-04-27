// declear variables 
const id_number = 45   //it's uncahangeble; we must assign  a value in const variables; we can not redeclear  this name's variable and value again;l
// id_number = 46    // this is not allowed 

let  emailaccount ;  //  there we only declear a  variable  name.; it's can not redeclear  name but update it's value; and it's  type  is undefine
emailaccount = "uandi.ss@gamil.com"  // and now  we assign a value  to  this  variable;
emailaccount= "shabbir@.com" // update the value

var pin = 1234  // var  redeclearable and changeble ; 

age = "twetyfive" // this syntax also allowed for declear variable



console.log(id_number);

console.table([id_number,emailaccount,pin,age])
// output is 45, shabbir@.com, 1234, twentyfive 

/*
we don't prefer  to use var
because of  issue of BLOCK scope  and function scope
*/