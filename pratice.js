

let p1=new Promise((resolve,reject)=>{
    console.log("start1")
    setTimeout(()=>{
        // reject("error")
        resolve("resolve promise1")
    },2000)
})

let p2=new Promise((resolve,reject)=>{
    console.log("start2")
    setTimeout(()=>{
        resolve("resolve promise2")
    },3000)
})
let p3=new Promise((resolve,reject)=>{
    console.log("start3")
    setTimeout(()=>{
        // resolve("resolve promise3")
        reject(new Error("it give the error "))
    },1000)
})

// p1.then(()=>{
//     console.log("promise1 fulfiled")
// })

// p2.then(()=>{
//     console.log("promise2 fulfiled")
// })

// p3.then(()=>{
//     console.log("promise3 fulfiled")
// })

// let newpromise=Promise.all([p1,p2,p3]) // if all promise resolved then it will work but if one of them is reject then it will now work 

// let newpromise=Promise.allSettled([p1,p2,p3])
// let newpromise=Promise.race([p1,p2,p3])
let newpromise=Promise.any([p1,p2,p3])
newpromise.then((value)=>{
    console.log(value)
})

