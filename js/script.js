console.log("Hello world!")

let button = document.querySelector(".section__button");
let table = document.querySelector(".table");
let button2 = document.querySelector(".js-scrollUp");
let changeBackground = document.querySelector(".js-changeBackground");
let body = document.body;
let changeColor = document.querySelector(".js-changeColor");


button.addEventListener("click", function handleClick() {
    button.textContent = "taka mała zmiana :) ";
});

button.addEventListener("click", () => {
    table.remove();
});

button2.addEventListener("click", () => {
    scroll(0, 0);
});


changeBackground.addEventListener("click", () => {
    body.classList.toggle("body--white");
    changeColor.innerText = body.classList.contains("body--white") ? "szare" : "białe"
});