

function double(array,doDouble){
    let newarray=doDouble(array)
    return newarray;
}

function doDouble(array){      // callback fxn 
    array.forEach((element,index) => {
        array[index]=element+element;
    });
    return array;
}

let array=[1,2,3,4,5]
let newarray=double(array,doDouble)
newarray.forEach((item,index)=>{
    console.log(item)
})


