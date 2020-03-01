var canvas = document.getElementById("canvas");
var btn = document.getElementById("btn");
var ctx = canvas.getContext("2d");
var mouseX, mouseY;
var state = false;
var color = 0;

canvas.width = window.innerWidth - 2;
canvas.height = window.innerHeight - 2;

ctx.lineWidth = 50;
ctx.lineCap = "round";

// マウスをダウン（クリック）したときstateはtrue
canvas.addEventListener("mousedown", e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  state = true;
});

// マウスを離したしたときstateはfalse
canvas.addEventListener("mouseup", e => {
  state = false;
});

// マウスがfalseの時のみ、以下の内容を実行（if文）
// １つずつカラーをカウントアップさせる
// 線の色を指定（hsl：色相、彩度、輝度の３要素で表現する）
// biginPathで線を書き始め、どの位置から書き始めるかmoveTo(座標)で指定する
// lineToでx座標からy座標まで線を描くと指定
// strokeで線を引っ張る
// mouseX,mouseYの座標を更新し続ける

canvas.addEventListener("mousemove", e => {
  console.log(e.clientX);
  if (!state) return;

  var w = Math.floor(Math.random() * 51);

  ctx.lineWidth = w;
  color++;
  ctx.strokeStyle = "hsl(" + color + ", 100%, 50%)";
  ctx.beginPath();
  ctx.moveTo(mouseX, mouseY);
  ctx.lineTo(e.clientX, e.clientY);
  ctx.stroke();

  mouseX = e.clientX;
  mouseY = e.clientY;
});

// クリアボタン
btn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});
