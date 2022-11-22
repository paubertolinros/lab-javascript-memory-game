const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];
const memoryGame = new MemoryGame(cards);
window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });
  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;
  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      card.classList.toggle("turned");
      memoryGame.pickedCards.push(card);
      if (memoryGame.pickedCards.length === 2) {
        if (!memoryGame.checkIfPair(memoryGame.pickedCards[0].getAttribute("data-card-name"),memoryGame.pickedCards[1].getAttribute("data-card-name") )) {
          setTimeout(() => { 
            memoryGame.pickedCards[0].classList.toggle("turned");
            memoryGame.pickedCards[1].classList.toggle("turned");
             },400);
        }; 
        setTimeout(() => {
        memoryGame.pickedCards = [];
        },400)
      };
      let pairsClicked = memoryGame.pairsClicked;
      document.getElementById("pairs-clicked").innerHTML = pairsClicked;
      //let pairsGuessed = memoryGame.pairsGuessed;
      document.getElementById("pairs-guessed").innerHTML = memoryGame.pairsGuessed;
   
      if (memoryGame.checkIfFinished()) {
        document.getElementsByTagName("h2")[0].innerHTML = "You won!";
        console.log(card.getAttribute("data-card-name"));
    }; 
    });
  });
});
