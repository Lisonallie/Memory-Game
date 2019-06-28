
const cards = document.querySelectorAll(".inner-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    this.classList.add('is-flipped');
    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
        return; //stop execution of function
    }
        // second click
        hasFlippedCard = false;
        secondCard = this;
        checkForMatch();
        //do the cards match??
}

function checkForMatch() {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
    //condition ? (if)true do() : (if)false do();
}

function disableCards() {
    //not let the same card be clicked more than once
    firstCard.removeEventListener("click", flipCard);
    secondCard.removeEventListener("click", flipCard);
}

function unflipCards() {
    setTimeout(() => {
        //so the cards don't turn back around too fast
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');
    }, 1300);
}
cards.forEach(card => card.addEventListener('click', flipCard));
