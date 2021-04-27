document.getElementById("opret").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
})

document.getElementById("log").addEventListener("mouseenter", openMenu); 

function openMenu(){

    document.getElementById("dropdown").classList.toggle("active");
}
