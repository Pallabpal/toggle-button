var togglebtn=document.querySelector(".toggle-btn");
var toggled=false;
var element=document.body;
togglebtn.addEventListener('click',function(){
    if(!toggled){
    
    element.classList.toggle("dark-mode");
    togglebtn.style.marginLeft="40px";
    toggled=true;
    }
    else{
        togglebtn.style.marginLeft="1px";
        element.classList.remove("dark-mode");
        toggled=false;
    }
})

// var togglebtn=document.querySelector(".toggle-btn");
// var toggled=true;
// togglebtn.addEventListener('click',function(){
    
//     if(toggled){
   
//     document.body.classList.toggle("dark-mode");
//     togglebtn.style.marginLeft="40px";
//     toggled=false;
//     }
//     else{
//         document.body.classList.toggle("white-mode");
//         togglebtn.style.marginLeft="1px";
//         toggled=true;
//     }
// })
// var togglebtn = document.querySelector(".toggle-btn");
// var toggled = true;

// togglebtn.addEventListener('click', function() {
//     if (toggled) {
//         document.body.classList.toggle("dark-mode");
//         togglebtn.style.marginLeft = "40px";
//         toggled = false;
//     } else {
//         document.body.classList.remove("dark-mode"); // Remove the "dark-mode" class
//         togglebtn.style.marginLeft = "1px";
//         toggled = true;
//     }
// });

// ..........................codeing ninjas-------------

// var toggled = false;

// var hTag = document.getElementsByTagName("h1")[0];
// var bodyTag = document.getElementsByTagName("body")[0];
// var circle = document.getElementById("circle");

// document.getElementById("toggle").onclick = function () {
        
//     if(!toggled) {
        
//         hTag.classList.add("color-white");
//         bodyTag.classList.add("bck-color-black");
//         circle.style.marginLeft = "100px";
        
//         toggled = true;
        
//     } else {
        
//         hTag.classList.remove("color-white");
//         bodyTag.classList.remove("bck-color-black");
//         circle.style.marginLeft = "1px";
        
//         toggled = false;
        
//     }
    
// }
