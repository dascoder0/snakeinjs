canvas = document.getElementById("canv");
ctx = canvas.getContext("2d");
document.addEventListener("keydown",keyPush);
setInterval(game, 1000/30);

function game(){
  draw();
}

function draw(){
  ctx.beginPath();
  ctx.rect(20,40,50,50);
  ctx.fillStyle = "#FF0000";
  ctx.fill();
  ctx.closePath();
}
