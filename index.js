var rs = require('readline-sync');

// el in ships is eliminated/ sunk
// val: 0 is empty, 1 is occupied by player, 2 is hit, 3 is miss;
// grid offset is 3 characters

let playing = true;
let size = 10;
const grid = [];
const enGrid = [];
let headStr = `  `;
let cellStr = ``;
let newObj;
let x;
let y;
let blank;
let hit;
let miss;
let ship; 
let myLives = 5;
let enLives = 5; 
let isEN = false;
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
  { id: blank, marks: '|_' },
  { id: ship, marks: '|='},
  { id: hit, marks: '|X' },
  { id: miss, marks: '|O' },
  
];
let enemyLocations = {};
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const propGrid = [];
const enPropGrid = [];
const boardBreak = '-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-';


for (let i = 1; i < letters.length + 1; i++) {
  for (let j = 0; j < letters.length; j++) {
    let newRow = ({ id: letters[i - 1] + nums[j], mark: legend[0].marks });
    propGrid.push(newRow);
    enPropGrid.push(newRow);
  }; 
};



console.log();
//let start = rs.keyIn('Press any key to begin the game');
//game loop for final

  
 
  //set up ships
  
    
   

    


//let attackPrompt = rs.getRawInput('Enter a location to strike. ex(a1)');

//let result = propGrid.filter((obj) => obj.id.includes('b3'));



function createGrid() {
  let str = '  |'
  str += nums.join('|');
  grid.push(str);
  enGrid.push(str);
  str = '';
  for (let i = 0; i < size; i++) {
    const result = propGrid.filter((obj) => obj.id.includes(letters[i]))
    str += letters[i] + ' ';
    for (let j = 0; j < size; j++) {
     str += result[j].mark; 
    }
    grid.push(str);
    enGrid.push(str);
    str = '';
  } 
}
createGrid();


// DON'T TOUCH
function ChangeBoard() {
 let selectId = 'a2';
  propGrid.map((obj) => {
  if (obj.id === selectId) {
    obj.mark = legend[2].marks;
  }
}) 
}

ChangeBoard();
//console.log(boardBreak);
createGrid();

function printGameBoard() {
  console.log(enGrid);
  console.log(boardBreak);
  console.log(grid);
} 
printGameBoard()
//console.log(propGrid)
  ;
console.log('end');


//Placing Ships
// let shipStartXn;
// // /\ \/
// let shipStartY;
// // < >

// while (myShipCount > 0) {
//  let shipStart = rs.question('Where do you want your ship to be placed? ex.(a1) ');
//   const result = propGrid.filter((obj) => { return obj.id === shipStart});
//   result.val = 1;
//   console.log(result)
//   createGrid();
//   //ChangeBoard(result);
//   printGameBoard();
//   myShipCount--;
// };



// function ChangeBoard(result) {
//   x = result.xn;
//   y = result.y;
//   for (let i = 0; i < grid[x].length; i++)
//     grid[x].split('|');
//   if (result.val > 0) {
//     grid[x][i] = legend[result.val].mark; 
//     cellStr += grid[x][i];
//   }; 
// }

// for (let i = 0; i < myShipCount; i++) {
//   for (let j = 0; j < propGrid.length; i++) {
//     // if () {
//     //   console.log('test');
//     //   propGrid[j].val + 1;
//     //   createGrid();
//     //   printGameBoard();
//     // } else
//     //   if (j = propGrid.length){
//     //   console.log('Invalid Entry');
//     //   shipStart;
//     // }
//   }
// }


// function shipPlacementSet() {
  
// }
 
//let placeXY = rs.keyIn('Do you want your ship vertical or horizontal?');     
// function vOrH(placeXY) {
//   for (let i = 0; i < myShipCount; i++) {
//     let shipOrientV = true;
    
//     if (placeXY === 'v' || placeXY === 'V') {
//       console.log(grid);
//     } else
//       if (placeXY === 'h' || placeXY === 'H') {
//         shipOrientV = false;
//         console.log(grid);
//       };
// };
// }
// //vOrH();

// function placeLoop() {
//   while (myShipCount > 0) {
//     let s = 0;
    
//     for (let i = 0; i < letters.length; i++) {
//       if (shipStart.includes(propGrid[i].id)) {
//         propGrid[i].val + 1
//         //placeShips();
//       }
//       myShipCount--;
//      s += 1;
//     }
//     //placeShips()
//   }
// }
//placeLoop()

// function placeShips(shipOrientV, propGrid) {
//   if (shipOrientV === true) {
//     for (let i = 0; i < myShips; i++) {
//       propGrid[i].val + 1;
//       }
//   } else
//     if (shipOrientV === false) {

//   }
  
//   }
  



// function attack(x, y) {

// }



// console.log('end');



// function randNum() {
//   return Math.floor(Math.random() * Math.floor(max));
// };

