// 1. Run all sync code
// 2. Run ALL microtasks (Promises)
// 3. Run macrotasks (setTimeout)



// console.log("start") 
// setTimeout(()=>{        // goes to a queue 
//     console.log("timeout")
// }, 0)
// console.log("end")


// console.log("start") 
// setTimeout(() => {
//     console.log("timeout")
// }, 0);
// Promise.resolve().then(()=>{
//     console.log("promise")
// })
// console.log("end")


// console.log("A");
// setTimeout(() => console.log("B"), 0);//this comes first before D in queue
// Promise.resolve().then(() => {
//   console.log("C");
//   setTimeout(() => console.log("D"), 0);
// });
// Promise.resolve().then(() => console.log("E"));
// console.log("F");



// async function test(){
//     console.log("A") 
//     await Promise.resolve() 
//     console.log("B")
// }
// console.log("Start");
// test();
// console.log("End");

// console.log("Start");
// setTimeout(() => console.log("Timeout"), 0);
// async function test() {
//   console.log("A");
//   await Promise.resolve();
//   console.log("B");
// }
// test();
// Promise.resolve().then(() => console.log("C"));
// console.log("End");