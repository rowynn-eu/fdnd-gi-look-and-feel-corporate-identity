const menuNav = document.querySelector("nav")
const menuClick = document.querySelector("#mobileMenu")

menuClick.addEventListener("click", openMenu)

function openMenu() {
    menuNav.classList.toggle("is-open")
}


// if (menuNav.classList.contains("is-open")) {
//     console.log("is-open true")
// } else {
//     console.log("is-open false")
// }