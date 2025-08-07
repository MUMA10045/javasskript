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
mypromise
.then(result=>{
    console.log(result);

})
.catch(error=>{
    console.error(error);
})