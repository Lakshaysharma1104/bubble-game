makeBubble();
runTimer();
getNewHit();

var timer = 30;
var score = 0;
var hitrn ;

function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

function runTimer() {
  let time = document.querySelector("#timerval");
  var timerInterval = setInterval(() => {
    if (timer > 0) {
      timer--;
      time.textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pbottom").innerHTML = `<h1 id='over'>Game Over</h1><br>
      <h1>score:${JSON.parse(localStorage.getItem("score"))||0}</h1>
      <button id=reset>Play Again</button>`;
      document.querySelector("#reset").addEventListener("click",()=>
        location.reload()
      )
    }
  }, 1000);
}

function makeBubble() {
  var clutter = "";
  for (var i = 0; i < 153; i++) {
    clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`;
  }
  document.querySelector("#pbottom").innerHTML = clutter;
}

// Add event listener to bubbles
document.querySelector("#pbottom").addEventListener("click", (dets) => {
  var clickedNo = Number(dets.target.textContent);
  if (clickedNo === hitrn) {
    increaseScore(); // Increase the score
    // dets.target.remove(); // Remove the clicked bubble
    localStorage.setItem("score",JSON.stringify(score));
    makeBubble(); //
    getNewHit(); // Generate a new hit number
  }
});

