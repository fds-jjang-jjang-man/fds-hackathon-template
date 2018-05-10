import { ftruncateSync } from "fs";

const numberInputEl = document.getElementsByClassName("number-input");
const numberOutputEl = document.getElementsByClassName("number-output");
const notChangeNum = document.querySelector(".number-input");
const goEl = document.querySelector(".go");
const reEl = document.querySelector(".restart");
const inputNextEl = document.querySelector('.number-input-list');
const outputEl = document.querySelector(".number-output-list");
const cloneEl = document.querySelector(".output-clone");
const outputResultEl = document.querySelector(".output-result");
const endResultEl = document.querySelector(".end-result");
const endScoreEl = document.querySelector(".end-result-score");

// focus가 첫번쨰 input안에 고정
inputNextEl.childNodes[1].focus();

class BaseBallGame {
 // 상태
 newNumber = [
   Math.floor(Math.random() * 10),
   Math.floor(Math.random() * 10),
   Math.floor(Math.random() * 10)
 ];
 // 중복되지 않는 숫자 반환
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

 // 동작
 // ball,strkie,out 판별 및 카운트
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
   return [ball,strike,out];
 }
}

//게임 시작
const gameStart = new BaseBallGame();
console.log(`랜덤 배열 : ${gameStart.randomNum()}`);

//시도 버튼
goEl.addEventListener("click", e => {
  let array = [];

  for (let i = 0; i < numberInputEl.length; i++) {
   numberOutputEl[i].textContent = numberInputEl[i].value;
   numberOutputEl[i].value = numberInputEl[i].value;
   array.push(parseInt(numberOutputEl[i].value));
   numberInputEl[i].value = '';  
  };

  gameStart.checker(array);
  console.log(`입력값 : ${array}`);
  console.log(`결과값 : ${gameStart.checker(array)}`);
  
  if(gameStart.checker(array)[0] != 0 && gameStart.checker(array)[1] != 0){
    outputResultEl.textContent = `ball : ${gameStart.checker(array)[0]} , strike : ${gameStart.checker(array)[1]}`;
  }
  else if(gameStart.checker(array)[0] === 0 && gameStart.checker(array)[1] === 0 && gameStart.checker(array)[2] === 0){
    outputResultEl.textContent = 'OUT';
    }
  else if(gameStart.checker(array)[0] != 0){
    outputResultEl.textContent = `ball : ${gameStart.checker(array)[0]}`;
  }
  else if(gameStart.checker(array)[1] != 0){
    outputResultEl.textContent = `strike : ${gameStart.checker(array)[1]}`;
    if(gameStart.checker(array)[1] === 3){
      endGameLogic();
    }
  }
  endGame();
  outputEl.appendChild(cloneEl.cloneNode(true));
  inputNextEl.childNodes[1].focus();
});

// 다시 시작 버튼
reEl.addEventListener('click',e =>{
  window.location.reload();  
});

inputNextEl.childNodes[1].focus();

inputNextEl.addEventListener('keyup',e => {
  for(let i = 1; i < inputNextEl.childNodes.length; i+=2){
    if(inputNextEl.childNodes[i].value != ""){
       inputNextEl.childNodes[i+2].focus();
     }
  }
});

// 10번 입력 받았을때 종료시키는 함수
function endGame(){
  if(outputEl.childNodes.length === 12){
    endGameLogic();
  }
}

//종료 함수 내부 로직
function endGameLogic(){
  goEl.setAttribute('disabled','true');
  notChangeNum.setAttribute('disabled','true');
  endResultEl.classList.add( 'open-score' );
  endScoreEl.textContent = `${gameStart.randomNum()}`;
}