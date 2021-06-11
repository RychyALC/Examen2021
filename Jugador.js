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
      rect(this.x,this.y,40, 100);
    }
  
  }