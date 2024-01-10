// All the initializations

let secretnumber =  Math.trunc(Math.random()*20) + 1
let inputfield = document.querySelector('.number-input')
let scoretxt = document.querySelector('.score')
let highscoretxt = document.querySelector('.highscore')
let inputnum = document.querySelector('.number-input')
let hintstxt = document.querySelector('.hints')
const body = document.querySelector('body')
const checkbtn = document.querySelector('.submit-number')
const reset = document.querySelector('.again')
let score = 10
let highscore = 0

// Defining the checker function

function checknumber(){

  if(parseInt(inputnum.value) > 20 || inputfield.value === ""){
    window.alert("Invalid Response, Number should be in the range 1 to 20")
  }

  if (secretnumber === parseInt(inputnum.value)){
    hintstxt.innerHTML = "You won!🎉🎉"
    body.style.backgroundColor = "green"
    checkbtn.style.display = "none"
    fireConfetti()

      if(score>highscore){
        highscore = score
        highscoretxt.innerHTML = highscore
      }
  }

  if (secretnumber !== parseInt(inputnum.value)){
    score = score-1
    scoretxt.innerHTML =  score

      if ((secretnumber - parseInt(inputnum.value) < 0 ) ){
        hintstxt.innerHTML = "Too High ⬆️"
      }

      else{
        hintstxt.innerHTML = "Too Low ⬇️"
      }
  }

  if( score<0){
    window.alert('Game Over')
    location.reload()
  }


}

function resetgame(){
  body.style.backgroundColor = "var(--black)"
  checkbtn.style.display = "block"
  score = 10
  scoretxt.innerHTML =  score
  inputnum.value = ""
  hintstxt.innerHTML = "All the best👍"
}


// confetti code

const fireConfetti = function () {
  let count = 200;
  let defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti({
    ...defaults,
    ...opts,
    particleCount: Math.floor(count * particleRatio)
  });
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}