function fetchdata(callback){
    console.log("fetch data");
    setTimeout(function(){
        console.log("data fetched!");
        callback("here is your data");
    },3000)
}
function displaydata(data){
console.log("Display:" + data);
}
fetchdata(displaydata);