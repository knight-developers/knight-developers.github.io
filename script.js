const toggleMenu = () => document.querySelector("nav > div").classList.toggle("open");

document.getElementById("menu").addEventListener("click", toggleMenu);
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", toggleMenu));