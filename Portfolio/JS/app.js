const navbar = document.querySelector("#nav");
const navbtn = document.querySelector("#nav-btn");
const closebtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");

window.addEventListener("scroll",function(){
    if(this.window.pageYOffset>80){
        navbar.classList.add("navbar-fixed");
    }
    else{
        navbar.classList.remove("navbar-fixed");
    }
});
navbtn.addEventListener("click",function(){
    sidebar.classList.add("show-sidebar")
});
closebtn.addEventListener("click",function(){
    sidebar.classList.remove("show-sidebar")
});

date.innerHTML = new Date().getFullYear();