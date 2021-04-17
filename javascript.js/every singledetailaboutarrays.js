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

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}
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


//more depth on sorting

//The Compare Function
//The purpose of the compare function is to define an alternative sort order.

//The compare function should return a negative, zero, or positive value, depending on the arguments:

//function(a, b){return a - b}
//When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.

//If the result is negative a is sorted before b.

//If the result is positive b is sorted before a.

//If the result is 0 no changes are done with the sort order of the two values.

//Numeric sort Accending order
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});

//Numeric sort decending order
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});

//randomize sorting
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});

// The Fisher Yates Method for random sort
//The above example, array.sort(), is not accurate, it will favor some numbers over the others.
//Here is the Fisher Yates Method
var points = [40, 100, 1, 5, 25, 10];

for (i = points.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i)
    k = points[i]
    points[i] = points[j]
    points[j] = k
  }

//Finding hte Highest or Lowest Array value
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b - a});
// now points[0] contains the highest value
// and points[points.length-1] contains the lowest value

// Since is not efficent at all we have a method called Math.max
var points = [40, 100, 1, 5, 25, 10];

myArrayMax(points)

function myArrayMax(arr) {
    return Math.max.apply(null, arr);
  }

  // and we have a method finding min value in array as well which is Math.min
var points = [40, 100, 1, 5, 25, 10];

MyArrayMin(points)

function myArrayMin(arr) {
    return Math.min.apply(null, arr);
}
