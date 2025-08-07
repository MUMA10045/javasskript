const readline = require(`readline-sync`);
function getvalidnumber(){
    let number;
    while(true){
        try{
            let input = readline.question("Enter a valid number:")
            number= Number(input);
            if(isNaN(number)){
                throw new error("That is not a number!")
            }
            console.log("Thank you! You entered:", number);break;
        }
        catch(error){
            console.log("Error:", error.message)
        }
    }
}
getvalidnumber()