let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let holidayIcon = "🎉";

document.getElementById("body").style.backgroundColor = getBackgroundColor(days);
document.getElementById("coffee_of_the_day").src = getPhotoOfDay();
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
            return "./images/caffè-macchiato.jpeg";
        case "Tue":
            return "./images/caffè-mocha.jpeg";
        case "Wed":
            return "./images/cappuccino.jpeg";
        case "Thu":
            return "./images/cold-brew.jpeg";
        case "Fri":
            return "./images/espresso.jpeg";
        case "Sat":
            return "./images/iced-coffee.jpg";
        case "Sun":
            return "./images/latte.jpeg";
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