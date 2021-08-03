var expect = chai.expect;

describe('create standard deck', function(){
    describe('#createDeck', function(){
        const playingcards = new Deck();
        expect(playingcards).to.equal.length(52);
    })
})