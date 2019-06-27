
let innerCard = document.querySelectorAll(".inner-card");
let cardArray = [];
let cardImg = document.querySelectorAll(".flip-card-back > img");
let firstCardClicked;
let secondCardClicked;
let firstFlip = true;

for (let i = 0; i < innerCard.length; i++) {
    innerCard[i].addEventListener("click", function flip() {
        innerCard[i].classList.toggle('is-flipped');
        if (firstFlip) {
            firstCardClicked = innerCard[i];
            firstFlip = false;
        }
        else {
            secondCardClicked = innerCard[i];
            compare();
        }
    });
    cardArray.push(innerCard[i]);
}

function compare() {
    if (firstCardClicked === secondCardClicked) {
        firstCardClicked.removeEventListener("click", flip);
        if (secondCardClicked === firstFlip) {

        }
    }
    else {
        reset();
    }
    function reset() {
        firstCardClicked.classList.remove('is-flipped');
        secondCardClicked.classList.remove('is-flipped');
    }
}