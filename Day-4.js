// ✅ fetch + Response object
// ✅ res.json() (stream concept 🔥)
// ✅ Error handling (res.ok)
// ✅ POST requests + JSON.stringify


// async function getUsers(){
//     const res = await fetch("https://jsonplaceholder.typicode.com/users") 
//     const data = await res.json() // json -> converts it to js object 
//     // const data2 = await res.json()
//     console.log(data2)
// }
// getUsers()


// async function getUsers(){
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//         const data = await res.json() 
//         console.log(data) 
//     }
//     catch(err){
//         console.log("Error : ", err)
//     }
// }
// getUsers()


// catch() wont run for 404/500 bcoz the req successfully reached server.
// fetch resolves ✅
// but response is “error status”


// async function getUsers(){
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users")
//         if(!res.ok){
//             throw new Error("API error" + res.status) 
//         }
//         const data = await res.json() 
//         console.log(data) 
//     }
//     catch(err){
//         console.log("Error : ", err.message)
//     }
// }
// getUsers()



// async function getUsers(){
//     try{
//         const res = await fetch("https://jsonplaceholder.typicode.com/users", {
//             method : "POST",
//             headers : {
//                 "Content-Type" : "application/json" 
//             },
//             body : JSON.stringify({
//                 name: "deepak" ,
//                 age : "22"
//             })
//         })
//         if(!res.ok){
//             throw new Error("API error" + res.status) 
//         }
//         const data = await res.json() 
//         console.log(data) 
//     }
//     catch(err){
//         console.log("Error : ", err.message)
//     }
// }
// getUsers()