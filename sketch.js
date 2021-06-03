//let x = 100
//let speed
//let tamaño = 20
var ball = {
  x: 300,
  y: 200,
  xSpeed: 4,
  ySpeed: -3
};

function setup() {
  createCanvas(windowWidth, windowWidth);
  //speed = 3;
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(4);

  noFill();
  ellipse(ball.x,ball.y,24,24);

  if (ball.x > width || ball.x < 0) {
    ball.xSpeed = ball.xSpeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.ySpeed = ball.ySpeed * -1;
  }

  ball.x = ball.x + ball.xSpeed;
  ball.y = ball.y + ball.ySpeed;

  //for (var x = 0; x < mouseX; x += 50) {
  //  for (var y = 0; y < height; y += 50) {
  //    fill(random(255), 0, random(255))
  //    ellipse(x,y,25,25);
  //    
  //  }
  //
  //}

  //rebote
  //if (x > width || x < 0) {
  //  speed = speed * -1;
  //}
  //x = x + speed;

}
