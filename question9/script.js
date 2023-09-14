

// fetch("https://jsonplaceholder.typicode.com/posts/12345")
// .then((value)=>{
//     return value.json()
// }).then((resopnse)=>{
//     document.querySelector("h1").textContent=resopnse;
// }).catch((error)=>{
//     document.querySelector("h1").textContent=`we handle the error ${error}`
//     console.log(error)
// })

async function fetchapi(){

    try {
        let p=await fetch("https://jsonplaceholder.typicode.com/posts/123456789")
        let value=await p.json()
    
        document.getElementById("h1tag").textContent=value;
    } catch (error) {
        document.getElementById("h1tag").textContent=`we handle the error ${error}`
        console.log(error)

    }
}
fetchapi()