
// const firstname=document.getElementById("firstname")
// const lastname=document.getElementById("lastname")
// const age= document.getElementById("age")
// const submit=document.getElementById("submit")
// const show=document.getElementById("show")

// function ageinDays(){
//     let first=firstname.value;
//     let last=lastname.value;
//     let ageindays=age.value;
//     let person={
//         firstname:first,
//         lastname:last,
//         age:ageindays
//     }
    
//     console.log(person)
//     let fullname=first.concat(last);
//     let ageiniDay=ageindays*365;

//     return ()=>{
//         document.getElementById("alldetails").textContent=`The person's full name is : ${fullname} , and their age in days is : ${ageiniDay} .`
//         document.getElementById("alldetails").style.display="block"
//         console.log("The person's full name is ", fullname,", and their age  in days is ", ageiniDay)
//     }
// }

// function showthedetails(){
//     let fxn=ageinDays();
//     fxn();

// }
let person={

}

function ageinDays(person,logRuselt){
    
    person.firstname=prompt("enter your first name")
    person.lastname=prompt("enter your last name")
    person.age=prompt("enter your age ");
    

    let fullname=person.firstname.concat(person.lastname);
    let ageiniDay=person.age*365;

    return logRuselt(fullname,ageiniDay)
}

function logRuselt(fullname,ageiniDay){
    console.log("The person's full name is ", fullname,", and their age  in days is ", ageiniDay)
}

let fxn=ageinDays(person,logRuselt);
fxn();


