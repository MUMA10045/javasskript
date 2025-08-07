function getvalidnumber(){
    const readline = require("readline-sync");
    let input = readline.question("Enter a number?");

    try{
        
        let number = Number(input)
        if(isNaN(number)){
            throw new error("invalid input.That is not a number")
        }
        console.log("you entered the number:", number)
    }
    catch(error){
        console.log("Error:", error.message);

    }
}
