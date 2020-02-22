var firstpart = document.querySelector(".hideone");
var secondpart = document.querySelector(".hidetwo");
var buttonOne = document.querySelector(".firstpartbutton");
var buttonTwo = document.querySelector(".secondpartbutton");
var backone = document.querySelector(".one");
var backtwo = document.querySelector(".two");
var conone = document.querySelector("#conone");
var contwo = document.querySelector("#contwo");
var progress = document.querySelector("progress");
var submit = document.querySelector("#submit");
var first = document.querySelector(".firsticon"); 
var second = document.querySelector(".secondicon"); 
var third = document.querySelector(".thirdicon"); 

submit.addEventListener("click", function(){
    progress.value = "100";
    third.style.visibility = "visible";
   
})
buttonOne.addEventListener("click", function(){
    if(conone.checkValidity())
    {
      progress.value = "33";
    } else{
        progress.value = "0";
    }
  
});
buttonTwo.addEventListener("click", function(){
    if(contwo.checkValidity()){
    progress.value = "66";
    }
    else{
        progress.value = "33";
    }
});
backone.addEventListener("click", function(){
    firstpart.style.display = "none";
    secondpart.style.display = "none";
    progress.value = "0";
    first.style.visibility = "hidden";
});
backtwo.addEventListener("click", function(){
    secondpart.style.display = "none";
    progress.value = "66";
    second.style.visibility = "hidden";
    third.style.visibility = "hidden";
});

if (firstpart.style.display === "none") {
    firstpart.style.display = "block";
   
  } else {
    firstpart.style.display = "none";
  }
  if (secondpart.style.display === "none") {
    secondpart.style.display = "block";
  } else {
    secondpart.style.display = "none";
  }

  function show()
{
    if(conone.checkValidity())
    {
        if (firstpart.style.display === "none")
        {
           firstpart.style.display = "block";
           first.style.visibility = "visible";
         } 
    } 
      
     
  }
    function showone()
        {
            if(contwo.checkValidity()){
                if (secondpart.style.display === "none") {
                    second.style.visibility = "visible";
                    secondpart.style.display = "block";
                  }
            }
        }

     
