
// Widgets

// Time

const timeDiv = document.getElementById("time");
const dateDiv = document.getElementById("date");
const locationDiv = document.getElementById("location");

const people = document.querySelectorAll(".person");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const updateTime = function () {
    let currentTime = luxon.DateTime.now().setZone("Europe/Rome").toFormat("HH:mm:ss");
    timeDiv.innerHTML = currentTime;
    let currLocation = "Milan, Italy";
    locationDiv.innerHTML = currLocation;

    people.forEach(person => {
    let timezone = person.getAttribute("data-timezone");
    let location = person.getAttribute("data-location");
    person.addEventListener("click", ()=>{
        currentTime = luxon.DateTime.now().setZone(timezone).toFormat("HH:mm:ss");
        currLocation = location;
        console.log("clicked" + location + "" + currentTime);
    })
    });
}

updateTime();

setInterval(function () {
    updateTime()
}, 1000);

// person.addEventListener("click", ()=> {     
// })

// Cloud Toggle

let isCloudy = false;
let cloudDiv = document.querySelector(".cloud-toggle");

do {
    cloudDiv.textContent = "Clouds";
} while (isCloudy = false);

// function cloudToggle() {
// if (isCloudy = false){
//     isCloudy = true;
//     cloudDiv.textContent = "Clear Sky";
// } else {
//     isCloudy = false;
// }
// }
