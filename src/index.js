const number1El = document.querySelector('.number1');
const number2El = document.querySelector('.number2');
const number3El = document.querySelector('.number3');
const goEl = document.querySelector('.go');
const restartEl = document.querySelector('.restart');
const answerEl = document.querySelector('.answer');

class BaseBallGame {
  // 상태
  newNumber = [Math.floor(Math.random()*10),
               Math.floor(Math.random()*10),
               Math.floor(Math.random()*10)
              ];
  strike = 0;
	ball = 0;
	out = 0;
  
  // 중복되지 않는 숫자 반환 
  randomNum(){
	while(1){
	  if(this.newNumber[0] != this.newNumber[1] &&
	     this.newNumber[0] != this.newNumber[2] &&
	     this.newNumber[1] != this.newNumber[2]
	  ){
	    return this.newNumber;
	  }
	  else{
	    this.newNumber = [Math.floor(Math.random()*10),
	                      Math.floor(Math.random()*10),
	                      Math.floor(Math.random()*10)
	                     ];
	    }
	  }
	}
	
	// 동작
	// ball,strkie,out 판별 및 카운트
  checker(inputNum){
    for(let i = 0; i < this.newNumber.length;i++){
      if(this.newNumber[i] === inputNum[i]){
        this.strike++;
      }
      else if(this.newNumber[i] != inputNum[i] && this.newNumber.includes(inputNum[i])){
        this.ball++;
      }
      else this.out;
    }
    return [this.ball,this.strike,this.out];
  }
}
