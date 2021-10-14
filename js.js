"use strict"
const card2 = document.querySelector(".card__box-2");

card2.addEventListener("click", (e)=>{
    let element = e.target;
    if(element.tagName === "IMG"){
        element.parentElement.classList.toggle("active");
        if(element.style.transform == "rotate(180deg)"){
            element.style.transform = "";
            element.parentElement.children[0].style.fontWeight = "";
        }
        else{
            element.style.transform = "rotate(180deg)";
            element.parentElement.children[0].style.fontWeight = "700";
        }
    }
    else if(element.tagName === "DIV" && !element.classList.contains("card__box-2")){
        element.classList.toggle("active");
        if(element.children[1].style.transform == "rotate(180deg)"){
            element.children[1].style.transform = "";
            element.children[0].style.fontWeight = "";
        }
        else{
            element.children[1].style.transform = "rotate(180deg)";
            element.children[0].style.fontWeight = "700";
        }
    }
    else if(element.tagName === "P"){
        element.parentElement.classList.toggle("active");

        if(element.parentElement.children[1].style.transform  === "rotate(180deg)"){
                element.parentElement.children[1].style.transform = "";
                element.parentElement.children[0].style.fontWeight = "";
            }
            else{
                element.parentElement.children[1].style.transform  = "rotate(180deg)";
                element.parentElement.children[0].style.fontWeight = "700";
            }
    }
});