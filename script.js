// initializations
const navBar = document.querySelector("nav");
const servicesContainer = document.querySelector("#services > div");

// functions
const toggleMenu = () => document.querySelector("nav > div").classList.toggle("open");
const serviceTemplate = service => {
    return `
        <article>
            <div>
                <h3>${service.service}</h3>
                <p>${service.description}</p>
            </div>
            <img src="${service.illustration}" alt="${service.service}">
        </article>
    `;
};

// event listener functions
document.getElementById("menu").addEventListener("click", toggleMenu);
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", toggleMenu));


// window events
onload = () => {
    fetch('assets/data/services.json')
    .then(respnonse => respnonse.json())
    .then(data => {
        data.forEach(service => servicesContainer.innerHTML += serviceTemplate(service));
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