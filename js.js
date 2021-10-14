const card2 = document.querySelector(".card__box-2");
card2.addEventListener("click", (e)=>{
    let elemento = e.target;
    if(elemento.tagName === "IMG"){
        elemento.parentElement.classList.toggle("active");
        if(elemento.style.transform == "rotate(180deg)"){
            elemento.style.transform = "";
            elemento.parentElement.children[0].style.fontWeight = "";
        }
        else{
            elemento.style.transform = "rotate(180deg)";
            elemento.parentElement.children[0].style.fontWeight = "700";
        }
    }
    else if(elemento.tagName === "DIV" && !elemento.classList.contains("card__box-2")){
        elemento.classList.toggle("active");
        if(elemento.children[1].style.transform == "rotate(180deg)"){
            elemento.children[1].style.transform = "";
            elemento.children[0].style.fontWeight = "";
        }
        else{
            elemento.children[1].style.transform = "rotate(180deg)";
            elemento.children[0].style.fontWeight = "700";
        }
    }
    else if(elemento.tagName === "P"){
        elemento.parentElement.classList.toggle("active");

        if(elemento.parentElement.children[1].style.transform  === "rotate(180deg)"){
                elemento.parentElement.children[1].style.transform = "";
                elemento.parentElement.children[0].style.fontWeight = "";
            }
            else{
                elemento.parentElement.children[1].style.transform  = "rotate(180deg)";
                elemento.parentElement.children[0].style.fontWeight = "700";
            }
    }
});


