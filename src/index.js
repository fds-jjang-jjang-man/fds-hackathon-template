import { ftruncateSync } from "fs";

const numberInputEl = document.getElementsByClassName("number-input");
const numberOutputEl = document.getElementsByClassName("number-output");
const notChangeNum = document.querySelector(".number-input");
const goEl = document.querySelector(".go");
const reEl = document.querySelector(".restart");
const inputNextEl = document.querySelector(".number-input-list");
const outputEl = document.querySelector(".number-output-list");
const cloneEl = document.querySelector(".output-clone");
const outputResultEl = document.querySelector(".output-result");
const endResultEl = document.querySelector(".end-result");
const endScoreEl = document.querySelector(".end-result-score");
const numEl = document.querySelector('.num')
// focus가 첫번쨰 input안에 고정
inputNextEl.childNodes[1].focus();

class BaseBallGame {
  // 0~9 까지의 숫자를 Math.random 함수를 사용해 나온 램덤한 숫자를
  // newNumber 배열에 저장

  newNumber = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  ];
<<<<<<< HEAD
  // 혹시나 위에 중복된 숫자가 나올수 도 있으니 while 함수로 중복된 숫자가
  // 안나올떄 까지 생성함
=======
  // 중복되지 않는 숫자 반환
>>>>>>> 44408ebb81da17b78c9cd5a5d96f7d73be2572ae
  randomNum() {
    while (1) {
      if (
        this.newNumber[0] != this.newNumber[1] &&
        this.newNumber[0] != this.newNumber[2] &&
        this.newNumber[1] != this.newNumber[2]
      ) {
        return this.newNumber;
      } else {
        this.newNumber = [
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10),
          Math.floor(Math.random() * 10)
        ];
      }
    }
  }

  // ball,strkie,out 판별 및 카운트 하는 함수
  // for루프를 사용해 랜덤숫자(newNumber) 의 값을 스캔후
  // input 칸에 입력된 값과 newNumber의 값을 비교하여
  // 만약 [i] 값이 모두 같다면 strike  [i] 값이 다르거나
  // [i]값이 배열 상관없이 포함 되여 있으면 ball 
  // 위의 값이 한개라도 충족을 못하면 out 값을 각각의 의 변수로 저장 함

  checker(inputNum) {
    let strike = 0;
    let ball = 0;
    let out = 0;

    for (let i = 0; i < this.newNumber.length; i++) {
      if (this.newNumber[i] === inputNum[i]) {
        strike++;
      } else if (
        this.newNumber[i] != inputNum[i] &&
        this.newNumber.includes(inputNum[i])
      ) {
        ball++;
      } else out;
    }
    return [ball, strike, out];
  }
}

<<<<<<< HEAD
//위에 만들어 놓은 class을 사용하기 좋게 변수 gameStart에 저장

const gameStart = new BaseBallGame();
console.log(`랜덤 배열 : ${gameStart.randomNum()}`);

// try 누를떄 숫자 1 증가하는  마다 ↓ 변수에 저장 

                             let count = 0;


// 클릭 할떄마다 이벤트를 걸어주는 함수 

goEl.addEventListener("click", e => {

  let array = [];
=======
//게임 시작
const gameStart = new BaseBallGame();
console.log(`랜덤 배열 : ${gameStart.randomNum()}`);

let count = 0;
//시도 버튼
goEl.addEventListener("click", e => {
  let array = [];
  
  //회차 로직
>>>>>>> 44408ebb81da17b78c9cd5a5d96f7d73be2572ae
  function numCount(){
    count++;
    console.log(count);
    return count;
  }
  numEl.textContent = `${numCount()}회`;

<<<<<<< HEAD
  

=======
>>>>>>> 44408ebb81da17b78c9cd5a5d96f7d73be2572ae
  for (let i = 0; i < numberInputEl.length; i++) {
    numberOutputEl[i].textContent = numberInputEl[i].value;
    numberOutputEl[i].value = numberInputEl[i].value;
    array.push(parseInt(numberOutputEl[i].value));
    numberInputEl[i].value = "";
  }

  gameStart.checker(array);
  console.log(`입력값 : ${array}`);
  console.log(`결과값 : ${gameStart.checker(array)}`);

  if (gameStart.checker(array)[0] != 0 && gameStart.checker(array)[1] != 0) {
    outputResultEl.textContent = `ball : ${
      gameStart.checker(array)[0]
    } , strike : ${gameStart.checker(array)[1]}`;
  } else if (
    gameStart.checker(array)[0] === 0 &&
    gameStart.checker(array)[1] === 0 &&
    gameStart.checker(array)[2] === 0
  ) {
    outputResultEl.textContent = "OUT";
  } else if (gameStart.checker(array)[0] != 0) {
    outputResultEl.textContent = `ball : ${gameStart.checker(array)[0]}`;
  } else if (gameStart.checker(array)[1] != 0) {
    outputResultEl.textContent = `strike : ${gameStart.checker(array)[1]}`;
    if (gameStart.checker(array)[1] === 3) {
<<<<<<< HEAD
      endGameLogic();
=======
      endWinGameLogic();
>>>>>>> 44408ebb81da17b78c9cd5a5d96f7d73be2572ae
    }
  }
  endGame();
  outputEl.appendChild(cloneEl.cloneNode(true));
  inputNextEl.childNodes[1].focus();
});

// 다시 시작 버튼
reEl.addEventListener("click", e => {
  window.location.reload();
<<<<<<< HEAD
});

inputNextEl.childNodes[1].focus();

inputNextEl.addEventListener("keyup", e => {
  for (let i = 1; i < inputNextEl.childNodes.length; i += 2) {
    if (inputNextEl.childNodes[i].value != "") {
      inputNextEl.childNodes[i + 2].focus();
    }
  }
});

// 10번 입력 받았을때 종료시키는 함수
function endGame() {
  if (outputEl.childNodes.length === 11) {
    endGameLogic();
  }
function endGameLogic() {
  goEl.setAttribute("disabled", "true");
  notChangeNum.setAttribute("disabled", "true");
  endResultEl.classList.add("open-score");
  endScoreEl.textContent = `YOU LOSE THE ANSWER IS ${gameStart.randomNum()}`;
}

}

//종료 함수 내부 로직
function endGameLogic() {
  goEl.setAttribute("disabled", "true");
  notChangeNum.setAttribute("disabled", "true");
  endResultEl.classList.add("open-score");
  endScoreEl.textContent = `WINNER WINNER CHICKEN DINNER THE ANSWER IS ${gameStart.randomNum()}`;
  
}
=======
});

inputNextEl.childNodes[1].focus();

inputNextEl.addEventListener("keyup", e => {
  for (let i = 1; i < inputNextEl.childNodes.length; i += 2) {
    if (inputNextEl.childNodes[i].value != "") {
      inputNextEl.childNodes[i + 2].focus();
    }
  }
});

// 10번 입력 받았을때 종료시키는 함수
function endGame() {
  if (outputEl.childNodes.length === 12) {
    endLoseGameLogic();
  }
}

//이겼을때 종료 함수 내부 로직
function endWinGameLogic() {
  goEl.setAttribute("disabled", "true");
  notChangeNum.setAttribute("disabled", "true");
  endResultEl.classList.add("open-score");
  endScoreEl.textContent = `WINNER WINNER CHICKEN DINNER !!!!! THE ANSWER IS : ${gameStart.randomNum()}`;
}

//졌을때 종료 함수 내부 로직
function endLoseGameLogic() {
  goEl.setAttribute("disabled", "true");
  notChangeNum.setAttribute("disabled", "true");
  endResultEl.classList.add("open-score");
  endScoreEl.textContent = `YOU LOSE!!!!!  THE ANSWER IS : ${gameStart.randomNum()}`;
}
>>>>>>> 44408ebb81da17b78c9cd5a5d96f7d73be2572ae
