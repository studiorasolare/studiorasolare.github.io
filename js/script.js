
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
    {name: "Dakar, Senegal", timezone: "Africa/Dakar"},
    {name: "Doha, Qatar", timezone: "Asia/Qatar"},
    {name: "Berlin, Germany", timezone: "Europe/Berlin"},
    {name: "Moscow, Russia", timezone: "Europe/Moscow"},
];

const people = Array.from(document.querySelectorAll(".person"));
let currentLogoTime;
let currentPlace;
let currentTime;
let currentDate;

let locWidget = document.getElementById("loc-widget");
let dateWidget = document.getElementById("date-widget");

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

        locWidget.style.cssText = "background-color: var(--color-p)";
        dateWidget.style.cssText = "background-color: var(--color-p)";

        setTimeout(() => {
            locWidget.style.cssText = "background-color: ";
            dateWidget.style.cssText = "background-color: ";
        }, 250);


        currentN = Number(person.getAttribute("data-order"));

        currentPlace = places[currentN].name;
        locationDiv.innerHTML = currentPlace;

        let updateTime = function () {
            currentTime = luxon.DateTime.now().setZone(places[currentN].timezone).toFormat("HH:mm");
            timeDiv.innerHTML = currentTime;

            currentLogoTime = luxon.DateTime.now().setZone(places[currentN].timezone).toFormat("HH:mm:ss");
            timeLogoDiv.innerHTML = currentLogoTime;

            currentDate = luxon.DateTime.now().setZone(places[currentN].timezone);
            dateDiv.innerHTML = currentDate.toLocaleString({month: "long", day: "numeric", weekday: "long"},{ locale: "en" });
        };
        setInterval(function (){
            updateTime()
        }, 1000);
    })
});

// Links and Pages

// body content
let bodyContent = document.getElementById("body-cont");
let peoplePage = document.getElementById("page-people");

const infoNav = Array.from(document.querySelectorAll(".nav-info"));
const infoPages = Array.from(document.querySelectorAll(".page-info"));
const infoCards = Array.from(document.querySelectorAll(".card-info"));

const projectList = Array.from(document.querySelectorAll(".project"));
const projectPages = Array.from(document.querySelectorAll(".page-project"));
const projectCards = Array.from(document.querySelectorAll(".card-proj"));

const widgets = document.querySelector("div.widgets");
const container = document.querySelector("div.body-content");

let logoDiv = document.getElementById("ora-logo");

let removeBodyContent = function () {
    bodyContent.scrollTo(0,0);
    if (peoplePage.style.cssText = "display: flex") {
        peoplePage.style.cssText = "display: none";
        bodyContent.style.cssText = "overflow-y: scroll";
    }
    infoPages.forEach(page => {
        if (page.style.cssText = "display: flex") {
            page.style.cssText = "display: none"; 
            infoNav.forEach(nav=>nav.style.cssText = "color: ; cursor: pointer");
            infoCards.forEach(card => card.style.cssText = "background-color: ; cursor: pointer");
        }
    });
    projectPages.forEach(page => {
        if (page.style.cssText = "display: flex"){
            page.style.cssText = "display: none"
            projectList.forEach(project => {
                project.style.cssText = "color: ; cursor: pointer";
            });
            projectCards.forEach(card => {
                card.style.cssText = "background-color: ; cursor: pointer";
            });
        }
    });
  };

infoNav.forEach(nav => {
    nav.addEventListener("click",()=>{
        currentN = Number(nav.getAttribute("data-order"));
        removeBodyContent();
        mobileHidePreview();
        mobileHideWidget();
        removeMenuMobile();
        peoplePadding();
        bodyContent.style.cssText = "overflow-y: scroll";
        infoPages[currentN].style.cssText = "display: flex";
        nav.style.cssText = "color: var(--color-p); cursor: default";
        infoCards[currentN].style.cssText = "background-color: var(--color-card-hv); cursor: default";
    });
});

infoCards.forEach(card => {
    card.addEventListener("click",()=>{
        currentCard = Number(card.getAttribute("data-order"));
        removeBodyContent();
        mobileHidePreview();
        mobileHideWidget();
        peoplePadding();
        bodyContent.style.cssText = "overflow-y: scroll";
        infoPages[currentCard].style.cssText = "display: flex";
        card.style.cssText = "background-color: var(--color-card-hv);cursor: default";
    })
});

let mobileHidePreview = function () {
     if (window.innerWidth < 900) {
    if (peoplePage.style.display === "none"){
        previewsBody.style.display = "none";
    } else {
            previewsBody.style.display = "";
        }
}
};

let mobileHideWidget = function () {
    if (window.innerWidth < 900) {
        widgets.style.display = "none";
        container.style.display = "none";
    }
};

let mobileShowWidget = function () {
    if (window.innerWidth < 900) {
        widgets.style.display = "flex";
        container.style.display = "";
    }
};


// Projects list
let projects = [
    {name:"Make it Endless"},
    {name:"Bloom Branding"},
    {name:"Cycle Jeans"},
    {name:"Ray Tattoo Studio"},
    {name:"Monrou"},
    {name:"Amish Refresh"},
    {name:"Schrotthagen"},
    {name:"Folder App"},
    {name:"Cobalt Collective"},
    {name:"BFFR Portfolio"},
    {name:"Tekairos"},
    {name:"Vania Levu"},
]

projectList.forEach(project => {
    if (window.innerWidth > 900) {
    project.addEventListener("mouseover", ()=>{
        currentP = Number(project.getAttribute("data-order"));
        project.innerHTML = projects[currentP].name;
    });
    }
    project.addEventListener("mouseout", ()=>{
        function revertProjectName() {
            pNumber = Number(project.getAttribute("data-order"));    
            project.innerHTML = "project " + (pNumber + 1);
        }
        setTimeout(revertProjectName,200);
    });
    project.addEventListener("click",()=>{
        curP = Number(project.getAttribute("data-order"));
        removeBodyContent();
        mobileHidePreview();
        mobileHideWidget();
        removeMenuMobile();
        peoplePadding();
        bodyContent.style.cssText = "overflow-y: scroll";
        projectPages[curP].style.cssText = "display: flex";
        project.innerHTML = projects[curP].name;
        project.style.cssText = "color: var(--color-p); cursor: default";
        projectCards[curP].style.cssText = "background-color: var(--color-card-hv);cursor: default";
    });
    
});  

projectCards.forEach(card => {
    card.addEventListener("click",()=>{
        currentN = Number(card.getAttribute("data-order"));
        removeBodyContent();
        mobileHidePreview();
        mobileHideWidget();
        peoplePadding();
        bodyContent.style.cssText = "overflow-y: scroll";
        projectPages[currentN].style.cssText = "display: flex";
        card.style.cssText = "background-color: var(--color-card-hv);cursor: default";
        projectList[currentN].style.cssText = "color: var(--color-p); cursor: default";
    })
});



logoDiv.addEventListener("click", ()=>{
    removeBodyContent(); 
    peoplePage.style.cssText = "display:flex"; 
    bodyContent.style.cssText = "overflow-y: hidden"; 
    mobileHidePreview();
    mobileShowWidget();
    peoplePadding();
})

// Cloud, Party toggle

let clouds = document.getElementById("clouds");
let cloudButton = document.getElementById("cloud-toggle");
let party = document.getElementById("party");
const emojiList = Array.from(document.querySelectorAll(".emoji"));
let partyButton = document.getElementById("party-toggle");


clouds.style.cssText = "display: none";
party.style.cssText = "display: none";

cloudButton.addEventListener("click",()=>{
    if (clouds.style.display === "none"){
        clouds.style.display = "block";
        cloudButton.style.cssText = "background-color: var(--color-card-hv)";
        cloudButton.textContent = "Clear";
        cloudButton.style.cssText = "background-image: none;";
        party.style.cssText = "display: none";
        partyButton.style.cssText = "background-color:";
        partyButton.textContent = "Party";
    } else {
        clouds.style.display = "none";
        cloudButton.textContent = "Cloudy";
        cloudButton.style.cssText = "background-color:";
        cloudButton.style.cssText = "background-image: ";
    }
})

function emojiAnimation() {
emojiList.forEach((emoji, index) => {
    setTimeout(() => {
    var randomTop = Math.floor(Math.random() * 100) + 1;
    var randomLeft = Math.floor(Math.random() * 100) + 1;
    emoji.style.cssText = `opacity:1; top: ${randomTop}%; left: ${randomLeft}%;`;
    }, index * 700);
});
};

setInterval(emojiAnimation,1000);

partyButton.addEventListener("click", ()=>{
    if (party.style.display === "none"){
        party.style.display = "block";
        partyButton.style.cssText = "background-color: var(--color-card-hv)";
        partyButton.textContent = "Work";
        partyButton.style.cssText = "background-image: none;";
        clouds.style.cssText = "display: none";
        cloudButton.style.cssText = "background-color:";
        cloudButton.textContent = "Cloudy";
    } else {
        party.style.display = "none";
        partyButton.style.cssText = "background-color:";
        partyButton.textContent = "Party";
    }
});



// Dark/Light mode toggle

const pImg1 = Array.from(document.querySelectorAll(".person-1"));
const pImg2 = Array.from(document.querySelectorAll(".person-2"));
const pImg3 = Array.from(document.querySelectorAll(".person-3"));
const pImg4 = Array.from(document.querySelectorAll(".person-4"));
const pImg5 = Array.from(document.querySelectorAll(".person-5"));
const pImg6 = Array.from(document.querySelectorAll(".person-6"));

function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
      return localStorageTheme;
    }
  
    if (systemSettingDark.matches) {
      return "dark";
    }
  
    return "light";
  }
  
function updateButton({ buttonEl, isDark }) {
const newCta = isDark ? "Day" : "Night";
buttonEl.innerText = newCta;
const logoColor = isDark ? "images/logo-dark.svg" : "images/logo-light.svg";
logoDiv.src = logoColor;
pImg1.forEach(img => {
    const imgColor = isDark ? "images/people/person1-dark.svg" : "images/people/person1-light.svg";
    img.src = imgColor;
})
pImg2.forEach(img => {
    const imgColor = isDark ? "images/people/person2-dark.svg" : "images/people/person2-light.svg";
    img.src = imgColor;
})
pImg3.forEach(img => {
    const imgColor = isDark ? "images/people/person3-dark.svg" : "images/people/person3-light.svg";
    img.src = imgColor;
})
pImg4.forEach(img => {
    const imgColor = isDark ? "images/people/person4-dark.svg" : "images/people/person4-light.svg";
    img.src = imgColor;
})
pImg5.forEach(img => {
    const imgColor = isDark ? "images/people/person5-dark.svg" : "images/people/person5-light.svg";
    img.src = imgColor;
})
pImg6.forEach(img => {
    const imgColor = isDark ? "images/people/person6-dark.svg" : "images/people/person6-light.svg";
    img.src = imgColor;
})

}

function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

button.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
  
    localStorage.setItem("theme", newTheme);
    updateButton({ buttonEl: button, isDark: newTheme === "dark" });
    updateThemeOnHtmlEl({ theme: newTheme });
  
    currentThemeSetting = newTheme;
}); 


// hidden on scroll function
let previewsBody = document.getElementById("preview-body");

// let senseSpeed = 5;
// let previousScroll = 0;
// previewsBody.addEventListener("scroll", function(event) {
//     if (window.innerWidth >= 900) return;
//     let scroller = previewsBody.scrollTop;
//     if (!widgets) return;
//     if (scroller - senseSpeed > previousScroll) {
//         widgets.style.display = "none";
//         container.style.display = "none";
//     } else if (scroller + senseSpeed < previousScroll) {
//         widgets.style.display = "flex";
//         container.style.display = "";
//     }
//     previousScroll = scroller;
// });

const navToggle = document.getElementById("nav-toggle");
const divContainer = document.querySelector(".div-container");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");
const navOptions = document.querySelector(".nav-options");
divContainer.style.display = "flex";

navToggle.addEventListener("click", () => {
    if (divContainer.style.display === "flex") {
        divContainer.style.display = "none";
        navToggle.textContent = "Close";
        navLeft.style.display = "flex";
        navRight.style.display = "flex";
        navOptions.style.flexDirection = "column";
    } else {
        divContainer.style.display = "flex";
        navToggle.textContent = "Menu";
        navLeft.style.display = "none";
        navRight.style.display = "none";
        navOptions.style.flexDirection = "row";
    }
});

function removeMenuMobile() {
    if (window.innerWidth < 900) {
        divContainer.style.display = "flex";
        navToggle.textContent = "Menu";
        navLeft.style.display = "none";
        navRight.style.display = "none";
        navOptions.style.flexDirection = "row";
    }
};

function peoplePadding() {
if (peoplePage.style.display === "flex") { 
    bodyContent.style.cssText = "padding-bottom: 130px";
} else {
    bodyContent.style.cssText = "padding-bottom:";
}
};

window.onload = bodyContent.style.cssText = "padding-bottom: 130px";

// Last written by Anna Maria Lewke, 05/17/2025 :)