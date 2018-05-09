class BaseBallGame {
  // 상태
  newNumber = [Math.floor(Math.random()*10),
               Math.floor(Math.random()*10),
               Math.floor(Math.random()*10)
              ];
  
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
  // - 체크
  
  
}


const t = new BaseBallGame();
console.log(t.randomNum());
