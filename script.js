
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

// Links and Pages

// body content
let bodyContent = document.getElementById("body-cont");
let peoplePage = document.getElementById("page-people");
let aboutPage = document.getElementById("page-about");

const projectList = Array.from(document.querySelectorAll(".project"));
const projectPages = Array.from(document.querySelectorAll(".page-project"))

// cards
let cardAbout = document.getElementById("card-about");

// nav elements
let logoDiv = document.getElementById("ora-logo");
let aboutNav = document.getElementById("about");

let removeBodyContent = function () {
    bodyContent.scrollTo(0,0);
    if (peoplePage.style.cssText = "display: flex") {
        peoplePage.style.cssText = "display: none";
    }
    if (aboutPage.style.cssText = "display: flex") {
        aboutPage.style.cssText = "display: none";
        cardAbout.style.cssText = "background-color: ; cursor: pointer";
        aboutNav.style.cssText = "color: ; cursor: pointer";
    }
    projectPages.forEach(projectPage => {
        if (projectPage.style.cssText = "display: flex"){
            projectPage.style.cssText = "display: none"
            projectList.forEach(project => {
                project.style.cssText = "color: ; cursor: pointer";
            });
        }
    });
  };

// Projects list
let projects = [
    {name:"Make it Endless"},
    {name:"Bloom Branding"},
    {name:"Cycle Jeans"},
    {name:"Ray Tattoo Studio"},
    {name:"Being Bold"},
    {name:"Tekairos"},
    {name:"Amish Refresh"},
    {name:"Schrotthagen"},
    {name:"Folder App"},
]

projectList.forEach(project => {
    project.addEventListener("mouseover", ()=>{
        currentP = Number(project.getAttribute("data-project"));
        project.innerHTML = projects[currentP].name;
    });
    project.addEventListener("mouseout", ()=>{
        function revertProjectName() {
            pNumber = Number(project.getAttribute("data-project"));    
            project.innerHTML = "project " + (pNumber + 1);
        }
        setTimeout(revertProjectName,200);
    });
    project.addEventListener("click",()=>{
        curP = Number(project.getAttribute("data-project"));
        removeBodyContent();
        projectPages[curP].style.cssText = "display: flex";
        project.innerHTML = projects[curP].name;
        project.style.cssText = "color: #626262; cursor: default";
    });
});

logoDiv.addEventListener("click", ()=>{removeBodyContent(); peoplePage.style.cssText = "display:flex";})

cardAbout.addEventListener("click", ()=>{removeBodyContent(); aboutPage.style.cssText = "display: flex"; cardAbout.style.cssText = "background-color: #e0e0e0;cursor: default"; aboutNav.style.cssText = "color: #626262; cursor: default";})
aboutNav.addEventListener("click", ()=>{removeBodyContent(); aboutPage.style.cssText = "display: flex"; cardAbout.style.cssText = "background-color: #e0e0e0;cursor: default"; aboutNav.style.cssText = "color: #626262; cursor: default";})

// Last written by Anna Maria Lewke, 23/04/2024 :)