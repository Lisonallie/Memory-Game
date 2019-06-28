
const cards = document.querySelectorAll(".inner-card");
let hasFlippedCard = false;

let firstCard, secondCard;


function flipCard() {
    this.classList.add('is-flipped');
    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
    } else {
        // second click
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch();
        //do the cards match??
    }
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
    }, 1300);
}
cards.forEach(card => card.addEventListener('click', flipCard));
