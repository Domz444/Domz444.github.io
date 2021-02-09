const button = document.querySelector('#flip');
const tradingCard = document.querySelector('.trading-card');
const flipContainer = document.querySelector('.flip-container');

button.onclick = function() {
  tradingCard.classList.toggle('flipped');
}

flipContainer.onclick = function() {
  tradingCard.classList.toggle('flipped');
}