const readline = require(`readline-sync`);
let day = readline.question("days number?");
let dayswk =day;
while (!isNaN(day)){
    console.log("kindly enter a name,not number");
    day = readline.question("day");
}
console.log(`hello, ${day}`);


let daywk =0;
switch(day){
    case 1:console.log("monday");break
    case 2:console.log("tuesday");break
    case 3:console.log("wednesday");break
    case 4:console.log("thursday");break
    case 5:console.log("friday");break
    case 6:console.log("saturday");break
    case 7:console.log("sunday");break
    default:console.log("unknown day");break
}