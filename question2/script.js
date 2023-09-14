

function manipulateString(str,logString){
    return logString(str);
}

let logString=(str)=>{
    return str.toUpperCase();
}

let str="hello , World !"
console.log("The Manipulate String is :" , manipulateString(str,logString))