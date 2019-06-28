
const cards = document.querySelectorAll(".inner-card");
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    this.classList.add('is-flipped');
    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
        return; //stop execution of function
    }
    // second click
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
    reset();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        //so the cards don't turn back around too fast
        firstCard.classList.remove('is-flipped');
        secondCard.classList.remove('is-flipped');

        reset();
    }, 1300);
}

function reset() {
    //ES6 way of giving 2 variables new values
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}


//putting the whole function in parentheses transforms it into an immediately invoked function
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})(); //execute

cards.forEach(card => card.addEventListener('click', flipCard));
