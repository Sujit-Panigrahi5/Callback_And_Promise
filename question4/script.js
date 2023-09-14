

let books=[
    {
        title:"The Pilgrim's Progress",
        author:"John Bunyan",
        year:"1678"
    },
    {
        title:"Robinson Crusoe",
        author:"Daniel Defoe",
        year:"1719"
    },
    {
        title:"Gulliver's Travel",
        author:"Jonathan Swift",
        year:"1726"
    },
    
]

function addtitle(books,printbyalphetically){
    let newlistoftitle=books.map((item,index)=>{
        return item.title;
    })
    console.log(newlistoftitle)
    printbyalphetically(newlistoftitle)
}

function printbyalphetically(newlistoftitle){
    newlistoftitle.sort()
    console.log(newlistoftitle)
}

addtitle(books,printbyalphetically)