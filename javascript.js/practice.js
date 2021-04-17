/*
for(var i = 1; i < 10; ++i) {
    if (i%3){continue};
    if (i == 7) {break};
    console.log(i)
}

var x = prompt('insert a number you son of a bitch ')
console.log(x)

function reverser(k) {
    l = k.split("").reverse().join("")
    console.log(l)
}


reverser(x)

var l = 'asdasdasdasdasdsdadasdasd'
var z = l.length;
for(var k = 1; k <= z; k++) {
    console.log(k)
}


var a = prompt('chose your path \n aws/fullstack/data science')
switch(a){
    case 'aws':
        alert('get some vision dumbfuck')
        break
    
    case 'fullstack':
        alert('good job you do have a vision')
        break
    case 'data science':
        alert('do you believe that you live for another 50 years?')
        break
    default:
        alert('say something valid, or i will find you and cut your head off. thank you.')
}



var a = [223,'wsadas',true,Symbol()]


var b = {
   c = {name:'John', age: '25'},

}

console.log(b.c)

*/
/*********************************************************/
//introduction

// javascript getelement by id can change the sources(like image ect.)
//document.getElementById('myImage').src=

//javascript can change css content as well and it an be anything here is the syntax
//document.getElementById("demo").style.fontSize = "35px";

//html can hide elements which you can either display an image or hide a text or whatever whenever you want
//document.getElementById("demo").style.display = "none";

//or it can change the type of the element
//document.getElementById("demo").style.display = "block";

//in short words, you can do whatever you want with css html

/************************************************/

//display possibilities

//inner html attribute will change the content of the html and display it on your webpage
//document.getElementById("demo").innerHTML = 5 + 6;

// you can use document.write() for testing purposes
//document.write(5 + 6);
// be careful it will delete all existing html

//window.alert() will display an alert box with the data passed in
//window.alert(5 + 6);

//console.log() yk its basically displaying the data in browser console
//console.log(5 + 6);

//and there is window.print(), yes js doesn't have print function or anything but this is for just printing out the page, like a printer like saving as pdf
//<button onclick="window.print()">Print this page</button>

/**********************************************************************/

// javascript statements

//A computer program is a list of "instructions" to be "executed" by a computer.In a programming language, these programming instructions are called statements.
//JavaScript statements are composed of: Values, Operators, Expressions, Keywords, and Comments.

//try to remember putting semicolons at the end of your every executable statement
//var a, b, c; a = 5; b = 6; c = a + b;
// it is not required but highly recommended

//avoid exceeding 80 characters in a line and you can put spaces between your stuff to make it more readable
// code blocks are defined in curly braces since this is a c type language, and it means that they are defined to be executed together

//javascript statements oftenly start with keywords


/*****************************************************/

// javascript syntax

// There are 2 type of values fixed values and Variable values
// fixed values are called literals
// variable values are called variables

//javascript literals

//Numbers
//Numbers are written with or without decimals
//10.50 1001

//Strings
//Strings are text, written within double or single quotes
//"John Doe", 'John Doe'

//Arrays
//Array literals are basically for storing data, they are like python lists
// var a = [1, 'abc', true,]

//Booleans
// Boolean literals in javascript have 2 values, 
//true false

//Objects
//Object literals are collection of zero or more key-value pairs of a comma-seperated list
//var a = {name:'23213', Lastname: "12312412412", "age":214124124}


//Javascript variables

//In a programming language, variables are used to store data values
// javascript uses the var keyword to declare variables
// an equal sign is uesd to assign values to variables
// var x; x = 6;

// you can declare many variables in one line by:
// var person = "John Doe", carName = "Volvo", price = 200;

// if variable is undefined it means that there is nothing assigned to that variable

//if you re-declare a variable, it will not loose its value

//Javascript Operators

//Javascript uses arithmetic operators to compute values
// / * + - 

//uses an assignment operator to assign values to variables
// =

//Javascript expressions

//Expression is a combunation of values,variables, and operators, which computes to  a value
// 5 * 10 which will be equal to 50

//expressions can contain variable values
// lets use the x we declared at couple lines top
// x * 10 which is basically 6 * 10 

//The values can be of various types, such as numbers and strings
//"John"+ " " + "Doe" which will evaluate to "John Doe"

// If you add string with a number it will not do the math opperation it will add the stuff you trying to add to string
//var x = "5" + 2 + 3;
// "523"
// the way you write it matters, javascript has the operation presence;
// var x = 2 + 3 + "5"
// "55"
// Javascript identifiers

// For your variable names you have to pick them carefully for not causing confusion
// you should use names that related what you storing in that variable
// And there are syntax rules
// You can't use keywords as variable name, you can start with letters underscore and dollar sign but none other than that

// JAVASCRIPT IS CASE SENSITIVE

//Javascript and camel case

//Hyphens:
//first-name, last-name, master-card, inter-city.

//Underscore:
//first_name, last_name, master_card, inter_city.

//Upper Camel Case (Pascal Case):
//FirstName, LastName, MasterCard, InterCity.

//Lower Camel Case:
//firstName, lastName, masterCard, interCity.


//Javascript character case 
// Javascript uses unicode characterset, which means it includes almost everything exist in the world texting even emojis


// Javascript let

// Javascript works with scopes, if you declare a variable in global scope which means not inside any function or anything, it will be accessable from anywhere in code

// But if you declare a variable inside a scope of a function or anything it will not be accessable from any other place other than that scope, we call this local scope

//If you declare the variable with var keyword, it can be accessable from anywhere in code because var keyword cannot have global scope
//{var x = 2;}
// x CAN be used here

// if you declare a variable with let keyword, it will be only accessable in its scope; block scopes matter for let keyword
//{let x = 2;}
// x can NOT be used here

//redeclaring a variable with var keyword will also change the variable declared outside of its block which can impose some problems
// var x = 10;
// //Here x is 10
// {var x = 2; // Here x is 2}
//  //Here x is 2

//But if you redaclare a variable with let keyword, it will not affect the outside of the block like var does.
// var x = 10;
// //Here x is 10
// {let x = 2; // Here x is 2}
// //Here x is 10


//loop scope
// var in loop

// var i = 5
// for(var i = 0; i < 10, i++) {
    // Some statements
//}
// Here i is 10 because i will be incremented to 10 in the loop and it will keep its value because of var redeclaration

// let in loop
// let i = 5
//for(let i = 0; i < 10, i++) {
    //some statements
//}
// here i is 5 because even if i incremented to 10 in loop scope it kepts its value outside of scope because of let redeclaration

// you can not access let variable before its declarations but you can access var variable because of hoisting

// Javascript Const
// const declarations MUST BE assigned when they are declared, don't do it in multiple line like others

// Cons Declaration behaves pretty much like let declaration

// only difference between const and let is const can not be reassigned or changed

// we can't change when primative value is assigned to it but we can change its object properities
//const car = {type:"Fiat", model:"500", color:"white"};

//constant arrays can be changed as well 
//const cars = ["Saab", "Volvo", "BMW"];
//cars[0] = "Toyata"
//cars.push("Audi")


// But you can not reasign a constant array or object
//const cars = ["Saab", "Volvo", "BMW"];
//cars = ["Toyota", "Volvo", "Audi"];    // ERROR

//const car = {type:"Fiat", model:"500", color:"white"};
//car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR


// you can not redaclare const values in same scope, if its different scope you can still only redeclare by const
//const x = 2;       // Allowed
//const x = 3;       // Not allowed
//x = 3;             // Not allowed
//var x = 3;         // Not allowed
//let x = 3;         // Not allowed
//{
    //const x = 2;   // Allowed
    //const x = 3;   // Not allowed
    //x = 3;         // Not allowed
    //var x = 3;     // Not allowed
    //let x = 3;     // Not allowed 
//}


// Javascript arithmetic operators
// + for addition
// - for subtraction
// * for multiplication
// ** For taking the root
// % modulus
// ++ for increment
// -- for decrement

// Jaavascript Assignment Operators
// = ,  x = y
// += , x += y which is basically x = x + y
// -= , x -= y which basically means x = x - y
// *= , x *= y which basically means  x = x * y
// /= , x /= y which basically means x = x / y
// %= , x %= y which basically means x = x % y
// **= , x **= y which basically means x = x ** y

// strings adding with numbers

//var x = 5 + 5; // returns 10
//var y = "5" + 5; // returns 55
//var z = "Hello" + 5; // returns Hello5


//Javascript Comparison Operators
// == which means equal to (values being equal is enough to return true)
// === which means equal type equal value (type and value has to be equal otherwise returns false)
// != not equal (returns true if values are not equal)
// !== not equal value or not equal type (returns true if either value or type is not equal)
// > greater than 
// < less than
// >= greater or equal
// <= less than or equal
// ? ternary operator we use it in same line if statements like isMember ? '$2.00' : '$10.00' so if ismember is true it will return 2.00 if not it will return 10.00

// Javascript logical operators
// && logical and (both values have to be true)
// || logical or (either one of the values have to be true)
// ! logical not (if value is true, becomes false. if value is false, becomes true)

//Javascript type Operations
// typeof (returns the type of a variable)
// instanceof (returns true if an opject is an instance of an object type)


// Javascript Bitwise operators
// & AND, 5 % 1 -> 0101 & 0001 -> 0001 -> 1 so basically if both bits are true, bitstays true if not it filps to false
// | OR, 5 | 1 -> 0101 | 0001 -> 0101 -> 5 so basically if one of the bits true which is 1, returns true
// ~ NOT, ~5 -> ~0101 -> 1010 -> 10 so basically it flips all the bits to its opposite, if its 1 it equasl to 0 if its 0 it equals to 1
// ^ XOR. 5 ^ 1 -> 0101 ^ 0001 -> 0100 -> 4 if both equal to true, returns 0 if only one of them true, returns true
// << zero fill left shift, 5 << 1 -> 0101 << 1 1010 -> 10 if there is a 0 on left side, shifts it to right side
// >> signed right shift, 5 >> 1 -> 0101 >> 1 -> 0010 -> 2 adds a 0 to right side
// >>> zero fill right shift 

// Javascript Data Types

// var length = 16; // Number
// var LastName = "Johnson"; //String
// var x = {firstName:"John", lastName:"Doe"} //Object

//Javascript data types

//javascript variables can hold many data types such as numbers strings objects and more

// When you are adding a number to string, javascript will treat the number as a string
// var x = 16 + "Mark" will be equal to "16Mark"

// but that is only for when it comes to adding numbers and strings, for example:
// var x = 16 + 4 + "Mark" will come out as "20Mark"

// once you add the number and strings result will come out as string
// var x = "Mark" + 16 + 4 will come out as Mark164

// Javascript has dynamic types which means the same variable can hold different values without errors
//var x; //Undefined
// x = 5; // now x is a number;
// x = "ha"; // now x is a string;

// Javascript strings

//string is a data type that includes series of characters

//strings are written in quotes, you can either write with double or single quotes

// you can use quotes inside string as long as it doesn't match the surrounding string

// Javascript Numbers

//javascript has only one type of numeric data type
//Numbers can be written with decimals or without decimals

//extra large or extra small numbers can be written with scientific exponentials,
// var y = 123e5 will be equal to 12300000
// var z = 123e-5 will be equal to 0.00123

// Javascript booleans

// Booleans can hold have only 2 values, it can be true or it can be false
// var x = 5
// var y = 5
// var z = 6
//(x == y) will return true since they both same values
// (x == z) will return false since they both hold different values

// booleans are oftenly used in conditional testing with their operators

//Javascript arrays

// Arrays are written in square brackets "[]" and all items are separated by commas

// the array i will create under this line will declare an array called cars and it will contain three items
// var cars = ["Saab", "Volvo", "BMW"]

//Arrays are zero index based which means first items index will be 0 and second will be 1 and so on

//Javascript Objects

// Javascripts Objects are written with curly braces"{}"
// Object properitiees are written as name:value pairs, seperated by commas
// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//The person object has 4 properities: firstname lastname age eyecolor

//Typeof operator

//typeof operator is used to find the type of a javascript variable
//typeof operator returns the type of a variable or an expression:
//typeof "" // returns string
// typeof "John" // returns string
// typeof 0 //returns number
// typeof (3) // returns number
// typeof 3.14 // returns number
// typeof (3+14) // returns number
// typeof true // returnst boolean

//Undefined

// A variable without a value, as the value undefined, the type is also undefined
// var car; this variable is undefined

// any variable can be emptied by setting the value to undefined
// var a = 23 // number declaration 
// a = undefined // emtying the a variable, value equal  to undefined

//Empty values

// Empty value has nothing to do with undefined
//An empty string has both a legal value and a type
// var car = ""; // the value is "", the type of is string 

//Null
// In javascript null is "Nothing". It is supposed to be something that doesn't exist at all
// Unfortunately, In javascript, the data type of null is an object KEKW
// It is a bug that coming from the js interpreter, the typeof null supposed to be null
// you can empty an object by setting it to a null
// var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
//person = null; // now value is null but type is still an object LMAO

// as i mentioned before you can empty an object by using undefined as well
//var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
// person = undefined; // Now both value and type is undefined

//The difference between undefined and null

//undefined and null are equal in value but different in type
//typeof undefined  will return undefined
//typeof null  will return object

// null === undefined //false
// null == undefined //true

//Primitive data types

// a primitive data value is a single simple data value with no additional properties and methods
//Using a string method doesn't mutate the string
//var bar = "baz";
//console.log(bar);               // baz
//bar.toUpperCase();
//console.log(bar);               // baz

//Assignment gives the primitive a new (not a mutated) value
//bar = bar.toUpperCase();       // BAZ

//A primitive can be replaced, but it can't be directly altered.

//Strings are primitive
// Numbers are primitive
// BigInt is primitive
// Boolean is primitive
// Undefined is primitive
// Symbol is primitive
// Null is primitive

// Complex data

// The typeof operator can return one of two complex types
// function
// object

// the typeof operator returns object for objects, arrays, and null(because of the bug yk)
// the type of operator does not return object for functions
//typeof {name:'John', age:34} // Returns "object"
//typeof [1,2,3,4]             // Returns "object" (not "array", see note below)
//typeof null                  // Returns "object"
//typeof function myFunc(){}   // Returns "function"


// Javascript Functions
// functions are code blocks that designed to do a particular task
// functions are executed when something invokes it which is basically calls it 

//function myfunc(p1,p2) {
    //return p1 * p2  // will return the product of p1 and p2
//}

// syntax
// function keyword to define the function and functions name follows it up which is myfunc in the example at top
// then followed by paranthesis (you can pass parameters if needed, if its more than one seperate them by commas)
// since javascript is a c type language, we define our code blocks by using curly braces "{}"
// and write everything inside it

//function example(parameter1,parameter2,parameter3){
    // code to be executed
//}

// we pass values to our defined parameters when we are calling the function, for example lets call the example function
//example(2,3,'john') in this case  parameter1 will be 2, parameter2 will be 3, and parameter3 will be "john"
// parameters behave as local variables, which is you can only use them inside the function
//you can pass declared variables to functions as well 

//function can be invoked over an event
// it can be invoked in code
// or it can be self invoked which is automatically


//when javascript reaches a return statement, function will stop executing
// if the function is invoked from a variable, javascript will return its result to the variable as value
// var x = myfunc(2,3)

// in human words, return is basically returns the value to the caller which is name of our function

//var x = myfunction(4,3)

//function myfunction(a,b){
    //return a + b  //returns the result of the operation to the caller
//}
// x will be 7 

// so why do we use functions?
// it adds reusability to our code so we don't need to do the same code over and over again
// we can use the function we defined over different parameters
// lets think of an temp calculator, 

// function toCelsius(fahrenheit) {
    //return (5/9) * (fahrenheit - 32)
//}

// we can basically call this code over and over agin to calculate different tempratures

// the () operator invokes the function
// we can not execute a function without using paranthesis
// lets use the example at the top
// toCelcius //returns function
// toCelcius(5) //it will execute the function
// you have to use paranthesis regardless if you have parameters or not

// you can use your functions return of your functions in your variables as well 
// var text = "the tempreture is " + toCelsius(77) + " Celcius"

//THE VARIABLES DECLARED INSIDE FUNCTION, BECOMES A LOCAL VARIABLE REGARDLESS OF KEYWORD
// code here can NOT use carName

//function myFunction() {
    //var carName = "Volvo";
    // code here CAN use carName
 // }
  
  // code here can NOT use carName

// variables created in functions are created when function starts and deleted when function is completed
//The Arguments Object

//JavaScript functions have a built-in object called the arguments object.

//The argument object contains an array of the arguments used when the function was called (invoked).

//This way you can simply use a function to find (for instance) the highest value in a list of numbers:

//Example
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  var i;
  var max = -Infinity;
  for (i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

// when you console.log the argument object you see an object that indexes as keys and values as passed in arguments. 
// but the .length property returns the number of arguments passed in

// JAVASCRIPT OBJECTS 
//Lets give an example of objects in real life
// Cars are good example of objects
//A car has properities like weight,color, and methods like start and stop

// Objects are variables too but they contain multiple values assigned to keys
var car = {type:"Fiat", model:"a2", color:"white"};

// the values are written in name:value pairs or you can call key value pairs
//name and value seperated by colon like in example

//How do we add new values to our object?
// lets say you have an object like
var obj = {key1: value1, key2: value2};
//and you wanna insert values and there are 2 ways of it
//1. dot notation
obj.key3 = "value3";
// or you can use square bracket notation
obj["key3"] = "value3";

//space and line breaks are not important
//var car = {
//   type:"Fiat", 
//model:"a2", 
//color:"white"\
//};

//Object Properties
//Each name value pair called Property 

//Accessing object properities
// so this has 2 ways you can either use objectname.propertyname
//or you can use objectname['propertyname']

//car.type
//car['type']

//this keyword, 
//in a function definition, this keyword refers to owner of the function
// this.color means the color property of this object

// you can add functions to your objects 
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// and you can access them simply with same syntax and putting paranthesis at the end of it
// person.fullname()
// if you don't pass paranthesis, you will get the full value which is whole function syntax in this case

// do not declare strings numbers and booleans as objects with 'new' keyword
//when javascript variable is declared with a keyword "new", the variable is created as object
//var x = new String();        // Declares x as a String object
//var y = new Number();        // Declares y as a Number object
//var z = new Boolean();       // Declares z as a Boolean object

// avoid using this because it will complicate your code and slow down your execution speed


//How do we add a method to our existing object ?
person.name = function () {
  return this.firstName + " " + this.lastName;
};
// same way with adding normal property
//Displaying objects
//there are 4 ways of it 
//Displaying the Object Properties by name
var person = {name:"John", age:30, city:"New York"};

document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;

//Displaying in a loop
var x, txt = "";
var person = {name:"John", age:30, city:"New York"};

for (x in person) {
txt += person[x] + " ";
};

document.getElementById("demo").innerHTML = txt;

// Using Object.values()
var person = {name:"John", age:50,city:"New York"};

var myArray = Object.values(person);
document.getElementById("demo").innerHTML = myArray;

//Using JSON.stringfy():
//Any JavaScript object can be stringified (converted to a string) with the JavaScript function JSON.stringify():
//Returns in JSON notation
var person = {name:"John", age:30, city: "New York"};

var myString = JSON.stringify(person);
document.getElementById("demo").innerHTML = myString;

//"{"name":"John","age":50,"city":"New York"}"


//SETTERS AND GETTERS

//JavaScript Getter (The get Keyword)
//This example uses a lang property to get the value of the language property.
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "en",
  get lang() {
    return this.language;
  }
};

// Display data from the object using a getter:
document.getElementById("demo").innerHTML = person.lang;

//JavaScript Setter (The set Keyword)
//This example uses a lang property to set the value of the language property.

Example
var person = {
  firstName: "John",
  lastName : "Doe",
  language : "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;

//Why Using Getters and Setters?
//It gives simpler syntax
//It allows equal syntax for properties and methods
//It can secure better data quality
//It is useful for doing things behind-the-scenes

//Object.defineProperty()
//The Object.defineProperty() method can also be used to add Getters and Setters:

//Example
// Define object
var obj = {counter : 0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;


//HTML EVENTS/ EVENT HANDLERS

// HTML events are things that happen to html elements LMAO
// when Javascript is used in html pages, Javascript can "react" on these events.

//An html event can be something the browser does, or Something a user does
//Here some examples of html events:
// An html web page has finished loading
// An html input field was changed
// An html button is clicked

//Often,When events happen, you may wanna do something

// Javascript lets tyou execute code when events are detected
// HTML allows Event handler attributes,with javascript code, to be added to html elements

//here is the synax
// <element event ='some JavaScript'>

// you can write inside double quotes as well
// <element event = "some Javascript"

//Lets give real life example,an onclick attribute with code is added to button element
// <button onclick="document.getElementById('demo').innerHTML = Date()"
// so what this code does is, when button is clicked the element with id demo is changed to the result of date function

//lets give another example but this time with using this keyword
// <button onclick = "this.innerHTML = Date()">
// so what this does is, when this button is clicked, it changes its own element to the result of the function passed in

//<button onclick="displayDate()">The time is?</button>


// List of Common html events
//onchange is for when html element is changed
//onclick is for when user clicks the html element
//onmouseover is for the user moves the mouse over an html element
//onmouseout is for when user moves the mouse away from an html element
//onkeydown is for when user pushes a keyboard key
//onload is for when browser has finished loading the page


//SO WHAT CAN JAVASCRIPT DO ? 

// event handlers can be used to handle andverify user input, user actions, and browser actions:
// Things that should be done when page is closed
// action that should be performed when a user clicks a button
// content that should be verified when a user inputs a data
//and many more

//many different methods can be used to let javascript work with events:
//html event attributes can execute javascript code directly 
// html event attributes can call javascript functions
// you can assign your event handler functions to html event
// you can prevent events from being sent or being handled
// and many more


//Back to js strings

//how to find the length of string??
// var txt = 'asdgausdgjaidgjasdigjasd' // is a string value
// var sln = txt.length; // sln variable holds the length of the string and its a number type data

//escape characters
// we use backslashes to avoid inside string bugs such as using same type of quote as declaration quotes
// var x = 'how's the weather today' // that is a bug because only how is inside the string 
// var x = 'how\'s the weather today' // this works because backslash avoids the bug

// \' is for single quote
// \" is for double quotes
// \\ is for backslash

// there are 6 other sequences valid in JavaScript 
// \b for backspace
// \f for form feed
// \n for new line 
// \r for carriage return
// \t for horizonntal tabulator
// \v for vertical tabulator

// these sequences are originally designed to control type writers, teletypes, and fax machines. they do not make any sense to html

// you can break libes with backslash or addition
//document.getElementById("demo").innerHTML = "Hello " +
//"Dolly!";
//document.getElementById("demo").innerHTML = \
//"Hello Dolly!";

//STRING METHODS AND PROPERTIES

// as we talked before we have a built in length method that returns a number to variable
// var a = 'avsa'; 
// var b = a.length; // b is 4 

//indexOf() method
//we use this method to find string in a string, if passed inside the paranthesis exist inside the string it will return the first occurrence of it
// if it doesn't exist it will return -1
// var k = "Please locate where 'locate' occurs!";
// var pos = k.indexOf ("locate") // it will return a numeric value don't forget that

//lastIndexOf() method
//this method is pretty simillar to indexof method but it returns the last occurens of a specified text in the string
// var k = "Please locate where 'locate' occurs!";
// var pos = k.lastIndexOf ("locate") // it will return a numeric value don't forget that
// this will return -1 if the passed in string doesn't exist 
// and lastIndexOf method searches backwards(from end to beginning)

// you can pass in a second parameter to declare where the search is going to start
//var str = "Please locate where 'locate' occurs!";
//var pos = str.indexOf("locate", 15);

// this basically starts the serch from the 15th index

//Search() method
// this method works almost same with the indexof method
// var str = "Please locate where 'locate' occurs!";
//var pos = str.search("locate"); returns number value

// but there is a difference
//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).


//extracting string parts
// there are 3 methods for extracting a part of a string:
// IM SO HAPPY THAT THERE IS SLICE METHOD :)))
// slice(start,end)
// substring(start, end)
// substr(start, length)

//slice() extracts a part of a string and returns extracted part in a new string
// it takes 2 parameters, start position, and end position(end not included)
//var str = "Apple, Banana, Kiwi";
//var res = str.slice(7, 13); // this will return Banana
// it slices the string from the position 7 to 12.

// if a parameter is negative, the position is counted from the end of the string 
//var str = "Apple, Banana, Kiwi";
//var res = str.slice(-12, -6); // this will return Banana as well

// if you don't pass in an end position it will return the rest of the string starting from the starting position passed in
//var res = str.slice(7);

// or you can count from the end 
//var res = str.slice(-12);

// substring() is similar to slice()
// The difference is that substring doesn't accept negative indexes
//var str = "Apple, Banana, Kiwi";
//var res = str.substring(7, 13); // will return Banana
// single parameter thing is accepted in substring, it can take out the rest of the string as well

// substr() is similar to slice() as well
// The difference is that the secont parameter specifies the length of the extracted part
//var str = "Apple, Banana, Kiwi";
//var res = str.substr(7, 6); // returns Banana

// if you don't pass in the length it will return the rest
//var str = "Apple, Banana, Kiwi";
//var res = str.substr(7); //Banana, Kiwi

// if the first parameter is negative it will cout from the negative and do the operation from there
//var str = "Apple, Banana, Kiwi";
//var res = str.substr(-4); //returns Kiwi

//Replacing String Content
// The replace() method replaces a specified value with another value in a string
//str = "Please visit Microsoft!";
//var n = str.replace("Microsoft", "Clarusway"); // will return Please visit Clarusway

// this method does not change the string its called on, it returns a new string

// IT REPLACES THE FIRST MATCH
//str = "Please visit Microsoft and Microsoft!";
//var n = str.replace("Microsoft", "Clarusway"); // it will return Please visit Clarusway and Microsoft

//Since Javascript is case sensitive, passing in unexisting value will not work
//str = "Please visit Microsoft!";
//var n = str.replace("MICROSOFT", "W3Schools"); // will not work and stays same

//To replace case insensitive, use a regular expression with an /i flag (insensitive)
//str = "Please visit Microsoft!";
//var n = str.replace(/MICROSOFT/i, "Clarusway");
// regular expressions written without quotes

//TO REPLACE ALL MATHCES, use a regular expression with a /g flag(global match)
//str = "Please visit Microsoft and Microsoft!";
//var n = str.replace(/Microsoft/g, "Clarusway");


//Converting to Upper and Lower Case
// to convert a string to upper case with toUpperCase():
//var text1 = "Hello World!";       // String
//var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

//to convert a string to lower case with toLowerCase():
//var text1 = 'Hello World';
//var text2 = text1.toLowerCase(); //text 2 is text 1's lower case version

//Concat() function
// concat() joins two or more strings:

//var text1 = 'Emir'
//var text2 = 'kim'
//var text3 = text1.concat(" ", text2)

// you can use plus operator to add strings as well, these two lines do the same
// var text1 = 'Emir' + ' ' + 'kim'
// var text2 = "Emir".concat(" ", "kim")

//ALL STRING METHODS RETURN NEW STRING,THEY DON'T MODIFY ORIGINAL STRING 

//Trim()
//This method removes the whitespaces from both sides of a string
//var str = "       Hello World!        ";
//alert(str.trim());

//Adding string padding
//ES2017 added two new string methods, padStart() and padEnd() to support oadding at the beginning and at the end of a string

//let str = "5";
//str = str.padStart(4,0);
// result is 0005

//let str = "5";
//str = str.padEnd(4,0);
// result is 5000

//Extracting string characters
// there are 3 methods for extracting string characters:
// charAt(position)
// charCodeAt(position)
// property access with []

//charAt() Method
// char at method returns the character at a specified index position in a a string 
//var str = "HELLO WORLD";
//str.charAt(0);            // returns H

// charCodeAt
// Returns the unicode of the character at the index passed in
//var str = "HELLO WORLD";

//str.charCodeAt(0);         // returns 72


// or you can access the character by simply doing:
//var str = "HELLO WORLD";
//str[0];                   // returns H

//If you want to work with a string as an array, you can convert it to an array.

//A string can be converted to an array with the split() method

//var txt = "a,b,c,d,e";   // String
//txt.split(",");          // Split on commas
//txt.split(" ");          // Split on spaces
//txt.split("|");          // Split on pipe

// or you can split a string to it characters
//var txt = "Hello";       // String
//txt.split("");           // Split in characters


//match()	
//Searches a string for a match against a regular expression, and returns the matches
//var str = "The rain in SPAIN stays mainly in the plain";
//var res = str.match(/ain/g);


//endsWith()	
//Checks whether a string ends with specified string/characters
//var str = "Hello world, welcome to the universe.";
//var n = str.endsWith("universe.");    

// if you multiply a string with numbers inside with another string with numbers inside 
// it will treat them as numbers and do the operation
//var x = "100";
//var y = "10";
//var z = x * y; // z will be 1000 


//Number methods
// toString() Method

// returns a number as a string
//var x = 123;
//x.toString();            // returns 123 from variable x
//(123).toString();        // returns 123 from literal 123
//(100 + 23).toString();   // returns 123 from expression 100 + 23

//toExponential()
//toExponential() returns a string, with a number rounded and written using exponential notation
//var x = 9.656;
//x.toExponential(2);     // returns 9.66e+0
//x.toExponential(4);     // returns 9.6560e+0
//x.toExponential(6);     // returns 9.656000e+0

//toFixed()
//toFixed() returns a string, with the number written with a specified number of decimals
//var x = 9.656;
//x.toFixed(0);           // returns 10
//x.toFixed(2);           // returns 9.66
//x.toFixed(4);           // returns 9.6560
//x.toFixed(6);           // returns 9.656000

//tofixed(2) works perfect for the money

//toPrecision() Method
//toPrecision() returns a string, with a number written with a specified length
//var x = 9.656;
//x.toPrecision();        // returns 9.656
//x.toPrecision(2);       // returns 9.7
//x.toPrecision(4);       // returns 9.656
//x.toPrecision(6);       // returns 9.65600

//the difference between this and to fixed is, to fixed starts the count from the start


//Converting variables to Numbers

//there are 3 methods you can use:

//Number() //Returns a number, converted from its argument.
//parseInt() //		Parses its argument and returns an integer
//parseFloat()  //Parses its argument and returns a floating point number

//these are not number methods, they are global javascript methods

//Number()
//examples:
//Number(true);          // returns 1
//Number(false);         // returns 0
//Number("10");          // returns 10
//Number("  10");        // returns 10
//Number("10  ");        // returns 10
//Number(" 10  ");       // returns 10
//Number("10.33");       // returns 10.33
//Number("10,33");       // returns NaN
//Number("10 33");       // returns NaN
//Number("John");        // returns NaN

//Number() method used on dates?

//number() can also convert a date to a number
// it will return milliseconds since 1.1.1970

//parseInt()
//parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
//parseInt("10");         // returns 10
//parseInt("10.33");      // returns 10
//parseInt("10 20 30");   // returns 10
//parseInt("10 years");   // returns 10
//parseInt("years 10");   // returns NaN


//parseFloat()
//parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
//parseFloat("10");        // returns 10
//parseFloat("10.33");     // returns 10.33
//parseFloat("10 20 30");  // returns 10
//parseFloat("10 years");  // returns 10
//parseFloat("years 10");  // returns NaN


//More Number methods

//isfinite() checks whether a value is a finite number
//isInteger() checks whether a value is an integer
//isNaN() Checks whether a value is not a number

//Arrays
// changing an element of array

// var c = ['saab',2, 32,true]
// c[2] = 'Emir'
// // now c is basically this = ['saab,2,'Emir',true]

// we can pass in objects to our arrays

//Array methods and properties
//var x = cars.length // will return the number of elements inside array
// var y = cars.sort() // puts the array in order which is sorting 


// you cn simply use cars[cars.length -1 to reach the last element of an array]

//Looping array elements
//var fruits, text, fLen, i;
//fruits = ["Banana", "Orange", "Apple", "Mango"];
//fLen = fruits.length;

//text = "<ul>";
//for (i = 0; i < fLen; i++) {
//  text += "<li>" + fruits[i] + "</li>";
//}
//text += "</ul>";

// or you can use array.foreach(). this is a built in function that returns each value of array one by one

//var fruits, text;
//fruits = ["Banana", "Orange", "Apple", "Mango"];

//text = "<ul>";
//fruits.forEach(myFunction);
//text += "</ul>";

//function myFunction(value) {
//  text += "<li>" + value + "</li>";
//}


// you can use push method to add an element to array
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.push("Lemon");    // adds a new element (Lemon) to fruits

//or you can use lenght function to do that as well
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits[fruits.length] = "Lemon";    // adds a new element (Lemon) to fruitsvar fruits = ["Banana", "Orange", "Apple", "Mango"];

// arrays have numbered indexes, objects have named indexes

// you can convert arrays to strings as comma separated with toString() 


//join method also joins all array elements into a string but you can specify a character that will be going between the elements
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//document.getElementById("demo").innerHTML = fruits.join(" * ");


// pop() method removes the last element from the array
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var x = fruits.pop();      // the value of x is "Mango"

//push() method adds an element to the end of the array
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.push("Kiwi");       //  Adds a new element ("Kiwi") to fruits

//push method returns the new array length
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var x = fruits.push("Kiwi");   //  the value of x is 5

//shift() method
//removes the first element of the array and shifts other elements one back
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.shift();            // Removes the first element "Banana" from fruits

//shift() method returns the last element that was shifted out
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var x = fruits.shift();   // the value of x is "Banana"

//unshift() method
//unshift method adds an elemet to the beginning of the string and pushes other elements one index up
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits

//unshift method returns new length of array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon");    // Returns 5'


//you can access elements by their indexes 


//splice() methods
// we can add multiple elements to our array with this method 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// so here 2 is mentioning htat where elements should be added
// 0 is mentioning how many elements should be deleted

//this is how it goes when you do with delete 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

//Original Array:
//Banana,Orange,Apple,Mango

//New Array:
//Banana,Orange,Lemon,Kiwi

//Removed Items:
//Apple,Mango

//merging arrays
// we use concat method to add strings to each other

var myGirls = ["Cecilie", "Lone"];
var myBoys = ["Emil", "Tobias", "Linus"];
var myChildren = myGirls.concat(myBoys);   // Concatenates (joins) myGirls and myBoys

// it does not change existing array, it returns new array

// you can do it with multiple arrays too

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3

// we can slice arrays as well with slice method
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

// it returns a new array


//list of all methods
//concat()	Joins two or more arrays, and returns a copy of the joined arrays
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);


//copyWithin()	Copies array elements within the array, to and from specified positions
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
//array.copyWithin(target, start, end)
//returns banana,orange,banana,orange


//entries()	Returns a key/value pair Array Iteration Object
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();

for (x of f) {
  document.getElementById("demo").innerHTML += x;
}
//[0, "Banana"]
//[1, "Orange"]
//[2, "Apple"]
//[3, "Mango"]

//every()	Checks if every element in an array pass a test
//The every() method checks if all elements in an array pass a test (provided as a function).
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.every(checkAdult);
}

//array.every(function(currentValue, index, arr), thisValue)
// true if all passed

//fill()	Fill the elements in an array with a static value
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.fill("Kiwi");

//returns kiwi,kiwi,kiwi,kiwi

//filter()	Creates a new array with every element in an array that pass a test
var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

document.getElementById("demo").innerHTML = ages.filter(checkAdult);


//array.filter(function(currentValue, index, arr), thisValue)


//find()	Returns the value of the first element in an array that pass a test
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.find(checkAdult);
}

//returns 18
//array.find(function(currentValue, index, arr),thisValue)


//findIndex()	Returns the index of the first element in an array that pass a test
var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.findIndex(checkAdult);
}
//returns 2


//forEach()	Calls a function for each array 
var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}
//forEach() method calls a function once for each element in an array, in order.

//from()	Creates an array from an object
var myArr = Array.from("ABCDEFG");
//returns [A,B,C,D,E,F,G] to myarr varriable


//includes()	Check if an array contains the specified element
// it either returns true or false if value exists its a true, if not it is a false
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");
// it is case sensitive

//indexOf()	Search the array for an element and returns its position
// we mentioned this function before
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple");
// returns 2
// it will return -1 if it doesn't exist


//isArray()	Checks whether an object is an array
function myFunction() {
  var fruits = ["Banana", "Orange", "Apple", "Mango"];
  var x = document.getElementById("demo");
  x.innerHTML = Array.isArray(fruits);
}

// returns true if the the passed in variable is an array
// which is true in this example

//join()	Joins all elements of an array into a string
//converts the array to a string, you can pass in something to split them with something you wish
// if you don't it will use comma as default
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join();

//returns Banana,Orange,Apple,Mango



//keys()	Returns a Array Iteration Object, containing the keys of the original array
// it will create an iteration object from the array passed in and iteration object will contain the keys of array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fk = fruits.keys();

for (x of fk) {
  document.getElementById("demo").innerHTML += x + "<br>";
}

// it will return
//0
//1
//2
//3

//lastIndexOf()	Search the array for an element, starting at the end, and returns its position
// it will still return the actual index of the element, only thing is that it starts the search from the end
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.lastIndexOf("Apple");

//which will return 2 here
// if you pass in Orange it will return 1 because that is the index of the orange
// if not found it will return -1



//map()	Creates a new array with the result of calling a function for each array element
// it will create new array with the results of called function for each element in array
var numbers = [4, 9, 16, 25];
var x = numbers.map(Math.sqrt)
document.getElementById("demo").innerHTML = x;

// this function basically returns squareroot of every element in that array
// it will return x = [2,3,4,5]

//pop()	Removes the last element of an array, and returns that element
//Removes the last element of the array and returns the removed element
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
// fruits array will be ['Banana', 'Orange', 'Apple']

// pop function will return the "Mango"

//push()	Adds new elements to the end of an array, and returns the new length
// it adds an element to end of the array and it returns the new length of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");


//reduce()	Reduce the values of an array to a single value (going left-to-right)
// so in a better definition, this reduce function takes the first element from the left and does what mentioned in function
var numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total + num;
}

// this will return 250 because it takes the 175 and adds 50 to it and after that it adds 25 to the result
// basically does whatever defined in function over the first value from the left

//reduceRight()	Reduce the values of an array to a single value (going right-to-left)
// so since reduce takes from the left, this takes the first element from the right side of the string and does the same thing reduce does
// at the end both reduce and reduceRight will return single value to the array
var numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduceRight(myFunc);

function myFunc(total, num) {
  return total - num;
}
// this will return -200 because 25 - 50 and then - 175

//reverse()	Reverses the order of the elements in an array
// flips the array backwards on index
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
// is basically ["Mango","Apple","Orange","Banana"]


//shift()	Removes the first element of an array, and returns that element
// shift will remove the first value of the array and return the element that removed
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.shift();

//slice()	Selects a part of an array, and returns the new array
// you can slice your array from specific index to specific index
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);
// don't forget that it does not include given end index

//some()	Checks if any of the elements in an array pass a test
// so this function will iterate over your array and will put it in a test which will be the one you defined in a function
// and if any of your elements passes the test it will return true, if not itwill return false
//and it will not check the remaning value once it finds the true 
// it does not change the original array

var ages = [3, 10, 18, 20];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.some(checkAdult);
}


//sort()	Sorts the elements of an array
// sorts your array in order, same as sort in any other language
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();

//array.sort(compareFunction)
//The sort() method sorts the items of an array.

//The sort order can be either alphabetic or numeric, and either ascending (up) or descending (down).

//By default, the sort() method sorts the values as strings in alphabetical and ascending order.

//This works well for strings ("Apple" comes before "Banana"). However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

//Because of this, the sort() method will produce an incorrect result when sorting numbers.

//You can fix this by providing a "compare function"

//splice()	Adds/Removes elements from an array
// we can add multiple elements to our array with this method 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
// so here 2 is mentioning htat where elements should be added
// 0 is mentioning how many elements should be deleted

//this is how it goes when you do with delete 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");

//Original Array:
//Banana,Orange,Apple,Mango

//New Array:
//Banana,Orange,Lemon,Kiwi

//Removed Items:
//Apple,Mango


//toString()	Converts an array to a string, and returns the result
// one of the ways of converting array to string 
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.toString();


//unshift()	Adds new elements to the beginning of an array, and returns the new length
// adds new element to beginnng of the array and returns the new length of the array
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Lemon","Pineapple");
//array.unshift(item1, item2, ..., itemX)


//valueOf()	Returns the primitive value of an array
// it will return your array lol it has no huge deal
// it is the default method of the array object



//javascript Dates

//by default javascript will use browser's time zone and display a date as a full text string 
//Creating date objects
// there are 4 ways of creating date object

new Date()
new Date(year,month,day,hour,minutes,seconds,milliseconds)
new Date(milliseconds)
new Date(date string)

//new Date()
// this thing creates an object with the current date and time
var d = new Date();

//Date objects are static the computer time is ticking but date objects are not


//new Date(year,month,day,hour,minutes,seconds,milliseconds)
//this object creates a new date object with SPECIFIED DATE AND TIME 
//7 numbers specify year,month,day,hour,minutes,seconds,milliseconds (in this order)

var d = new Date(2021,3,27,1,9,33,0);

// JAVASCRIPT COUNTS MONTHS FROM 0 TO 11, SO JANUARY IS 0 DECEMBER IS 11

//YOU CAN EDIT IT BY REDUCING THE SPECIFICATION FROM RIGHT

//Previous centtury
//One and two digit years will be interpreted as 19xx
var d = new Date(99,11,24); //1999 december friday

var d = new Date(9,11,24); // 1909 december friday


//new Date(date string)
//you can write your date in date format as well 

var d = new Date("March 27, 2021 01:14:00");


//you can write the dates as milliseconds as well like 100 billion milliseconds is approximetly october 31 1966


// some date methods

//toUTCString()
var d = new Date()
d.toUTCString(); // will display it like this => Sat, 27 Mar 2021 05:17:47 GMT

//toDateString()
var d = new Date();
d.toDateString(); // will display it like this => Sat Mar 27 2021

//toISOString()
var d = new Date();
d.toISOString(); //will display it like this => 2021-03-27T05:19:49.696Z

// you can parse your dates with Date.parse()
// it will return you the milliseconds of it 

var msec = Date.parse("March 21, 2012");


//getTime()

// it will return you number of milliseconds since january 1,1970

var d = new Date();
d.getTime(); // returned 1616822579290


//getFullYear()
// returns you the year of date as four digits of number
var d = new Date();
d.getFullYear(); // returns 2021

//getMonth()
// returns the month as number 0 - 11 
var d = new Date();
d.getMonth(); // will return 2

//weird thing is you can use array of names to return the month name by simply indexing
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
months[d.getMonth()]; // will retunr march because of index 2

//getDate()
// returns the day of date as a number
var d = new Date();
d.getDate(); 

//getHours()
// will return the hours of a date as number 0-23
var d = new Date();
d.getHours()

//getMinutes
// returns minutes
var d = new Date();
d.getMinutes();

//getSeconds
//will return seconds
var d = new Date()
d.getSeconds();

//getMilliseconds
//will return milliseconds 0-999
var d = new Date();
d.getMilliseconds();

//getDay
//returns the day 0-6
var d = new Date()
d.getDay();

//getUTCDate()	Same as getDate(), but returns the UTC date

//getUTCDay()	Same as getDay(), but returns the UTC day

//getUTCFullYear()	Same as getFullYear(), but returns the UTC year

//getUTCHours()	Same as getHours(), but returns the UTC hour

//getUTCMilliseconds()	Same as getMilliseconds(), but returns the UTC milliseconds

//getUTCMinutes()	Same as getMinutes(), but returns the UTC minutes

//getUTCMonth()	Same as getMonth(), but returns the UTC month

//getUTCSeconds()	Same as getSeconds(), but returns the UTC seconds


//Set Date methods let you set date values (years, months, days, hours, minutes, seconds, milliseconds) for a Date Object.

//setDate()	Set the day as a number (1-31)

//setFullYear()	Set the year (optionally month and day)

//setHours()	Set the hour (0-23)

//setMilliseconds()	Set the milliseconds (0-999)

//setMinutes()	Set the minutes (0-59)

//setMonth()	Set the month (0-11)

//setSeconds()	Set the seconds (0-59)

//setTime()	Set the time (milliseconds since January 1, 1970)





//Math Object 

//Unlike other objects, the Math object has no constructor.

//The Math object is static.

//All methods and properties can be used without creating a Math object first.

//The syntax for any Math property is : Math.property.


Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E


// they can not be changed, they are for you to use whenever you need them, they are not editable, they are static

//Math methods

//Math.round()
// this method rounds the number to nearest integer
Math.round(4.9);    // returns 5
Math.round(4.7);    // returns 5
Math.round(4.4);    // returns 4
Math.round(4.2);    // returns 4
Math.round(-4.2);    // returns -4


//Math.ceil()
// this method returns the rounded up integer of given value
Math.ceil(4.9);     // returns 5
Math.ceil(4.7);     // returns 5
Math.ceil(4.4);     // returns 5
Math.ceil(4.2);     // returns 5
Math.ceil(-4.2);     // returns -4
Math.ceil(-3.9);     //returns -3


//Math.floor()

// this method returns the rounded down integer of given value

Math.floor(4.9);    // returns 4
Math.floor(4.7);    // returns 4
Math.floor(4.4);    // returns 4
Math.floor(4.2);    // returns 4
Math.floor(-4.2);    // returns -5


//Math.trunc()

// takes the integer part of the given value 

Math.trunc(4.9);    // returns 4
Math.trunc(4.7);    // returns 4
Math.trunc(4.4);    // returns 4
Math.trunc(4.2);    // returns 4
Math.trunc(-4.2);    // returns -4


//Math.sign()

// takes an integer and returns -1 or 0 or 1 depends on if number positive or null or negative
// if the number is negative it will return -1
// if the number is 0 or null it will return 0
// if the number is positive it will return 1

Math.sign(-4);    // returns -1
Math.sign(0);    // returns 0
Math.sign(4);    // returns 1



//Math.pow()

//Math.pow(x, y) will take the y power of x

Math.pow(8, 2);      // returns 64


//Math.sqrt()

//Math.sqrt(x) will return the square root of x

Math.sqrt(64);      // returns 8


//Math.abs()
//Math.abs(x) returns the positive value of x

Math.abs(-4.7);     // returns 4.7


//Math.sin()
//Math.sin(x) is to calculate the sinus of the angle x(given in radians)
//If you want to use degrees instead of radians, you have to convert degrees to radians:

//Angle in radians = Angle in degrees x PI / 180.

Math.sin(90 * Math.PI / 180);     // returns 1 (the sine of 90 degrees)

// Math.cos()
//Math.cos(x) returns the cosine (a value between -1 and 1) of the angle x (given in radians).

//If you want to use degrees instead of radians, you have to convert degrees to radians:

//Angle in radians = Angle in degrees x PI / 180.

Math.cos(0 * Math.PI / 180);     // returns 1 (the cos of 0 degrees)



//Math.min() and Math.max()

//Math.min and Math.max is used to find the lowest and highest elements in a list of arguments

Math.min(0, 150, 30, 20, -8, -200);  // returns -200

Math.max(0, 150, 30, 20, -8, -200);  // returns 150


//Math.random()
//Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):

Math.random();     // returns a random number


//Math,log()
//Math.log(x) returns the natural logarithm of x:
Math.log(1);    // returns 0

//The natural logarithm returns the time needed to reach a certain level of growth.

//Math.E and Math.log() are twins.

//How many times must we multiply Math.E to get 10?

Math.log(10);    // returns 2.302585092994046

//Math.log2()
//Math.log 2 returns the base 2 logarithm of x
// How many times must we apply 2 to get 8

Math.log2(8);    // returns 3


//Math.log10() Method
//Math.log10(x) returns the base 10 logarithm of x.

//How many times must we multiply 10 to get 1000?

Math.log10(1000);    // returns 3





//Complete list of math methods


//abs(x)	Returns the absolute value of x


//acos(x)	Returns the arccosine of x, in radians


//acosh(x)	Returns the hyperbolic arccosine of x


//asin(x)	Returns the arcsine of x, in radians


//asinh(x)	Returns the hyperbolic arcsine of x


//atan(x)	Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians


//atan2(y, x)	Returns the arctangent of the quotient of its arguments


//atanh(x)	Returns the hyperbolic arctangent of x


//cbrt(x)	Returns the cubic root of x


//ceil(x)	Returns x, rounded upwards to the nearest integer


//clz32(x)	Returns the number of leading zeros in a 32-bit binary representation of x


//cos(x)	Returns the cosine of x (x is in radians)


//cosh(x)	Returns the hyperbolic cosine of x


//exp(x)	Returns the value of Ex


//expm1(x)	Returns the value of Ex minus 1


//floor(x)	Returns x, rounded downwards to the nearest integer


//fround(x)	Returns the nearest (32-bit single precision) float representation of a number


//log(x)	Returns the natural logarithmof x


//log10(x)	Returns the base-10 logarithm of x


//log1p(x)	Returns the natural logarithm of 1 + x


//log2(x)	Returns the base-2 logarithm of x


//max(x, y, z, ..., n)	Returns the number with the highest value


//min(x, y, z, ..., n)	Returns the number with the lowest value


//pow(x, y)	Returns the value of x to the power of y


//random()	Returns a random number between 0 and 1


//round(x)	Rounds x to the nearest integer


//sign(x)	Returns the sign of a number (checks whether it is positive, negative or zero)


//sin(x)	Returns the sine of x (x is in radians)


//sinh(x)	Returns the hyperbolic sine of x


//sqrt(x)	Returns the square root of x


//tan(x)	Returns the tangent of an angle


//tanh(x)	Returns the hyperbolic tangent of a number


//trunc(x)	Returns the integer part of a number (x)

//Javascript Randoms


//Math.random()
// as i mentioned in math sectio, it returns a random number between 0 to 1
// it always return a number lower than 1

Math.random();              // returns a random number

// so how can we get bigger random integers??????

// if you use Math.floor and Math.random inside it, it is possible
Math.floor(Math.random() * 10);     // returns a random integer from 0 to 9

Math.floor(Math.random() * 11);      // returns a random integer from 0 to 10

Math.floor(Math.random() * 100);     // returns a random integer from 0 to 99

Math.floor(Math.random() * 101);     // returns a random integer from 0 to 100

Math.floor(Math.random() * 10) + 1;  // returns a random integer from 1 to 10

Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100


// A propper funtion for random 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
getRndInteger(0,10) // will return 0 to 9


function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

getRndInteger(1,10) // so if you convert it to mat its like this
// (x * (10-1 +1))+1 => (x * 10) + 1, so it will return at least 1 and at most 10


//Javascript booleans with bit of details


//Boolean Values

//Very often, in programming, you will need a data type that can only have one of two values, like

//YES / NO
//ON / OFF
//TRUE / FALSE

//For this, JavaScript has a Boolean data type. It can only take the values true or false.

//Boolean() function


//You can use the Boolean() function to find out if an expression (or a variable) is true:
Boolean(10 > 9)        // returns true

//Or even easier
(10 > 9)              // also returns true
10 > 9                // also returns true

//Comparisons
//==	equal to	//if (day == "Monday")
//>	greater than	//if (salary > 9000)
//<	less than	if //(age < 18)


//EVERYTHING WITH A VALUE IS TRUE
//100

//3.14

//-15

//"Hello"

//"false"

//7 + 1 + 3.14


//EVERYTHING WITHOUT VALUE IS FALSE

//The Boolean value of 0 (zero) is false:

var x = 0;
Boolean(x);       // returns false


//The Boolean value of -0 (minus zero) is false:

var x = -0;
Boolean(x);       // returns false

//The Boolean value of "" (empty string) is false:

var x = "";
Boolean(x);       // returns false

//The Boolean value of undefined is false:

var x;
Boolean(x);       // returns false

//The Boolean value of null is false:

var x = null;
Boolean(x);       // returns false

//The Boolean value of NaN is false:

var x = 10 / "H";
Boolean(x);       // returns false



//You can define your boolean as object with new keyword but i don't recommend

var x = false;
var y = new Boolean(false);

// typeof x returns boolean
// typeof y returns object


//When using the == operator, equal booleans are equal:

var x = false;             
var y = new Boolean(false);

// (x == y) is true because x and y have equal values

//When using the === operator, equal booleans are not equal, 
//because the === operator expects equality in both type and value.


var x = false;             
var y = new Boolean(false);

// (x === y) is false because x and y have different types


//Or even worse. Objects cannot be compared:

var x = new Boolean(false);             
var y = new Boolean(false);

// (x == y) is false because objects cannot be compared


//Note the difference between (x==y) and (x===y).
//Comparing two JavaScript objects will always return false.

//Javascript Comparison and Logical Operators

//Comparison and Logical operators are used to test for true or false.

//Comparison operators are used in logical statements to determine equality or difference between variables or values.

//Given that x = 5, the table below explains the comparison operators:

var x = 5

//==	equal to	x == 8	false	

//x == 5	true	

//x == "5"	true	

//===	equal value and equal type	x === 5	true	

//x === "5"	false	

//!=	not equal	x != 8	true	

//!==	not equal value or not equal type	x !== 5	false	

//x !== "5"	true	

//x !== 8	true	

//>	greater than	x > 8	false	

//<	less than	x < 8	true	

//>=	greater than or equal to	x >= 8	false

//<=	less than or equal to	x <= 8	true


//How Can it be Used
//Comparison operators can be used in conditional statements to compare values and take action depending on the result:

if (age < 18) text = "Too young to buy alcohol";


//Logical operators are used to determine the logic between variables or values.

//Given that x = 6 and y = 3, the table below explains the logical operators:

//&&	and	(x < 10 && y > 1) is true	
//||	or	(x == 5 || y == 5) is false	
//!	not	!(x == y) is true


//Conditional (Ternary) Operator


//JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.


//variablename = (condition) ? value1:value2 

var voteable = (age < 18) ? "Too young":"Old enough";



//Comparing Different Types


//Comparing data of different types may give unexpected results.

//When comparing a string with a number, JavaScript will convert the string to a number when doing the comparison. An empty string converts to 0. A non-numeric string converts to NaN which is always false.


2 < 12	//true	
2 < "12"	//true	
2 < "John"	//false	
2 > "John"	//false	
2 == "John"	//false	
"2" < "12"	//false	
"2" > "12"	//true	
"2" == "12"	//false

//When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2.

//To secure a proper result, variables should be converted to the proper type before comparison:

age = Number(age);
if (isNaN(age)) {
  voteable = "Input is not a number";
} else {
  voteable = (age < 18) ? "Too young" : "Old enough";
}


//Switch cases

//The switch statement is used to perform different actions based on different conditions.


//Use the switch statement to select one of many code blocks to be executed.


switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
//This is how it works:

//The switch expression is evaluated once.
//The value of the expression is compared with the values of each case.
//If there is a match, the associated block of code is executed.
//If there is no match, the default code block is executed.



//The getDay() method returns the weekday as a number between 0 and 6.

//(Sunday=0, Monday=1, Tuesday=2 ..)

//This example uses the weekday number to calculate the weekday name:

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
//The result of day will be: Friday 


//The break Keyword
//When JavaScript reaches a break keyword, it breaks out of the switch block.

//This will stop the execution inside the switch block.

//It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

//If you omit the break statement, the next case will be executed even if the evaluation does not match the case.

//The default Keyword
//The default keyword specifies the code to run if there is no case match


//The getDay() method returns the weekday as a number between 0 and 6.

//If today is neither Saturday (6) nor Sunday (0), write a default message:

switch (new Date().getDay()) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

//The result of text will be: Today is Saturday

//The default case does not have to be the last case in a switch block

switch (new Date().getDay()) {
  default:
    text = "Looking forward to the Weekend";
    break;
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
}

//If default is not the last case in the switch block, remember to end the default case with a break.

//Common Code Blocks

//Sometimes you will want different switch cases to use the same code.

//In this example case 4 and 5 share the same code block, and 0 and 6 share another code block:

switch (new Date().getDay()) {
  case 4:
  case 5:
    text = "Soon it is Weekend";
    break;
  case 0:
  case 6:
    text = "It is Weekend";
    break;
  default:
    text = "Looking forward to the Weekend";
}



//Switching Details


//If multiple cases matches a case value, the first case is selected.

//If no matching cases are found, the program continues to the default label.

//If no default label is found, the program continues to the statement(s) after the switch.



//Strict Comparison
//Switch cases use strict comparison (===).

//The values must be of the same type to match.

//A strict comparison can only be true if the operands are of the same type.


var x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}


//result is no value found because of the strict comparing, string is not equal to number


//Javascript  Loops

// So basically we use loops to execute a code for multiple times

//Loops are one of the main basics of programming and they are really handy 
// since they save you from writing same thing over and over again 
//For example 
text += cars[0] + "<br>";
text += cars[1] + "<br>";
text += cars[2] + "<br>";
text += cars[3] + "<br>";
text += cars[4] + "<br>";
text += cars[5] + "<br>";

//instead of that we can use this 
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

// like other c types we have multiple type of loop kinds in javascript

//for - loops through a block of code a number of times
// for/in - loops through the properties of an object
// for/of - loops through the values of an iterable object
// while - loops through a block of code while a specified condition is true
// do/while - also loops through a block of code while condition is true but the difference is, block of code gets executed at least once no matter what

// The for loop 
// the for loop has the following syntax
for (statement 1; statement 2; statement 3) {
  // code block to be executed
}

// statement 1 is executed (one time) before the execution of block
// statement 2 is defining the condition for executing the block
// statement 3 is executed every time after the code block has been executed

for (i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}


//so when we look at the example above
// we can see that statement 1 declares a variable before loop starts (var i = 0)
// statement 2 defines a condition for the loop to run(i must be less than 5)
// statement 3 increases the value (i++) each time the code block in the loop has been executed

//Statement 1

//Normally we use statement 1 to initialize the variable used in the loop
// But this is not always the case, JAVASCRIPT DOES NOT CARE, statement 1 is optional
// You can initiate many values in statement 1 you just need to seperate them by comma

for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}

// you can even leave it alone, and you can use your previously declared values
var i = 2;
var len = cars.length;
var text = "";
for (; i < len; i++) {
  text += cars[i] + "<br>";
}


//Statement 2
// We oftenly use statement 2 for our condition of the initial variable
// This is not always the case, JAVASCRIPT DOES NOT CARE, Statement 2 is also optional
// If statement 2 retunrs true,the loop will start over again,if it is false it will end the loop

// if you omit your statement 2, you must provide a break loop inside otherwise you have an endless loop which will crash your browser


// Statement 3

// So we usually use our statement 3 to increment the value of the initial variable
// this is not always the case, as you know JAVASCRIPT DOES NOT CARE, and statement 3 is optional
// Statement 3 can do anything like, it can do negative increment (i--), positive increment (i++) (i += 15), or anything else
// statement 3 can also be omitted, you can increment your values inside the loop
var i = 0;
var len = cars.length;
for (; i < len; ) {
  text += cars[i] + "<br>";
  i++;
}

// For in loops 

// WE use For/in loop for looping through the properities of object
// here is the syntax

for(key in object) {
  //block of code to be executed
}

// an example 
var person = {fname:"John", lname:"Doe", age:25};

var text = "";
var x;
for (x in person) {
  text += person[x];
}

// so explanation of this is basically
// we declared an object called person
// and we declared 2 variables
// we used x variable to iterate over the person object 
// X CARRIES THE KEYS OF THE OBJECT WHICH IS FNAME LNAME AGE
// WE USE THE X TO ACCESS ITS VALUES
// THE VALUE OF THE KEY IS person[x]

// Using for in over arrays

//syntax
for(variable in array) {
  //code
}

//example=
var numbers = [45, 4, 9, 16, 25];

var txt = "";
var x;
for (x in numbers) {
  txt += numbers[x]
}

// explanation 
// we declared an array called numbers
// we declared a variable called txt and x 
// we used x as our variable in our loop
// X IS CARRYING INDEXES
// WE REACH EVERY ELEMENT OF OUR ARRAY BY USING numbers[x] (indexing basically)


//Do not use for in over an Array if the index order is important.

//The index order is implementation-dependent, and array values may not be accessed in the order you expect.

//It is better to use a for loop, a for of loop, or Array.forEach() when the order is important.


//Array.forEach()
//The forEach() method calls a function (a callback function) once for each array element.

//syntax
// Array.foreach(functionname)

//Example
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt = txt + value;
}

//VALUE PARAMETER CARRIES THE ELEMENT VALUE
// INDEX PARAMETER CARRIES THE INDEX
// ARRAY CARRIES THE ARRAY IT SELF

// the example only uses the value parameter at the top so example could be written as
var txt = "";
var numbers = [45, 4, 9, 16, 25];
numbers.forEach(myFunction);

function myFunction(value) {
  txt = txt + value;
}

//For of loop 
//The javascript for of statement loops through the values of an iterable object
//it lets you loop over iterable data structures such as arrays,strings,maps,nodelists,and more

//syntax
for(variable of iterable) {
  //code
}

//variable - for every iteration the value of the next property is assigned to the variable
// variable can be declared with const let or var

// iterable - an object that has iterable properties

//Looping over an array
let games = ["csgo", "valorant", "loldurlegender"]
let txt = ""

for(let x of games) {
  text += x;
}


// Looping over string

let languge = "Javascript"
let text = ""

for(let x of language){
  text += x
}

// While loop
// This loop type is getting executed as long as specified condition is true


//Syntax
while (condition) {
  //block of code to be executed
}

//Example
while (i < 10) {
  text += "The number is " + i;
  i++;
}

// in the example, code will be exectued as long as variable i is less than 10

// IF YOU FORGET TO INCREASE YOUR VARIABLE IN CONDITION, YOU HAVE ENDLESS LOOP WHICH IS BAD



// Do while loop
//The do/while loop is a variant of the while loop. 
//This loop will execute the code block once, before checking if the condition is true, then it will repeat the loop as long as the condition is true

//Syntax
do {
  //block of code
}
while(condition);

//Example

do{
  text += "The number is " + i;
  i++;
}
while (i < 10);

// Javascript Break and continue 

//The break statement "jumps out" of a loop.

//The continue statement "jumps over" one iteration in the loop.

// you have already seen the break statement in switch case, we can use break to get out of the loop as well

//example
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i;
}
//the break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3

//The continue statement breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop

//Example
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
//this example skips the value of 3

//JAVASCRIPT TYPE CONVERSION TABLE 

//typeconvention table.png


//JAVASCRIPT BITWISE
//Javascript uses 32 bits bitwise operands
//00000000000000000000000000000101 (5) like this 

//Bitwise AND

//When a bitwise AND is performed on a pair of bits, it returns 1 if both bits are 1.

//One bit example:

//0 & 0	 => 0
//0 & 1	 => 0
//1 & 0	 => 0
//1 & 1	 => 1


//4 bit example:

//1111 & 0000	=> 0000
//1111 & 0001	=> 0001
//1111 & 0010	=> 0010
//1111 & 0100	=> 0100



//Bitwise OR
//When a bitwise OR is performed on a pair of bits, it returns 1 if one of the bits are 1:

//One bit example:

//0 | 0	=> 0
//0 | 1	=> 1 
//1 | 0	=> 1
//1 | 1	=> 1

// 4 bit example:
//1111 | 0000	=> 1111
//1111 | 0001	=> 1111
//1111 | 0010	=> 1111
//1111 | 0100	=> 1111

//Bitwise XOR
//When a bitwise XOR is performed on a pair of bits, it returns 1 if the bits are different:

//One bit example:
//0 ^ 0	=> 0
//0 ^ 1	=> 1 
//1 ^ 0	=> 1
//1 ^ 1	=> 0 

//4 bit example:
//1111 ^ 0000	=> 1111
//1111 ^ 0001	=> 1110
//1111 ^ 0010	=> 1101
//1111 ^ 0100	=> 1011

// actual examples

//JavaScript Bitwise AND (&)
//BOTH BITS HAVE TO BE 1 TO RETURN 1

//5	 => 00000000000000000000000000000101
//1	 => 00000000000000000000000000000001
//5 & 1	 => 00000000000000000000000000000001 (1)

var a = 5 & 1 // is 1


//JavaScript Bitwise OR (|)
//Bitwise OR returns 1 if one of the bits are 1:

//5	=> 00000000000000000000000000000101
//1	=> 00000000000000000000000000000001
//5 & 1	=> 00000000000000000000000000000001 (1)

var a = 5 | 1 // is 1 


//JavaScript Bitwise XOR (^)
//Bitwise XOR returns 1 if the bits are different:

//5	=> 00000000000000000000000000000101
//1	=> 00000000000000000000000000000001
//5 ^ 1	=> 00000000000000000000000000000100 (4)

var a = 5 ^ 1 // is 4

//JavaScript Bitwise NOT (~)
// flips its bits
//5	=> 00000000000000000000000000000101
//~5	=> 11111111111111111111111111111010 (-6)

var a = ~5 //is -6 

//JavaScript (Zero Fill) Bitwise Left Shift (<<)
//This is a zero fill left shift. One or more zero bits are pushed in from the right, and the leftmost bits fall off:

//5	=> 00000000000000000000000000000101
//5 << 1	=> 00000000000000000000000000001010 (10)

var a  = 5 << 1 // is 10

//JavaScript (Sign Preserving) Bitwise Right Shift (>>)
//This is a sign preserving right shift. Copies of the leftmost bit are pushed in from the left, and the rightmost bits fall off:
//-5	=> 11111111111111111111111111111011
//-5 >> 1	=> 11111111111111111111111111111101 (-3)

var a = -5 >> 1  //is -3

//JavaScript (Zero Fill) Right Shift (>>>)
//This is a zero fill right shift. One or more zero bits are pushed in from the left, and the rightmost bits fall off:

//5	=> 00000000000000000000000000000101
//5 >>> 1	=> 00000000000000000000000000000010 (2)

var a = 5 >>> 1 //is 2

//Binary Numbers
//Binary numbers with only one bit set is easy to understand:
//00000000000000000000000000000001 =>	1
//00000000000000000000000000000010	=> 2
//00000000000000000000000000000100	=> 4
//00000000000000000000000000001000	=> 8
//00000000000000000000000000010000	=> 16
//00000000000000000000000000100000	=> 32
//00000000000000000000000001000000	=> 64



//Setting a few more bits reveals the binary pattern:
//00000000000000000000000000000101	=> 5 (4 + 1)
//00000000000000000000000000001101	=> 13 (8 + 4 + 1)
//00000000000000000000000000101101	=> 45 (32 + 8 + 4 + 1)


//Converting Decimal to Binary
function dec2bin(dec){
  return (dec >>> 0).toString(2);
}

//Converting Binary to Decimal
function bin2dec(bin){
  return parseInt(bin, 2).toString(10);
}



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





//Javascript scopes 

// SCOPES DETERMINES THE ACCESSIBILITY (VISIBILITY) OF VARIABLES 

//Javascript function scope
// in javascript there are 2 scopes

//Local scope
//Global scope

// Javascript has function scopes and each function creates new scopes
// Scope determines the accessibility of these variables

//VARIABLES THAT DEFINED INSIDE THE FUNCTION ARE NOT ACCESSABLE FROM OUTSIDE THE FUNCTION

//Local Javascript Variables

//Variables declared within a javascript function is local to that function
// local variables have function scope which means they are only be accessed from within the function


//Example

// code here can NOT use carName

//function myFunction() {
//  var carName = "Volvo";

  // code here CAN use carName

//}



//Since local variables are only recognized inside their functions, variablees with the same na me can be used in different functions

// Local variables are created when a function starts,and deleted when the function is completed


//Global Javascript variables

//A variable declared outside of a function becomes global
// and they are available to use from anywhere of the cod

var carName = "Volvo";

// code here can use carName

function myFunction() {

  // code here can also use carName

}



// if you assign a value to a variable that has not been declared, it will automatially become global variable

myFunction();

// code here can use carName

function myFunction() {
  carName = "Volvo";
}


//Do NOT create global variables unless you intend to.

//Your global variables (or functions) can overwrite window variables (or functions).
//Any function, including the window object, can overwrite your global variables and functions.


///The Lifetime of JavaScript Variables
//The lifetime of a JavaScript variable starts when it is declared.

//Local variables are deleted when the function is completed.

//In a web browser, global variables are deleted when you close the browser window (or tab).



// Function Arguments
// Function arguments (parameters) work as local variables inside functions



//Javascript Hoisting


//Hoisting is javascripts default behavior of moving declarations to top

// thanks to execution context

//JAVASCRIPT DECLARATIONS ARE HOISTED

//In JavaScript, a variable can be declared after it has been used.

//In other words; a variable can be used before it has been declared.

// Because Javascript reads the whole code before executing so that allows it to recognize the variables before declarations
//thats what we call execution context

//But when it comes to let and const keyword, yes they are hoisted as well
//BUT THEY ARE NOT INITIALIZED
//  THEY ARE IN TEMPORAL DEAD ZONE FROM THE START OF THE BLOCK UNTIL DECLARED


//UNTIL THE INTERPRETER REACHES THE VARIABLE (NO MATTER WHICHONE IT IS)
// IT WILL BE UNDEFINED

//ONLY DECLARATIONS ARE HOISTED NOT THE VALUES SO THEY BE UNDEFINED

// SO DECLARE YOUR VARIABLES AT TOP, IT WILL SAVE YOU SO MUCH TIME





//Javascript this Keyword

//Example
var person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
}


//What is "this" keyword

//The javascript this keyword refers to the object it belongs to
// it has different values depending on where it is used

// IN A METHOD , this refers to  the owner object

// ALONE, this keyword refers to the global object

//In a function, this refers to the global object

//In an event, this refers to the element that recieved the element 

// Methods like call(), and apply() can refer this to any object




//This in a method
//In an object method, this refers to the "owner" of the method.

//At the example on the top of this section, this refers to the person object.

//The person object is the owner of the fullName method.


//This alone

// when used alone, the owner is the global object, so this refers to the global object

//In a browser window global object is [object Window]



// this in function
//In a JavaScript function, the owner of the function is the default binding for this.

//So, in a function, this refers to the Global object [object Window].


//this in a Function (Strict)

//Javascript strict mode does not allow bindings so this is undefined

//this in Event Handlers

//In HTML event handlers, this refers to the HTML element that received the event:
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>




//EXPLICIT FUNCTION BINDING

//The call() and apply() methods are predefined JavaScript methods.

//They can both be used to call an object method with another object as argument.


//EXAMPLE
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"

//when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1

//The JavaScript apply() Method
//The apply() method is similar to the call() method (previous chapter).

//In this example the fullName method of person is applied on person1:

Example
var person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person1 = {
  firstName: "Mary",
  lastName: "Doe"
}
person.fullName.apply(person1);  // Will return "Mary Doe"

//The Difference Between call() and apply()
//The difference is:

//The call() method takes arguments separately.

//The apply() method takes arguments as an array.

//The apply() method is very handy if you want to use an array instead of an argument list.

//The apply() Method with Arguments
//The apply() method accepts arguments in an array:

var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);

//Compared with the call() method:

var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"John",
  lastName: "Doe"
}
person.fullName.call(person1, "Oslo", "Norway");

//Javascript Closures
var add = (function () {
  var counter = 0;
  return function () {counter += 1; return counter}
})();

add();
add();
add();

// the counter is now 3

//The variable add is assigned to the return value of a self-invoking function.

//The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.

//This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.

//This is called a JavaScript closure. It makes it possible for a function to have "private" variables.

//The counter is protected by the scope of the anonymous function, and can only be changed using the add function.

//A closure is a function having access to the parent scope, even after the parent function has closed.

//JAVASCRIPT CLASSES

// we use class keyword to create a class
// Always add a method named constructor()

//Syntax

class className {
  constructor(){
      //somecode
  }
};

//Example

class programming  {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
};

let a = new programming("Javascript","C")
// so we created a class called programming

// and we initialized 2 properties called name and type

//javascript class is not an object
// it is a template for javascript objects


//SO HOW DO WE USE THESE CLASSES ???

//When you have a class, you can use the class to create objects

let language1 = new programming("Javascript", "C")
let language2 = new programming("Java", "C")

// what we did is we created 2 new objects in programming class
// constructor method is called automatically when a new object is created


//The constructor method
//The constructor method is a special method:
// it has to have exact name "constructor"
// it is executed automatically when a new object is created
// it is used to initialize object properties 

//If you do not define a constructor method, JavaScript will add an empty constructor method.

//Class methods

//Class methods are created with the same syntax as object methods

// use class keyword to create a class

// always add a constructor method

// then add any number of methods

// syntax
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}



//lets create a class called car and add a method named age that returns the age of the car
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    let date = new Date();
    return date.getFullYear() - this.year;
  }
}

let myCar = new Car("Ford", 2014);


// and you can call it with 
myCar.age() // returns 7 because of 2021 - 2014


// YOU CAN SEND PARAMETERS TO YOUR METHODS AS WELL 
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(x) {
    return x - this.year;
  }
}

let date = new Date();
let year = date.getFullYear();

let myCar = new Car("Ford", 2014);
myCar.age(year)

//Function constructors
function Person(first, last, age, eye) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.eye = eye;
}

//this is the way of creating an object creator, we can create our objects by calling this function with new keyword
let boy = new Person("Emir","Birlik", 18, "Blue")

// the way of declaring a default value in your objective is writing it to constructor, for example
function Default(value,name,id,key,phone){
  this.value = value;
  this.name = name
  this.id = id
  this.key = key;
  this.phone = phone;
  this.gender = "Male"
}
// so basically i don't need to pass in any value to my gender property its a default value. it will be added as gender propery automatically assigned with male 

//and if you want to add a property to your constructor, you have to go and add it. it has no other way

//and if you want to add a method to your constructor you have to go add it like,
function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName; 
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.changeName = function (name) {
    this.lastName = name;
  };
}


//Javascript JSON 

//JSON is a format for storing and transfering data

//JSON is often used when data is sent from a server to a web page

//What is this JSON thing and format

//JSON stands for JavaScript Object Notation

//JSON is a lightweight data interchange format

//JSON is language independent which means many languages support json format

// JSON is "self-describing" and pretty easy to understand


//The JSON syntax is derived from JavaScript object notation syntax, but the JSON format is text only. Code for reading and generating JSON data can be written in any programming language.



//JSON Example 

{
  "employees":[ 
    {"firstname":"Emir", "Age": 18},
    {"firstname":"Abdulrezzak", "Age": 55},
    {"firstname": "Nobody", "Age":23}
  ]
}


//So this JSON syntax defines an employees object: an array of 3 employee records inside objects


//JSON format evaluates to javascript objects
//since the format is syntactically identical to the code for js objects as you can see
// as a result of this similarity, javascript program can easily convert json data into native js objects


//JSON SYNTAX RULES

//DATA IS IN NAME VALUE PAIRS
// DATA IS SEPERATED BY COMMAS
// CURLY BRACES HOLD OBJECTS
//SQUARE BRACKETS HOLD ARRAYS

//JSON DATA - A NAME AND A VALUE

//JSON data is written in name value pairs, just like js object properties 

//A name value pair consists of a field name(in double quotes), followed by a colon, followed by a value
"firstName":"John"

//JSON NAMES REQUIRE DOUBLE QUOTES 

//JSON Objects
//JSON objects are written inside curly braces.

//Just like in JavaScript, objects can contain multiple name/value pairs:

{"firstName":"John", "lastName":"Doe"}

//JSON Arrays
//JSON arrays are written inside square brackets.

//Just like in JavaScript, an array can contain objects:

"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]

//Converting a JSON Text to a JavaScript Object

//A common use of JSON is to read data from a web server, and display the data in a web page.

//For simplicity, this can be demonstrated using a string as input.

//First, create a JavaScript string containing JSON syntax:

var text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

//Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

var obj = JSON.parse(text);

//Finally, use the new JavaScript object in your page like this
document.getElementById("").innerHTML =
obj.employees[1].firstName + " " + obj.employees[1].lastName;