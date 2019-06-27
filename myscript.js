
let innerCard = document.querySelectorAll(".inner-card");
let cardArray = [];

for (let i = 0; i < innerCard.length; i++) {
innerCard[i].addEventListener("click", function() {
    innerCard[i].classList.toggle('is-flipped');
  });
  cardArray.push(innerCard[i]);
}