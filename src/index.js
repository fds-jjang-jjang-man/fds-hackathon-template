const number1El = document.querySelector('.number1')
const number2El = document.querySelector(".number2")
const number3El = document.querySelector(".number3")
const numbersEl = document.querySelector('.numbers')
const goEl = document.querySelector('.go')
const restartEl = document.querySelector('.restart')
const answerEl = document.querySelector('.answer')

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
  // - 체크
  // checker(){
  //   const number = [1,2,3];
  //   if(this.)

  // }
}





const game = new BaseBallGame();
answerEl.textContent = game.randomNum();
