// let mode = document.querySelector("#mode");
let tex = document.querySelector("button");
let back = document.querySelector(".bod");
let logo = document.querySelector("#logo");
let currmode = "light";
mode.addEventListener("click", ()=> {
    if (currmode === "light"){
        currmode = "dark";
        back.style.backgroundColor = "black";
        logo.className = "fa-solid fa-moon";
    }
    else {
        currmode = "light";
        back.style.backgroundColor = "white";
        logo.className = "fa-solid fa-sun";
    }
})