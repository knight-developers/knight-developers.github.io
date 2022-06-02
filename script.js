// initializations
const navBar = document.querySelector("nav");

// functions
const toggleMenu = () => document.querySelector("nav > div").classList.toggle("open");

// event listener functions
document.getElementById("menu").addEventListener("click", toggleMenu);
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", toggleMenu));


// window events
onload = () => {
    fetch('assets/data/services.json')
    .then(respnonse => respnonse.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => console.error(err))
    .finally(() => document.querySelector("body > div").style.display = "none");
};

onscroll = () => {
    if (scrollY > innerHeight/4)
        navBar.style.backgroundColor = "var(--primary)";
    else
        navBar.style.backgroundColor = "transparent";
}