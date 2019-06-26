
let card = document.getElementsByClassName("flip-card ");
let innerCard = document.querySelectorAll(".flip-card-inner");
let allCards = document.getElementById("firstdeck");
let cardArray = [];
let innerArray = [];


for (let i = 0; i < card.length; i++) {
    card[i].addEventListener("click", () => {
        innerCard[i].style.cssText = "transform:rotateY(180deg);";
    });
    cardArray.push();
}
