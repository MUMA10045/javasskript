 let text = "Welcome to our website. welcome to our website. welcome to our website"
 
            let index = 0;
            function typewriter(){
                if(index < text.length){
                    document.getElementById("typewriter").innerHTML+= index++;
                    setTimeout(typewriter,100)//adda next characters after 100 ms
                }
            }
            console.log(text)