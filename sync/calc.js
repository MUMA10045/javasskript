const readline =require(`readline-sync`);
function calculator(){
    console.log("Welcome to the console calculator!");

    console.log("\nchoose an operation:");
    console.log("1.Addition(+)");
    console.log("2.Substraction(-)");
    console.log("3.Multlipication(*)");
    console.log("4.Division(/)");

    const operation= readline.question("Enter yoour choice (1-4):");

    const num1=parseFloat(readline.question("Enter the first Number:"));
    const num2=parseFloat(readline.question("Enter the second number"));
    let result;

    switch(operation){
        case `1`:
            result=num1+num2;
            console.log(`result: ${num1}+${num2}=${result}`);break;
             case `2`:
            result=num1-num2;
            console.log(`result: ${num1}-${num2}=${result}`);break;
             case `3`:
            result=num1*num2;
            console.log(`result: ${num1}*${num2}=${result}`);break;
             case `4`:
            if (num2===0){
            console.log("Error:cannot divide by zero");
            }
            else{
                result=num1/num2
                 console.log(`result: ${num1}/${num2}=${result}`);break;
                
            }
            default:console.log("invalid operation")
    }
}
calculator()