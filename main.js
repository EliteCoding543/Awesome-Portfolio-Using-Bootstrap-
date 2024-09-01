// Header Scroll //
let nav = document.querySelector(".navbar");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
    }else{
       nav.classList.remove("header-scrolled");
    }
}
// nav hind when link link click //
let navBar = document.querySelectorAll(".nav-link");
let navColl = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function(a){
    a.addEventListener("click",() =>{
        navColl.classList.remove("show");
    })
})