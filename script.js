
// Location, Time and Date

let timeLogoDiv = document.getElementById("time-logo");
let locationDiv = document.getElementById("location");
let timeDiv = document.getElementById("time");
let dateDiv = document.getElementById("date");

// Add a new nested object for each country/person (use tz database codes)
let places = [
    {name: "Milan, Italy", timezone: "Europe/Rome"},
    {name: "Santiago, Chile", timezone: "America/Santiago"},
    {name: "Tokyo, Japan", timezone: "Asia/Tokyo"},
    {name: "London, UK", timezone: "Europe/London"},
    {name: "New York, USA", timezone: "America/New_York"},
    {name: "Shanghai, China", timezone: "Asia/Shanghai"},
    {name: "Canberra, Australia", timezone: "Australia/Canberra"},
    {name: "Ottawa, Canada", timezone: "America/Toronto"},
    {name: "Bangkok, Thailand", timezone: "Asia/Bangkok"},
    {name: "Amsterdam, Netherlands", timezone: "Europe/Amsterdam"},
    {name: "Johannesburg, South Africa", timezone: "Africa/Johannesburg"},
];

const people = Array.from(document.querySelectorAll(".person"));
let currentLogoTime;
let currentPlace;
let currentTime;
let currentDate;

// default loc, time and Date
locationDiv.innerHTML = places[0].name;
let isDefault = true;
function updateDefaultTime () {
    people.forEach(person => person.addEventListener("click", ()=>isDefault = false))
    if (isDefault === true) {
        timeLogoDiv.innerHTML = luxon.DateTime.now().setZone(places[0].timezone).toFormat("HH:mm:ss");
        timeDiv.innerHTML = luxon.DateTime.now().setZone(places[0].timezone).toFormat("HH:mm");
        dateDiv.innerHTML = luxon.DateTime.now().setZone(places[0].timezone).toLocaleString({month: "long", day: "numeric", weekday: "long"});
    } else {
        return;
    }
};
setInterval(function (){
    updateDefaultTime()
}, 1000);

// updates loc, time and date for each person
people.forEach(person => {
    person.addEventListener("click", ()=>{
        currentN = Number(person.getAttribute("data-order"));

        currentPlace = places[currentN].name;
        locationDiv.innerHTML = currentPlace;

        let updateTime = function () {
            currentTime = luxon.DateTime.now().setZone(places[currentN].timezone).toFormat("HH:mm");
            timeDiv.innerHTML = currentTime;

            currentLogoTime = luxon.DateTime.now().setZone(places[currentN].timezone).toFormat("HH:mm:ss");
            timeLogoDiv.innerHTML = currentLogoTime;

            currentDate = luxon.DateTime.now().setZone(places[currentN].timezone);
            dateDiv.innerHTML = currentDate.toLocaleString({month: "long", day: "numeric", weekday: "long"});
        };
        setInterval(function (){
            updateTime()
        }, 1000);
    })
});

// Cloud, Party and Screen Toggle

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
    screenDiv.textContent = "Night";
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


// Last written by Anna Maria Lewke, 23/04/2024 :)