let score = 0;
const box =
    document.getElementById("box");
const scoreText =
    document.getElementById("score");
box.addEventListener("click",function ()
                     score++;
scoreText.innerText = score;
let x = Math.random()*
    (window.innerwidth - 70);
let y = Math.random()*
    (window.innerheight - 70);

box.style.left = x + "px";
box.style.top = y + 'px";})
    
