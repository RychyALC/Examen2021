var ball = {
  x: 300,
  y: 200,
  xSpeed: 4,
  ySpeed: -3
};
class Jugador{
  constructor(x , y , speed){
    this.x = x;
    this.y = y;
    this.speed = speed;
  }
  arriba(){
    this.y += (-this.speed);
  }
  abajo(){
    this.y += this.speed;
  }

  dibujar(){
    //rectMode(CENTER);
    rect(this.x,this.y,35, 100);
  }

}
let jugador1,jugador2; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  jugador1 = new Jugador(0,windowHeight/2,5);
  jugador2 = new Jugador(windowWidth-40,windowHeight/2,5);
}

function draw() {
  background(0);
  mostrar();
  mover();
  rebotar();
  jugador1.dibujar();
  jugador2.dibujar();
}

function keyPressed(){
  if (keyCode == UP_ARROW) {
    jugador1.arriba();
  }
  if (keyCode === DOWN_ARROW) {jugador1.abajo();}
  if (key === 'w') {jugador2.arriba();}
  if (key === 's') {jugador2.abajo();}
}
function mover(){
  ball.x = ball.x + ball.xSpeed;
  ball.y = ball.y + ball.ySpeed;
}

function rebotar(){
  if (ball.x > width || ball.x < 0) {
    ball.xSpeed = ball.xSpeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.ySpeed = ball.ySpeed * -1;
  }
}

function mostrar(){
  stroke(255);
  strokeWeight(4);
  noFill();
  ellipse(ball.x,ball.y,24,24);

}
