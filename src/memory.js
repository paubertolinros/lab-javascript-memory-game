class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  };

  shuffleCards() {
    if (this.cards === undefined) return undefined;
    /*for(let i = 0; i < this.cards.length; i++) {
    let randIndex = Math.floor(Math.random() * (i + 1));
      [this.cards[randIndex], this.cards[i]] = [this.cards[i], this.cards[randIndex]];
    };
    return this.cards;*/
    this.cards.sort(() => { return Math.random() - 0.5 });
  };

  checkIfPair(card1, card2) {
    this.pairsClicked = this.pairsClicked + 1;
    if (card1 === card2) {
      this.pairsGuessed = this.pairsGuessed + 1;
      return true;
    } else {
      return false;
    };
  };

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      console.log("You won!")
      return true;
    } else {
      return false;
    };
  };
};
