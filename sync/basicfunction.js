/*basic function
function greet (name){
    
    let msg = "hello" + name+"!";
     return console.log(msg);
}
greet("muma")*/
  /*const add = function (a,b){
   let sum = a+b
   console.log(sum);
   return sum;
    
     
 }
 add(20,10)//call a function*/
 /*const add = (a,b)=> a+b;
  result = add(30,50);
console.log(result)*/
/*const mult = (a,b)=> a*b;
result =mult(30,50);
console.log(result)
const div = (a,b)=> a/b;
result =div(30,50);
console.log(result)

//example of a callback function
setTimeout(function(){
    console.log(`this call back function executes after 1 second`)
},60000)*/

/*simulated loading
console.log("loading data,please wait...")
setTimeout(function(){
    console.log("Data load succesfully");
},2000)

console.log("you willl be redirected in 5sec...")
setTimeout(function(){
    window.location.href = "https://google.com";
},5000)*/
 
let logoutTimer = setTimeout(function(){
    console.log("session expired!You will be logged out")
    window.location.href = "logout";
},2000
)


