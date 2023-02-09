var rs = require('readline-sync');

// el in ships is eliminated/ sunk
// val: 0 is empty, 1 is occupied by player, 2 is occupied by enemy, 3 is hit
let size = 10;
const grid = [];
let headStr = `    `;
let cellStr = ``;
let x;
let y;
let blank;
let hit;
let miss;
let ship;
let myShipCount = 5;
const myShips = [
  { sid: 1, x: grid[x], y: grid[y], l: 2, pl: false, el: false },
  { sid: 2, x: grid[x], y: grid[y], l: 3, pl: false, el: false },
  { sid: 3, x: grid[x], y: grid[y], l: 3, pl: false, el: false },
  { sid: 4, x: grid[x], y: grid[y], l: 4, pl: false, el: false },
  { sid: 5, x: grid[x], y: grid[y], l: 5, pl: false, el: false },
];
let enShipCount = 5;
const enemyShips = [
  { sid: 1, x: grid[x], y: grid[y], l: 2, pl: false, el: false },
  { sid: 1, x: grid[x], y: grid[y], l: 3, pl: false, el: false },
  { sid: 1, x: grid[x], y: grid[y], l: 3, pl: false, el: false },
  { sid: 1, x: grid[x], y: grid[y], l: 4, pl: false, el: false },
  { sid: 1, x: grid[x], y: grid[y], l: 5, pl: false, el: false },
];
const legend = [
  { id: blank, mark: '|_' },
  { id: hit, mark: '|X' },
  { id: miss, mark: '|O' },
  { id: ship, mark: '=='}
];
let enemyLocations = {};
const letters = ['a ', 'b ', 'c ', 'd ', 'e ', 'f ', 'g ', 'h ', 'i ', 'j '];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const propGrid = [];


for (let i = 0; i < letters.length; i++) {
  for (let j = 0; j < letters.length; j++) {
    let newRow = ({x: letters[i], xn: i, y: nums[j], id: letters[i] + nums[j], val: 0});
    propGrid.push(newRow);
  }; 
};
let start = rs.keyIn('Press any key to begin the game');

function createGrid() {
  for (let i = 0; i < size; i++) {
    headStr += '|' + nums[i];
  }
  grid.push(headStr);
  for (let j = 0; j < size; j++) {
    cellStr += letters[j];
    for (let k = 0; k < size; k++) {
      cellStr += `${legend[0].mark}`;
      newObj = [cellStr];
    }
    grid.push(newObj);
    cellStr = ``;
  }
}
createGrid();

//Placing Ships
let shipStartXn;
// /\ \/
let shipStartY;
// < >
for (let i = 0; i < myShipCount; i++) {
  let shipOrientV = true;
  let placeXY = rs.keyIn('Do you want your ship vertical or horizontal?');
    if (placeXY.includes('v') || placeXY.includes('V')) {
      shipOrientV = true;
    } else
      if (placeXY.includes('h') || placeXY.includes('H')) {
        shipOrientV = false;
      };
  
  let shipStart = rs.getRawInput(`Where do you want your ${myShips[i].l} unit long ship to be placed? ex.(a1)`);   
  for (let i = 0; i < letters.length; i++) {
    if (shipStart.includes(propGrid[i].id)) {
      shipStartXn = propGrid[i].xn;
      shipStartY = propGrid[i].y;
      placeShips();
    }
    myShipCount--
  }
function placeShips(shipOrientV, shipStartXn, shipStartY) {
  if (shipOrientV === true) {
    for (let i = 0; i < myShips[myShipCount].l; i++) {
        grid[shipStartXn] = legend[3].mark;
        shipStartXn + 1;
      }
  } else
    if (shipOrientV === false) {
      
  }
  
}

}


function attack(x, y) {

}



console.log(grid);



function randNum() {
  return Math.floor(Math.random() * Math.floor(max));
};

