
var timer = 60;
var score = 0;
var hitrn = 0;



function increseScore(){
    score +=10;
    document.querySelector("#scoreVal").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitVal").textContent = hitrn;

}

function makeBubble(){
    var clutter = "";

for(i=1; i<=102; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`;

}

document.querySelector(".pbtm").innerHTML = clutter;

}

function runTime(){
    var timerInt = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timerVal").textContent = timer;
        }else{
            clearInterval(timerInt);
            var a = document.querySelector(".pbtm");
            a.innerHTML = `<h1>Game Over<h1>`;
            a.style(color) = "Green";
        }
    }, 1000);

}
document.querySelector(".pbtm")
.addEventListener("click", function(dets){
    var clickednum = Number(dets.target.textContent);
    if(clickednum === hitrn){
        increseScore();
        makeBubble();
        getNewHit();
    }
})

runTime();
makeBubble();
getNewHit();
