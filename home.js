const home = document.getElementById("home");
const navlinks = document.getElementById("navlinks");
home.addEventListener("click", () => {
    home.classList.toggle("active");
    navlinks.classList.toggle("active");
})