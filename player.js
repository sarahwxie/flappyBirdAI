class Player{
  // creates the player object
  constructor(x,y){
    // includes the position, velocity, and size of the player
    this.x = x;
    this.y = y;
    this.velY = 0;
    this.velX = panSpeed;
    this.size = 20;
    this.lift = 15;
    this.dead = false;
  }

  // displays the player at the current position
  show(){
    // draws a circle
    noStroke();
    fill(255,255,0);
    if (this.dead){
      fill(255, 0, 0);
    }
    ellipse(this.x,this.y,this.size);
  }

  // updates the players position
  update(){
    // makes the Y velocity affected by gravity
    this.velY += gravity;
    this.y += this.velY;

    // makes the bird stop when it gets to the bottom of the screen
    if (this.y > canvas.height - this.size - 10){
      this.y = canvas.height - this.size - 10;
      this.velY = 0;
    }


    // add limits to the velocity of the bird
    if (this.velY > 10){
      this.velY = 10
    }
    if (this.velY < -10){
      this.velY = -10;
    }

  }

  flap(){
    if(this.dead == false){
      this.velY -= this.lift;
    }
  }



}
