// variables
const boxes = document.querySelectorAll('.box');
let turn = 'X';
const turnInfo = document.querySelector('.turn');
const boxFunction = () => {
    turn = changeTurn();
    box.innerHTML = turn;
    turnInfo.innerText = turn;
  };
const winnerGIF = document.querySelector('.winnerGIF');
let wins = [
[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[2, 4, 6],
[0, 4, 8]
];

function changeTurn(){
  return turn === "X"? "0":"X";
}

function checkWin() {
  const wontext = document.querySelector('.wontext');
  const turnText = document.querySelector('.turnText');
  for (let pattern of wins) {
    let pos1 = boxes[pattern[0]].innerHTML;
    let pos2 = boxes[pattern[1]].innerHTML;
    let pos3 = boxes[pattern[2]].innerHTML;
    
    if(pos1 != "" && pos2 != "" && pos3 != ""){
      if(pos1 === pos2 && pos2 === pos3){
        wontext.innerText = `${pos1} Won`;
        turnText.style.display = 'none';
        winnerGIF.style.display = "inline-block";
      }
    }
  }
}

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    box.innerHTML = turn;
    turn = changeTurn();
    turnInfo.innerText = turn;
    checkWin();
})
  removeEventListener('click', boxFunction);
});

