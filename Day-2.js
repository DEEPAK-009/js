// `this` depends on HOW a function is called, NOT where it is written
// `this` = “who is calling the function”

// console.log(this);
// function test() {
//   console.log(this);    // nobody called , so undefined 
// }
// test();


// const obj = {
//   name: "Deepak",
//   greet() {
//     console.log(this.name);     // obj called , so this = obj 
//   }
// };
// obj.greet();

// const obj = {
//   name: "Deepak",
//   greet() {
//     console.log(this);   
//   }
// };
// obj.greet();

// const obj = {
//   name: "Deepak",
//   greet: () => {
//     console.log(this.name);     // arrow fns do not have their own `this` , they take `this from outside . Here , outside = global 
//   }
// };
// obj.greet();

// const obj = {
//   name: "Deepak",
//   greet() {
//     function inner() {
//       console.log(this.name);       // inner() is called normally , so undefined 
//     }
//     inner();
//   }
// };
// obj.greet();

// fix above using arrow : 
// const obj = {
//   name: "Deepak",
//   greet() {
//     const inner = ()=>{
//       console.log(this.name);      
//     }
//     inner();
//   }
// };
// obj.greet();

// const obj = {
//   name: "Deepak",
//   normal: function () {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// };
// obj.normal();
// obj.arrow();


// const obj = {
//   name: "Deepak",
//   greet() {
//     console.log(this.name);
//   }
// };
// const fn = obj.greet;       // fn is no longer called via object . so `this` is lost 
// fn();

// const obj = {
//   name: "Deepak",
//   inner: {
//     name: "Inner",
//     greet() {
//       console.log(this.name);
//     }
//   }
// };
// obj.inner.greet();