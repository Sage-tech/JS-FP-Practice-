// ----------What are functions?---------------
// are unit of compuations that take an input and produce an output

//--------- function declaration----------------
//const a = compute(2, 5)
// function compute(x, y) {
//     return x + y;
// }

//-------Function input and output---------------
// Defining a function means that we associate a name with a computation desctiption.
// x and y are input parameters
// x + y is the output

//---------- function Invocation---------------
//===========================================
// function compute(x, y) {
//     return x + y;
// }
// const a = compute();

// const b = new compute();

// const c = compute.call(null, 1, 2, 3)

// const d = compute.apply(null, [3, 2, 3])
//============================================
// functions can be invoked wiht more or fewer parameters than defined/ declared in its defintion.
// the extra parameters are ignored while the missing ones are set to undefined

//---Hoisting-------
//functions (and variables defined with var) are put into the memory during the compliation phase.
// this way these functions can be executed from anywhere, even in places before the actual defintion.

//----function expression / function literal--------
// Anonymous Fucntion Expressions
//==============================
// const a = compute(4, 5)
// const compute = function (x, y) {
//     return x + y;
// }
//===============================
// without naming the function this could be an issue with which function to use
//to display in a stack trace
//============================
 // Named function Expressions
//=================================
// const compute = function calculate (x, y) {
//     return x + y;
// }
// const a = compute(4, 5)
//=================================
// if preforming a recursion you will be using the "calculate" name and not the compute

//------IIFE - Immediately Invoked Fucntion Expressions ------------
//==============================
// const a = (function(x, y) {
//     return x + y;
// })(2, 8) // funtion locations
//======================
// -----------------------Arrow Fuctions------------------------
//====================================
// const compute = (x, y) => {
//     return x + y;
// }
// const a = compute(2, 9)
//===========================
// shorter, faster, easier fucntions and clear
// arrow functions do not have this.

//---------- Implict return ------------------ if it only one line
//===================================
// const compute = (x, y) => x + y;
// const a = compute(24, 9)
//=====================================
//---------- Functions are Objects in JS-------------------

const person = {
    name: "Sally",
    age: 32
}
function displayName() { 
    return this.name;
}

const a = displayName.call(person);
console.log(a)


