console.log(" hello world");
document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");
    
    document.querySelector("h1").addEventListener("click", function () {
        document.querySelector("h1").style.backgroundColor = "purple";
       document.querySelector("h1").style.color = "red";  
       document.querySelector("p").innerHTML = " hello javascript";
       document.querySelector(".queen").innerHTML = " hello reine des forets";
    //    document.querySelector("h1").style.opacity = "0%";
    });
    document.querySelector("button").addEventListener("click", function ()
    {

        document.querySelector("button").style.backgroundColor = "green";        
    })
    
    
    
});

