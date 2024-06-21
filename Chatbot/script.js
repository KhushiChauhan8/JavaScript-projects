const gameBoard = document.getElementById('gameBoard');
const restartButton = document.getElementById('restartButton');

const cards = [
    '🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍍', '🥝',
    '🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🍍', '🥝'
];

let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;
let matches = 0;

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function createBoard() {
    shuffle(cards);
    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <div class="front">${card}</div>
            <div class="back"></div>
        `;
        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    });
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.innerHTML === secondCard.innerHTML;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    matches += 1;
    if (matches === cards.length / 2) {
        setTimeout(() => {
            alert('You won!');
        }, 500);
    }

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function restartGame() {
    gameBoard.innerHTML = '';
    matches = 0;
    createBoard();
}

restartButton.addEventListener('click', restartGame);

createBoard();
