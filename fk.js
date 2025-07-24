function getvalidnumber(){
    let number;
    while(true){
        try{
            let input=prompt("enter a valid number")
            number=Number(input)
            if(isNaN(number)){
                throw new error("This is not anumber")
            }
            console.log("Thank you! You entered:",number);break;
        }
        catch (error){
            console.log("Error:", error.message)
        }
    }
}
getvalidnumber()