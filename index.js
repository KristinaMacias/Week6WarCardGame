class Card {
    constructor(suite, rank, value) {
        this.suite = suite;
        this.rank = rank;
        this.value = value;
    }
}

class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck(){
        let suites = ['♣︎ Clubs ♣︎','♦︎ Diamonds ♦︎','♥︎ Hearts ♥︎','♠︎ Spades ♠︎'];
        let ranks = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        for(let sIndex = 0; sIndex < suites.length; sIndex++) {
            for(let rIndex = 0; rIndex < ranks.length; rIndex++) {
                this.cards.push(new Card(suites[sIndex], ranks[rIndex], values[rIndex]));
                
            }
        }
    }

    shuffleDeck() { //Fischer Yates
        const deckShuffle = this.cards;
        let i = deckShuffle.length, rand, temp;
        while(--i > 0) {
            rand = Math.floor(Math.random() * (i +1)); // this will generate a random whole number between 1 and 51;
            temp = deckShuffle[rand]; 
            deckShuffle[rand] = deckShuffle[i];
            deckShuffle[i] = temp;
        } 

    }

    dealDeck() {
        for(let i = 0; i < 52; i+=2) {
            let dealtCard1 = this.cards.pop();
            player1.playerCards.push(dealtCard1);
            let dealtCard2 = this.cards.pop();
            player2.playerCards.push(dealtCard2);
        }
    }
}

class Player {
    constructor(playerName, playerCards, playerPoints) {
        this.playerName = playerName;
        this.playerCards = [];
        this.playerPoints = 0;
    }
}

const player1 = new Player('Kristina');
const player2 = new Player('Computer Opponent');


class Game {
    constructor() {
        this.warPlayers = [];
    }

    startGame(){
        this.warPlayers.push(player1);//adds player to game
        this.warPlayers.push(player2);//adds player to game
        d.createDeck();
        d.shuffleDeck();
        console.log(d.cards);
        d.dealDeck();
        this.gameRounds();
        this.gameScoring();
    }

    gameRounds(){
        for (let round = 0; round < 26; round++) { //allows 26 rounds
			let playedCard1 = player1.playerCards.pop(); //deals one card to each player
			let playedCard2 = player2.playerCards.pop(); //deals one card to each player
			console.log(`
                WAR ROUND ${round + 1}: 

                ${player1.playerName} has a ${playedCard1.rank} of ${playedCard1.suite}.
                ${player2.playerName} has a ${playedCard2.rank} of ${playedCard2.suite}.`
                );

			if (playedCard1.value > playedCard2.value) {
				player1.playerPoints += 1;
				player2.playerPoints == 0;
				console.log(`${player1.playerName} is the winner of round ${round + 1}.`);

			} else if (playedCard1.value < playedCard2.value) {
				player1.playerPoints == 0;
				player2.playerPoints += 1;
				console.log(`${player2.playerName} is the winner of round ${round + 1}.`);

			} else if (playedCard1.value == playedCard2.value) {
				player1.playerPoints == 0;
				player2.playerPoints == 0;
				console.log(`
                Round ${round + 1} is a tie.`);
			}
		}
    }

    gameScoring(){
        let showFinalScore1 = player1.playerPoints;
		let showFinalScore2 = player2.playerPoints;
		console.log(`
            The final score: 
            ${player1.playerName} final score is ${showFinalScore1}.
            ${player2.playerName} final score is ${showFinalScore2}.
            `);

		if (player1.playerPoints > player2.playerPoints) {
			console.log(`
            ${player1.playerName} is the winner of War!
            `);

		} else if (player1.playerPoints < player2.playerPoints) {
			console.log(`
            ${player2.playerName} is the winner of War!
            `);

		} else {
			console.log("The War is tied.");
		}
	}
    
}

// create a new deck instance named "d"
const d = new Deck();
// notice since our Deck class' constructor has no arguments, we do  // not need to pass anything into Deck()
//d.createDeck();       // calling our function to fill our array
console.log(d.cards); // logging our cards array [this.cards]

let newGame = new Game();
newGame.startGame();