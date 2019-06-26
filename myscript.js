
let card = document.getElementsByClassName("flip-card ");
let innerCard = document.querySelectorAll(".flip-card-inner");
let allCards = document.getElementById("firstdeck");
let cardArray = []; 

card[0].addEventListener("click", ()=>{
    innerCard[0].style.cssText = "transform:rotateY(180deg);";
});

for (let i = 0; i < card.length; i++) {
    cardArray.push(i);
}
