/*let x = 0;
while(x<0){
    console.log("This is an infinite loop")
}
while(true){
    console.log("This is an infinite loop")
}
let regx = /hello/i
str = "goodbye world hello";
if (regx.test(str)){
 console.log("Match found")

}
else {
    console.log("Match not found")
}*/

let regx = /(\d+)/;
let result = regx.exec("Order number : 12345")
console.log(result ? `match found: ${result[0]}` : "no match found");