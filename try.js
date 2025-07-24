/*try{
    let a=5
let b=0
result=a/
console.log(result)}
catch(error){
 console.log("error cought:"+error.message)
}*/

function squareroot(num){
    for(i=0;i>=3; i++ ){
        try{
        if(isNaN(num)){
            throw new error("not a number")
        console.log(`you entered: ${num}`)
        }
    }
    
        catch(error){
            console.log("error:" + error.message)
        }
    }

    let result=Math.sqrt(num)
    console.log(`the square root ${num} is equal to:${result}`)
}
squareroot(a)

