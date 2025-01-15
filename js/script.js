var fans = document.querySelector(".fans");
var fish = document.querySelector(".fish");
var pets = document.querySelector(".pets");

fans.addEventListener("mouseover", function () {
    fans.innerText = "123K";
});

fish.addEventListener("mouseover", function () {
    fish.innerText = "47K";
});

pets.addEventListener("mouseover", function () {
    pets.innerText = "20K";
});

var toggle = document.querySelector("#toggle");
var ball = document.querySelector(".ball");
var heading = document.querySelector("h1");
var theme = document.querySelector("body");

toggle.addEventListener("click", function () {
    if (theme.classList.contains("light")) {
        theme.classList.remove("light");
        ball.classList.remove("move-right");
        heading.innerText = "Stealth Quincy";
} else {theme.classList.add("light");
        ball.classList.add("move-right");
        heading.innerText = "Party Quincy";
}
    });