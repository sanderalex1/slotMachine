/*
- Slot machine
- 3 slots, 3 rows
- Classic symbols:
 * Cherries - 39
 * Bananas - 33
 * Grapes - 21
 * Watermelon - 15
 * Bells - 9
 * Lucky-7s  - 7 
 * Star - 3
 


spin() -> the symbols that it lands on
something like: `["C", "C", "C"]`
isWinner() : boolean
payout() : number
increaseBet() : number -> returns current bet after incrementing, wrap after 10 back to 1.
symbolValue(arr) : bet * 10


Vars:
bankroll = 1000;
profitLoss -> for each round, do `profitLoss += payout();` once after a spin is completed.
    
Payout table:
    cherries - 1: 1x
    cherries - 2: 1.5x
    cherries - 3: 2.5x
    bananas - 2x
    grapes - 5x
    watermelons - 10x
    bells - 50x
    lucky7s - 700x
    stars: 10000x
*/

const bankroll = 1000;

const symbolsAmounts = {
  cherries: 39,
  bananas: 33,
  grapes: 21,
  watermelons: 15,
  bells: 9,
  lucky7s: 7,
  stars: 3,
};

const reel = [
  ..."C".repeat(symbolsAmounts.cherries / 3),
  ..."b".repeat(symbolsAmounts.bananas / 3),
  ..."G".repeat(symbolsAmounts.grapes / 3),
  ..."W".repeat(symbolsAmounts.watermelons / 3),
  ..."B".repeat(symbolsAmounts.bells / 3),
  ..."L".repeat(symbolsAmounts.lucky7s / 3),
  ..."S".repeat(symbolsAmounts.stars / 3),
];

const allReels = [
  [...reel].sort(() => Math.random() - 0.5),
  [...reel].sort(() => Math.random() - 0.5),
  [...reel].sort(() => Math.random() - 0.5),
];

const spin = () => {
  const results = [];

  for (let i = 0; i < 3; i++) {
    let randomSymbol = Math.floor(Math.random() * allReels[i].length);

    results.push(allReels[i][randomSymbol]);
  }

  return results;
};
