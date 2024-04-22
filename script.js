
// Widgets

// Time

const logoTimeDiv = document.getElementById("time-logo");
const timeDiv = document.getElementById("time");
const dateDiv = document.getElementById("date");
const locationDiv = document.getElementById("location");

const people = document.querySelectorAll(".person");


const updateTime = function () {
    let currentTime = luxon.DateTime.now().setZone("Europe/Rome").toFormat("HH:mm:ss");
    logoTimeDiv.innerHTML = currentTime;
    let currLocation = "Milan, Italy";
    locationDiv.innerHTML = currLocation;
    let currentDate = luxon.DateTime.now().setZone("Europe/Rome");
    dateDiv.innerHTML = currentDate.toLocaleString({ month: 'long', day: 'numeric', weekday: 'long' });
    timeDiv.innerHTML = luxon.DateTime.now().setZone("Europe/Rome").toFormat("HH:mm");
}

updateTime();

setInterval(function () {
    updateTime()
}, 1000);

// people.forEach(person => {
//     let timezone = person.getAttribute("data-timezone");
//     console.log(timezone);
//     let location = person.getAttribute("data-location");
//     person.addEventListener("click", ()=>{
//         currentTime = luxon.DateTime.now().setZone(timezone).toFormat("HH:mm:ss");
//         currLocation = location;
//         console.log("clicked" + location + "" + currentTime);
//     })
//     });

// Cloud Party and Screen Toggle

let isCloudy = false;
let cloudDiv = document.querySelector(".cloud-toggle");

do {
    cloudDiv.textContent = "Clouds";
} while (isCloudy = false);

let isParty = false;
let partyDiv = document.querySelector(".party-toggle");

do {
    partyDiv.textContent = "Party";
} while (isParty = false);

let isDark = false;
let screenDiv = document.querySelector(".screen-toggle");

do {
    screenDiv.textContent = "Dark";
    screenDiv.style.cssText = 'color: white; background: black;';
} while (isDark = false);

// Body Content

let logoDiv = document.getElementById("ora-logo");
let peoplePage = document.getElementById("page-people");
let aboutPage = document.getElementById("page-about");
let bodyContent = document.getElementById("body-cont");

let cardAbout = document.getElementById("card-about");

let removeBodyContent = function () {
    bodyContent.scrollTo(0,0);
    if (peoplePage.style.cssText = "display: flex") {
        peoplePage.style.cssText = "display: none";
    }
    if (aboutPage.style.cssText = "display: flex") {
        aboutPage.style.cssText = "display: none";
    }
  };

logoDiv.addEventListener("click", ()=>{removeBodyContent(); peoplePage.style.cssText = "display:flex";})
cardAbout.addEventListener("click", ()=>{removeBodyContent(); aboutPage.style.cssText = "display: flex"; })
