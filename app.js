
// Copy function

let copybtn = document.querySelector(".copy")

copybtn.onclick = ()=>{
    let value = document.querySelector(".value");
    let value2 = value.textContent
    
    navigator.clipboard.writeText(value2);
    copybtn.classList.remove("fa-regular")
    copybtn.classList.remove("fa-clone")
    copybtn.classList.add("fa-solid")
    copybtn.classList.add("fa-circle-check")
}


// Scrolling functions

let projectsBTN = document.querySelector(".projects__btn")
let backgroundBTN = document.querySelector(".background__btn")
let achievBTN = document.querySelector(".achievements__btn")

projectsBTN.onclick = ()=>{
    window.scrollBy({
        top: 600,
        behavior: "smooth"
    });
}
backgroundBTN.onclick = ()=>{
    window.scrollBy({
        top: 3200,
        behavior: "smooth"
    });
}
achievBTN.onclick = ()=>{
    window.scrollBy({
        top: 2450,
        behavior: "smooth"
    });
}


// Contact function

let contactBTN = document.querySelector(".contact__btn")

contactBTN.onclick = ()=>{
    window.scrollBy({
        top: 4000,
        behavior: "smooth",
    })
}