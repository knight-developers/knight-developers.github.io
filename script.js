////////// Initializations //////////
const fetchLinks = ['assets/data/services.json', 'assets/data/contacts.json']; // links to fetch data
// DOM Objects
const navBar = document.querySelector("nav");
const servicesContainer = document.querySelector("#services > div");
const contactsList = document.querySelector("footer ul");


////////// Functions //////////
const toggleMenu = () => document.querySelector("nav > div").classList.toggle("open");

// This function returns the response of the fetch request to the url as a promise
const createPromise = url => new Promise((resolve, reject) => 
        fetch(url)
        .then(respnonse => resolve(respnonse.json()))
        .catch(err => reject(err))
    );

// HTML Template Generator Functions
const serviceTemplate = service => `
        <article>
            <div>
                <h3>${service.service}</h3>
                <p>${service.description}</p>
            </div>
            <img src="${service.illustration}" alt="${service.service}">
        </article>
    `;

const contactTemplate = contact => `
        <li>
            <a href="${contact.link}" target="_blank"><i class="${contact.iconClasses}"></i></a>
        </li>
    `;


////////// Event Listener Functions //////////
document.getElementById("menu").addEventListener("click", toggleMenu);
document.querySelectorAll("nav a").forEach(link => link.addEventListener("click", toggleMenu));


////////// Window Events //////////
onload = () => {
    Promise.all(fetchLinks.map(link => createPromise(link)))
    .then(([services, contacts]) => {
        services.forEach(service => servicesContainer.innerHTML += serviceTemplate(service));
        contacts.forEach(contact => contactsList.innerHTML += contactTemplate(contact));
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