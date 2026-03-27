// var a = 10 ;    // function scoped 
// let b = 20 ;    // block scoped  

// function test(){
//     var a = 30 ;
//     let b = 40 ;

//     if(true){
//         let b = 50 ;    
//         console.log(a, b) ;
//     }
//     console.log(a,b) ;
// }

// test() ;
// console.log(a,b) ;


// var x = 10;
// function foo() {
//   console.log(x);
//   var x = 20;
// }
// foo();


// var x = 1 ;
// function a(){
//     var x = 20 ;
//     b() ;
// }
// function b(){
//     console.log(x) ;
// }
// a() ;


// function outer(){
//     let count = 0 ;
//     return function inner(){
//         count++ ;
//         console.log(count) ;
//     };
// }
// const fn = outer() ;
// fn(); 
// fn(); 
// fn(); 

// function outer() {
//   let count = 0;

//   return function inner() {
//     let count = 100;
//     console.log(count);
//   };
// }
// const fn = outer() ;
// fn() ;



// setInterval(()=>{
//     for(var i=0; i<5; i++){
//         setTimeout(()=>{
//             console.log(i) ;
//         }) ;
//     }
// }, 2000)

// for(let i=0; i<5; i++){
//         setTimeout(()=>{
//             console.log(i) ;
//         }) ;
// }


                    // 📦 1. Scope Rules

// ✅ Rule 1: JS uses Lexical Scope
//      A function accesses variables based on where it is defined, NOT where it is called

// let a = 90 ;
// function x(){
//     var a = 50 ;
//     console.log(a) ;
//     b();
// }
// function b(){
//     console.log(a) ;   
// }
// x() ;


// ✅ Rule 2: Scope Chain
//      If variable not found → go one level up → repeat → global → error

// var a = 90 ;
// function x(){
//     var b = 50 ;
//     console.log(a) ;
//     setTimeout(()=>{
//         var c = 30 ;
//         console.log(a) ;
//     })
// }
// x() ;

// ✅ Rule 3: var is function-scoped
// Ignored by {} blocks
// Only respects function boundaries



// ✅ Rule 4: let and const are block-scoped
// Respect {} (if, loops, etc.)


                // ⚠️ 2. Hoisting Rules
// hoisting : js moves declearations to the top before exec

// ✅ Rule 5: Hoisting happens BEFORE execution

// console.log(a) ;                let a ;
// let a = 10 ;            =>      console.log(a) ;
//                                 a = 10 ;

// ✅ Rule 6: var is initialized as undefined

// ❌ Rule 7: let & const are NOT initialized

// ✅ Rule 8: Function Declarations are fully hoisted

// ❌ Rule 9: Function Expressions behave like variables

// sayhi() ;   //error
// const sayhi = function(){} ;

// ⚠️ Rule 10: Function > var (in hoisting priority)

// ✅ Rule 11: TDZ = time between hoisting and initialization

// ❌ Rule 12: Accessing in TDZ → ReferenceError

// ✅ Rule 13: Every function call creates a new context
// Own memory
// Own variables

// ✅ Rule 14: JS runs on a call stack
// Last in → first out


                            // 🔒 5. Closure Rules

// ✅ Rule 15: Closure = function + its lexical environment



// 💥 8. Golden Debug Strategy

// Whenever confused:
// 👉 Ask in this order:

// Where is variable declared?
// What is its scope?
// Is it hoisted?
// Is it in TDZ?
// Which execution context am I in?
// Is closure involved?


// let a = 10;
// function test() {
//     console.log(a);
//     var a = 23 ;    // hoisting 
// }
// test();

// let a = 10;
// function test() {
//   console.log(a);
// }
// function run() {
//   let a = 20;
//   test();
// }
// run();

// function test() {
//   console.log(a);
//   let a = 10;
// }
// test();

// console.log(foo);
// var foo = 10;
// function foo() {
//   console.log("Hello");
// }

// sayHi();
// var sayHi = function () {
//   console.log("Hi");
// };

// function test() {
//   console.log(x);
//   var x = 10;
//   function x() {}
// }
// test();

// function outer() {
//   let x = 10;
//   return function inner() {
//     console.log(x);
//   };
// }
// const fn = outer();
// fn();

// function outer() {
//   let x = 10;
//   return function inner() {
//     let x = 20;
//     console.log(x);
//   };
// }
// const fn = outer();
// fn();

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// for (const i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }

// function outer() {
//   let x = 10;
//   return function () {
//     console.log(x);
//     x++;
//   };
// }
// const fn1 = outer();
// const fn2 = outer();       // every fn has its own independant variables 
// fn1();
// fn1();
// fn2();

// var a = 10;
// function test() {
//   console.log(a);   // variable is not declared in the fn , so it check wiht its parent . 
//   a = 20;
//   console.log(a);
// }
// test();
// console.log(a);