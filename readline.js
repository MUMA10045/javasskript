
while (!isNaN(myname)){
    console.log("kindly enter a name,not number");
    myname = readline.question("what is your name");
}
console.log(`hello, ${myname}`);