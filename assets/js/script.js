let days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
let holidayIcon = "🎉";

document.getElementById("body").style.backgroundColor = getInfoAboutDay().pagePrimaryColor;
document.getElementById("main_container").style.backgroundColor = getInfoAboutDay().pageSecondaryColor;
document.getElementById("coffee_of_the_day").src = getInfoAboutDay().itemImgURL;
document.getElementById("coffee_of_the_day").alt = getInfoAboutDay().itemImgAlt;
document.getElementById("day_of_week").innerHTML = getInfoAboutDay().day;
document.getElementById("coffe_of_the_day_description").innerHTML = getInfoAboutDay().description;

function getInfoAboutDay() {
    let d = new Date();
    switch (d.getDay()) {
        case 0:
            return {
                day: "Sunday",
                itemImgURL: "./images/caffè-macchiato.jpeg",
                itemImgAlt: "Caffeè Macchiato",
                pagePrimaryColor: "#f00",
                pageSecondaryColor: "#b35a5a",
                description: `Latte macchiato (Italian pronunciation: [ˈlatte makˈkjaːto]) is a coffee beverage; the name means stained or marked milk. Marked as in an espresso stain on the milk used. It is a play on “Espresso macchiato” which is an espresso with a drop or two of milk or cream. </br>A latte macchiato may be prepared simply by frothing milk, generally producing generous foam, pouring it into a glass, and adding espresso. The frothing is generally extensive, yielding significant light, "dry" foam, with a layer of liquid milk underneath, rather than the "wet" microfoam used in latte art.`
            };
        case 1:
            return {
                day: "Monday",
                itemImgURL: "./images/caffè-mocha.jpeg",
                itemImgAlt: "Caffeè Mocha",
                pagePrimaryColor: "#00f",
                pageSecondaryColor: "#4e4ee8",
                description: "A caffè mocha (/ˈmɒkə/ or /ˈmoʊkə/), also called mocaccino (Italian: [mokatˈtʃiːno]), is a chocolate-flavoured warm beverage that is a variant of a caffè latte (Italian: [kafˈfɛ lˈlatte]),[1] commonly served in a glass rather than a mug. Other commonly used spellings are mochaccino[2] and also mochachino. The name is derived from the city of Mocha, Yemen, which was one of the centers of early coffee trade.[3] Like latte, the name is commonly shortened to just mocha."
            };
        case 2:
            return {
                day: "Tuesday",
                itemImgURL: "./images/cappuccino.jpeg",
                itemImgAlt: "Cappuccino",
                pagePrimaryColor: "#0f0",
                pageSecondaryColor: "#92ff92",
                description: "A light, foamy cappuccino is a favorite drink for many coffee lovers. Once you acquire two basic barista skills (pulling shots and foaming milk), you can learn how to make a cappuccino yourself. A cappuccino is an Italian coffee drink that is traditionally prepared with equal parts double espresso, steamed milk, and steamed milk foam on top. Cream may be used instead of milk. It is typically smaller in volume than a latte, and has a thicker layer of microfoam. Espresso is typically made with dark roast coffee and ground finely."
            };
        case 3:
            return {
                day: "Wednesday",
                itemImgURL: "./images/cold-brew.jpeg",
                itemImgAlt: "Cold Brew",
                pagePrimaryColor: "#808080",
                pageSecondaryColor: "#3f3f3f",
                description: `There are a few ways to make iced coffee at home, but the most well-loved is the cold brew method. Cold brew is really as simple as mixing ground coffee with cool water and steeping the mixture in the fridge overnight. The next day you strain the mixture, leaving you with a concentrate (it’s strong, so you’ll want to dilute it) that can be served right away or stored for up to two weeks.</br>Beyond the fact that this method makes for a longer-lasting brew that can be prepared in big batches, cold brew coffee also tastes downright incredible. The cold steeping process makes a smooth, mellow cup of coffee that has very little acidity or bitterness.`
            };
        case 4:
            return {
                day: "Thursday",
                itemImgURL: "./images/espresso.jpeg",
                itemImgAlt: "Espresso",
                pagePrimaryColor: "#ffff00",
                pageSecondaryColor: "#ffff46",
                description: "Espresso (/ɛˈsprɛsoʊ/, Italian: [eˈsprɛsso]) is a coffee-brewing method of Italian origin,[1] in which a small amount of nearly boiling water (about 90 °C or 190 °F) is forced under 9–10 bars (900–1,000 kPa; 130–150 psi) of pressure (expressed) through finely-ground coffee beans. Espresso coffee can be made with a wide variety of coffee beans and roast degrees. Espresso is the most common way of making coffee in southern Europe, especially in Italy, Spain, Portugal, Switzerland, Southern France and Bulgaria.</br>Espresso has more caffeine per unit volume than most coffee beverages, but because the usual serving size is much smaller, the total caffeine content is less than a mug of standard brewed coffee.[4] The actual caffeine content of any coffee drink varies by size, bean origin, roast method and other factors, but a typical 28 grams (1 ounce) serving of espresso usually contains 65 milligrams of caffeine, whereas a typical serving of drip coffee usually contains 150 to 200 mg."
            };
        case 5:
            return {
                day: "Friday",
                itemImgURL: "./images/iced-coffee.jpg",
                itemImgAlt: "Iced Coffee",
                pagePrimaryColor: "#a52a2a",
                pageSecondaryColor: "#ffb5b5",
                description: "Iced coffee is a coffee beverage served cold. It may be prepared either by brewing coffee in the normal way and then serving it over ice or in cold milk, or by brewing the coffee cold. In hot brewing, sweeteners and flavoring may be added before cooling, as they dissolve faster. Iced coffee can also be sweetened with pre-dissolved sugar in water.</br>Pre-packaged iced coffee is available as a grocery item in several countries, though without ice. Iced coffee is also regularly available in most coffee shops. Iced coffee is generally brewed at a higher strength than normal coffee, since it is diluted by the melting ice."
            };
        case 6:
            return {
                day: "Saturday",
                itemImgURL: "./images/latte.jpeg",
                itemImgAlt: "Latte",
                pagePrimaryColor: "#ffa500",
                pageSecondaryColor: "#ffd484",
                description: "Caffe latte (/ˌkæfeɪ ˈlɑːteɪ/ or /ˈlæteɪ/)[1][2] is a coffee drink made with espresso and steamed milk. The term comes from the Italian caffè e latte[3] [kafˌfɛ e lˈlatte], caffelatte [kaffeˈlatte] or caffellatte [kaffelˈlatte], which means \"coffee and milk\". In English, it is often shortened to just latte; either or both words sometimes have an accent on the final e (a hyperforeignism or to indicate it is pronounced, not the more-common silent final e in English orthography).</br>In northern Europe and Scandinavia, the term café au lait has traditionally been used for the combination of espresso and milk. In France, café latte is from the original name of the drink (caffè latte); a combination of espresso and steamed milk equivalent to a \"latte\" is in French called grand crème and in German Milchkaffee or (in Austria) Wiener Melange."
            };
        default:
            break;
    }
}