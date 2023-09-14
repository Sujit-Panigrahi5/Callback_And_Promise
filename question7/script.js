

async function add(){
    let p1=await fetch("https://jsonplaceholder.typicode.com/todos/1").then((value)=>value.json())
    let p2=await fetch("https://jsonplaceholder.typicode.com/posts/1").then(value=>value.json())

    let p3=await Promise.allSettled([p1,p2])

    console.log(p3)
   
}

add()


// let p1= fetch("https://jsonplaceholder.typicode.com/todos/1").then((value)=> value.json())
// let p2= fetch("https://jsonplaceholder.typicode.com/posts/1").then(value=>value.json())

// let p3=Promise.allSettled([p1,p2])
// p3.then(([value1,value2])=>{
//     console.log(value1)
//     console.log(value2)
// })
