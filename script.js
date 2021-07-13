let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let holidayIcon = "🎉";

document.getElementById("body").style.backgroundColor = getBackgroundColor(days);
document.getElementById("coffee_of_the_day").src = getPhotoOfDay().url;
document.getElementById("coffee_of_the_day").alt = getPhotoOfDay().alt;
document.getElementById("day_of_week").innerHTML = getDayOfWeek(days);

// function test() {
//     let d = new Date();
//     let dayOfWeek = d.getDay();
//     alert(dayOfWeek);
// }

function getBackgroundColor(days) {
    switch (getDayOfWeek(days)) {
        case "Mon":
            return "red";
        case "Tue":
            return "blue";
        case "Wed":
            return "green";
        case "Thu":
            return "gray";
        case "Fri":
            return "yellow";
        case "Sat":
            return "brown";
        case "Sun":
            return "orange";
        default:
            break;
    }
}

function getDayOfWeek() {
    let d = new Date();
    // let dayOfWeek = d.getDay();
    // alert(dayOfWeek);
    return days[d.getDay()];
}

function getPhotoOfDay() {
    let d = new Date();
    switch (getDayOfWeek(days)) {
        case "Mon":
            return {
                url: "./images/caffè-macchiato.jpeg",
                alt: "Caffeè Macchiato"
            };
        case "Tue":
            return {
                url: "./images/caffè-mocha.jpeg",
                alt: "Caffeè Mocha"
            };
        case "Wed":
            return {
                url: "./images/cappuccino.jpeg",
                alt: "Cappuccino"
            };
        case "Thu":
            return {
                url: "./images/cold-brew.jpeg",
                alt: "Cold Brew"
            };
        case "Fri":
            return {
                url: "./images/espresso.jpeg",
                alt: "Espresso"
            };
        case "Sat":
            return {
                url: "./images/iced-coffee.jpg",
                alt: "Iced Coffee"
            };
        case "Sun":
            return {
                url: "./images/latte.jpeg",
                alt: "Latte"
            };
        default:
            break;
    }
}


function getBackground() {
    let d = new Date();
    switch (getDayOfWeek(days)) {
        case "Mon":
            return "red";
        case "Tue":
            return "blue";
        case "Wed":
            return "green";
        case "Thu":
            return "gray";
        case "Fri":
            return "yellow";
        case "Sat":
            return "brown";
        case "Sun":
            return "orange";
        default:
            break;
    }
}