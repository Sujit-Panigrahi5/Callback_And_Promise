



async function  printdata(){
    let api= await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let m=await api.json()

    console.log(m)
}
printdata()



// let a=fetch("https://jsonplaceholder.typicode.com/todos/1")
// a.then((value)=>{
//     return value.json()
    
// }).then((value)=>{
//     console.log(value)
// })
// .catch((error)=>{
//     console.log("error")
// })