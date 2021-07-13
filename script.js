let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let holidayIcon = "🎉";

document.getElementById("coffee_of_the_day").src = getPhotoOfWeek();
document.getElementById("day_of_week").innerHTML = getDayOfWeek(days);

// function test() {
//     let d = new Date();
//     let dayOfWeek = d.getDay();
//     alert(dayOfWeek);
// }

function getDayOfWeek() {
    let d = new Date();
    // let dayOfWeek = d.getDay();
    // alert(dayOfWeek);
    return days[d.getDay()];
}

function getPhotoOfWeek() {
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