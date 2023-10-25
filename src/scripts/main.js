const NAV = document.querySelector("nav.nav")
const NAV_OPEN = document.querySelector(".nav-open")
const NAV_CLOSE = document.querySelector(".nav-close")

NAV_OPEN.addEventListener("click",()=>{
    NAV.dataset.open = true
})
NAV_CLOSE.addEventListener("click",()=>{
    NAV.dataset.open = false
})