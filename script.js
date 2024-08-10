// render boxex
const container=document.querySelector(".container")
const palattes=document.querySelectorAll(".color-palette .patettes")
palattes[0].addEventListener("click",()=>{
    document.body.classList.add("light")
})
palattes[1].addEventListener("click",()=>{
    document.body.classList.remove("light")
})
for (let i=1;i<136;i++){
    container.innerHTML+=`<div class="wrapper">${[i]}</div>`
}
