/*function validatepin(str1){
    let regx = /^\d{10}$/;
    return regx.test(str1);
}
console.log(validatepin("0758692290"))*/

function validateregno(reg){
    let regn = /^\w\d{2}\/\d{4}\/\d{4}$/
    if(regn.test(reg)){
        console.log("Valid registration number")
    }
    else{
        console.log("Invalid registration number")
    }
}
console.log(validateregno("74/4230/2022"))
    