

fetch("https://jsonplaceholder.typicode.com/posts")
.then((respons)=>{
    return respons.json()
}).then((respons)=>{
    console.log(respons)
}).catch((error)=>{
    console.log("error  handle",error)
})