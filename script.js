const box = document.getElementById("box");
const scoreText = document.getElementById("score");
let score = 0;
box.addEventListener("click", function () {
  score++;
  scoreText.innerText = score;
  let x = Math.random() * (window.innerWidth - 70);
  let y = Math.random() * (window.innerHeight - 70);
  box.style.left = x + "px";
  box.style.top = y + "px";
});
