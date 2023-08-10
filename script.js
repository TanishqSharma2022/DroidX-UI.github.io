const page1 = document.getElementById("page1");

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

document.onscroll = function() {
    if (window.scrollY > window.innerHeight * 0.42) {
        const page2 = document.getElementById("page2");
        page2.style.display = "block";
        page2.style.animation = "fadeIn 5s";
        console.log("loaded2");
    }
    if (page2.style.display === "block" && window.scrollY > 1.34*window.innerHeight) {
        const page3 = document.getElementById("page3");
        page3.style.display = "block";
        page3.style.animation = "fadeIn 3s";
        console.log("loaded3");
    }
}





function toggle(){
    const navbar = document.querySelector(".mobilenav");
    navbar.classList.toggle("active");
    document.querySelector("#container").classList.toggle("active");
}



function change_theme(){

    var root = document.querySelector(":root");
    if(document.querySelector("#theme").innerHTML == "light_mode"){
        document.querySelector("#theme").innerHTML = "dark_mode";
        root.style.setProperty('--light-cream-color', '#e9d7c5'); 
        root.style.setProperty('--dark-cream-color', '#34302d'); 


    }else{

        document.querySelector("#theme").innerHTML = "light_mode";
        root.style.setProperty('--light-cream-color', '#34302d'); 
        root.style.setProperty('--dark-cream-color', '#e9d7c5'); 

    }
}