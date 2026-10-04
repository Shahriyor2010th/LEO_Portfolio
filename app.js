
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
