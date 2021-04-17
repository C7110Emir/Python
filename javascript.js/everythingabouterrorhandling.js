//Javascript ERRORS - throw and try to catch XD

//The try statement lets you test a block of code for errors.

//The catch statement lets you handle the error.

//The throw statement lets you create custom errors.

//The finally statement lets you execute code, after try and catch, regardless of the result.



//ERRORS WILL HAPPEN AND HAVE TO HAPPEN OTHERWISE YOU ARE DOING SOMETHING WRONG

//When executing Javascript code, different errors can occur
//Errors can be coding errors made by the programmer, errors due to wrong input, and other unforeseeable things

//Example syntax
try {
  adddlert("Welcome guest!");
}
catch(err) {
    console.log(err.message)
}

// i mistyped the alert to get an error. JavaScript catches adddlert as an error, and executes the catch code to handle it.


//syntax
try{
  //block of code to try
}
catch(err){
  //block of code to handle it
}

//Javascript throws errors
// When an error occurs, Javascript will normaly stop and generate an error message
// The technical term for this is: Javascript will throw an exception

//Javascript will actually create an error object with two properities: name and message

//The throw statement

//The threow statement allows you to create a custom error
// technically you can throw an exception
// the exception can be a String , number, boolean or an object

throw "Too big" //throw a text
throw 500 //throw a number

// if you use throw together with try and catch you can control program flow and generate custom error messages

// lets give an input validation example

function myFunction() {
  var message, x;
  message = ""
  x = value;
  try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    console.log("Input is " + err)
  }

// err is our throw message so like if you give higher than 10 as input it will return Input is too high


//Finally statement
//The finally statement lets you execute code, after try and catch, regardless of the result:
//syntax
try {
  //Block of code to try
}
catch(err) {
  //Block of code to handle errors
}
finally {
  //Block of code to be executed regardless of the try / catch result
}


//example
function myFunction() {
  var message, x;
  message = ""
  x = value;
  try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
  }
  catch(err) {
    console.log("Input is " + err)
  }
  finally{
    value = ""
  }


// ERROR OBJECT

//JavaScript has a built in error object that provides error information when an error occurs.

//The error object provides two useful properties: name and message.

//NAME sets or returns an error name
//Message sets or returns an error message(a string)

//ERROR NAME VALUES

//EvalError	An error has occurred in the eval() function
//RangeError	A number "out of range" has occurred
//ReferenceError	An illegal reference has occurred
//SyntaxError	A syntax error has occurred
//TypeError	A type error has occurred
//URIError	An error in encodeURI() has occurred

// newer version of javascript doesn't throw evalerror, uses syntax error instead
