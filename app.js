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
*/
const symbolsAmounts = {
    cherries: 39,
    bananas: 33,
    grapes: 21,
    watermelons: 15,
    bells: 9,
    lucky7s : 7,
    stars: 3,
}

const reel = [
    "C".repeat(symbolsAmounts.cherries/3),
    "b".repeat(symbolsAmounts.bananas/3),
    "G".repeat(symbolsAmounts.grapes/3),
    "W".repeat(symbolsAmounts.watermelons/3),
    "B".repeat(symbolsAmounts.bells/3),
    "L".repeat(symbolsAmounts.lucky7s/3),
    "S".repeat(symbolsAmounts.stars/3),
];

const allReels = [
    reel.sort(()=>Math.floor(Math.random()<0.5)),
    reel.sort(()=>Math.floor(Math.random()<0.5)),
    reel.sort(()=>Math.floor(Math.random()<0.5))
];


randomized[0] === randomized[1] then if randomized[0] === "C" or randomized[0] === "C" && randomized[1] === "C"
