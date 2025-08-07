const mypromise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if (success){
            resolve("The operation was succesful!");
        }
        else{
            reject("Something went wrong!");
        }
    },2000);
});
async function myasyncfunction(){
    try{
        console.log("Waiting for the promise to resolve...");
        const result=await mypromise;
        console.log(result);
    }
    catch(error){
        console.error(error);
    }
}