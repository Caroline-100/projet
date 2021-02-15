// take Element
document.addEventListener('DOMContentLoaded', function()
{
    console.log('DOM fully loaded and parsed');
    var element = document.getElementById("call");
    function clickelemnt(event) {
        element.style.backgroundColor = "green";
        document.querySelector(".get_call").innerHTML = "0658235623";
        console.log("click");
        
    }
    element.addEventListener("click",clickelemnt);


    var submittheform = document.querySelector('#fo').addEventListener("submit", function name(event)
     {
         
         document.querySelector(".conf").innerHTML = "0658235623";
         console.log("click-click");
         event.preventDefault();
        
    }
    )
});