
let card = document.getElementsByClassName("flip-card ");
let innerCard = document.querySelectorAll(".flip-card-inner");
let allCards = document.getElementById("firstdeck");
// let cardArray = [];

flip = () => {
    
}

card.forEach(innerCard => innerCard.addEventListener("click", flip));


// for (let i = 0; i < card.length; i++) {
//     card[i].addEventListener("click", () => {
//         innerCard[i].style.cssText = "transform:rotateY(180deg);";
//         clicked = 0;
//     });
//     cardArray.push();
// }

