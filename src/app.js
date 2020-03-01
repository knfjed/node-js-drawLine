var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 2;

// biginPathで線を書き始め、どの位置から書き始めるかmoveTo(座標)で指定する
// (0,0)は左上を指す
// lineToでx座標からy座標まで線を描くと指定
// strokeで線を引っ張る
canvas.addEventListener("mousemove", e => {
  console.log(e.clientX);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();
});
