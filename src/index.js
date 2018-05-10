const numberInputEl = document.getElementsByClassName("number-input");
const numberOutputEl = document.getElementsByClassName("number-output");
const goEl = document.querySelector(".go");
const outputEl = document.querySelector(".number-output-list");
const cloneEl = document.querySelector(".output-clone");
const restartEl = document.querySelector('.restart') 


class BaseBallGame {
  // 상태
  newNumber = [
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10),
    Math.floor(Math.random() * 10)
  ];
  strike = 0;
  ball = 0;
  out = 0;

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
    for (let i = 0; i < this.newNumber.length; i++) {
      if (this.newNumber[i] === inputNum[i]) {
        this.strike++;
      } else if (
        this.newNumber[i] != inputNum[i] &&
        this.newNumber.includes(inputNum[i])
      ) {
        this.ball++;
      } else this.out;
    }
    return [this.ball, this.strike, this.out];
  }
}







goEl.addEventListener("click", e => {
  for (let i = 0; i < numberInputEl.length; i++) {
    numberOutputEl[i].textContent = numberInputEl[i].value;
    numberInputEl[i].value = "" ;
  }

   outputEl.appendChild(cloneEl.cloneNode(true)); 
});


const game = new BaseBallGame();

