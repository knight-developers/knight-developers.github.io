const navLinks = document.querySelector("nav > div");

const toggleMenu = () => {
    navLinks.classList.toggle("open");
};

document.getElementById("menu").addEventListener("click", toggleMenu);
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", toggleMenu));