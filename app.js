let gameseq = [];
let userseq = [];

let btns = ["clr-1", "clr-2", "clr-3", "clr-4"]

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function () {
    if(started == false){
        console.log("game started");
        started = true;

        levelUp();
    } 
});

function gameFlash(btn){
    btn.classList.add("flash");

    setTimeout(function (){
        btn.classList.remove("flash");
    }, 280);
}

function userFlash(btn){
    btn.classList.add("userFlash");

    setTimeout(function (){
        btn.classList.remove("userFlash");
    }, 280);
}

function levelUp(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
 }

 let HighScore = 0;
 let h3 = document.querySelector("h3");

 function checkAns(idx) {
    if(userseq[idx] === gameseq[idx]) {
        if(userseq.length == gameseq.length){
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score is - ${level} <br> Press any key to start again.`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },150);
        if(HighScore < level){
            HighScore = level;
         }
        h3.innerText = `The Highest Score is ${HighScore}`;
        reset();
    }
 }

 function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
 }

 let allBtns = document.querySelectorAll(".btn");
 for(btn of allBtns){
    btn.addEventListener("click", btnPress);
 }

 function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
 }