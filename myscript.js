
const cards = document.querySelectorAll(".inner-card");
let hasFlippedCard = false;

let firstCard = secondCard;


function flipCard() {
    this.classList.add('is-flipped');
    if(hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
    }
    else {
        //second click
        hasFlippedCard = false;
        secondCard = this;
    }
  }
  
  cards.forEach(card => card.addEventListener('click', flipCard));









// let cardArray = [];
// let cardImg = document.querySelectorAll(".flip-card-back > img");

// for (let i = 0; i < innerCard.length; i++) {
//     innerCard[i].addEventListener("click", function flip() {
//         innerCard[i].classList.toggle('is-flipped');
//     });
//     cardArray.push(innerCard[i]);
// }



// My code that never worked out
// let firstCardClicked;
// let secondCardClicked;
// let firstFlip = true;
    // function reset() {
    //     firstCardClicked.classList.remove('is-flipped');
    //     secondCardClicked.classList.remove('is-flipped');
    //     firstCardClicked.addEventListener("click", flip);
    //     secondCardClicked.addEventListener("click", flip);
    //     firstCardClicked = null;
    //     secondCardClicked = null;
    // }
    //     if (firstFlip) {
    //         firstCardClicked = innerCard[i];
    //         firstCardClicked.removeEventListener("click", flip);
    //         firstFlip = false;
    //     }
    //     else {
    //         secondCardClicked = innerCard[i];
    //         secondCardClicked.removeEventListener("click", flip);
    //         reset();
    //     }
    // });
    // let flip = flip();

// function compare() {
//     if (firstCardClicked === secondCardClicked) {
//         firstCardClicked.removeEventListener("click", flip);
//         if (secondCardClicked === firstFlip) {

//         }
//     }
//     else {
//         reset();
//     }
// }

