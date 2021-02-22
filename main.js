const button = document.querySelector('#flip');
const tradingCarda = document.querySelector('.trading-carda');
const tradingCardb = document.querySelector('.trading-cardb');
const tradingCardc = document.querySelector('.trading-cardc');
const flipContainer = document.querySelector('.flip-container');

function displayGame(){
  var elSuccess = document.getElementById('cardOverlay');
  elSuccess.style.display = 'none';
}
button.onclick = function() {
  tradingCarda.classList.toggle('flipped');
  tradingCardb.classList.toggle('flipped');
  tradingCardc.classList.toggle('flipped');
}

flipContainer.onclick = function() {
  tradingCarda.classList.toggle('flipped');
  tradingCardb.classList.toggle('flipped');
  tradingCardc.classList.toggle('flipped');
}