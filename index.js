var rs = require('readline-sync');
const opPlace = [];
const opSunk = [];
const letters = set('abcdefghij');
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [] = letters;
const guess = [];
const start = rs.keyIn('Press any key to begin', '$<a-z>');
const aim = rs.question('Enter a location to strike: ');
const spotOpt = 'a-j 0-9';
const aimToHit = opPlace.includes(aim);
const marks = [
  { id: 'bla', char: '_', pres: true },
  { id: 'hit', char: 'X', pres: false },
  { id: 'mis', char: 'O', pres: false },
  { id: 'shi', char: '/', pres: false }
]
let gridSize = buildGrid(10);
let size = 10;



function xOrY(max2, shipLength) {
  max2 = 1;
  let result = rand(max2);
  for (let i = 0; i < ships.length; i++) {
    if (result == 0) {
      ships.l2 = (grid[y + shipLength]);
    } else {
      ships.l2 = (grid[x + shipLength]);
    }
  } 
}

function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const opPlaced = {};
function buildGrid(size) {
  let grid = [];
  for (let i = 0; i < size; i++) {
    grid[i] = [];
    for (let j = 0; j < size; j++) {
      grid[i][j] = marks[0].char;
    }
  }
  return grid;
}
let op = false;

// const ships = [
//   { id: 'Two-U', w: (grid[x]), l2: (grid[y]), l: 2, q: 1 },
//   { id: 'Thr-U', w: (grid[x]), l2: (grid[y]), l: 3, q: 2 },
//   { id: 'Fou-U', w: (grid[x]), l2: (grid[y]), l: 4, q: 1 },
//   { id: 'Fiv-U', w: (grid[x]), l2: (grid[y]), l: 5, q: 1 }
// ];
//const shipLength = ships.l;
function print(grid, op) {
  const cords = buildGrid(grid.length);
  console.log(cords);
  for (let i = 0; i < grid.length; i++) {
    let row = i + ' ';
    for (let space of grid[i]) {
      if (op && space == 'O') {
        row += ' ';
      } else {
        row += space + ' ';
      }
    }
    console.log(row);
  }
}
console.table(gridSize);

// function placeShipRand() {
//   let placed = false;
//   while (!placed) {
//     let x = rand(max);
//     let y = rand(max);
//     if (!locations[`${x}-${y}`]) {
//       placeCharacter(x, y, c, grid);
//       placed = true;
//       locations[`${x}-${y}`] = true;
//     }
//   }
// }

function aimFunct(x, y, grid) {
  if (grid[x][y] == marks[0].char) {
    grid[x][y] == marks[1].char;
    return true;
  } else if (grid[x][y] == marks[3].char) {
    grid[x][y] == marks[2];
  }
}
  
function startGame() {
  console.log(start);
  
  
};
startGame();

//console.log(ships);
