class Player{
  // creates the player object
  constructor(x,y){
    // includes the position, velocity, and size of the player
    this.x = x;
    this.y = y;
    this.velY = 0;
    this.velX = panSpeed;
    this.size = 20;
  }

  // displays the player at the current position
  show(){
    // draws a circle
    fill(255,255,0);
    ellipse(this.x,this.y,this.size);
  }

  // updates the players position
  update(){
    // makes the Y velocity affected by gravity
    this.velY += gravity;
    this.y += this.velY;

    // is this all that's needed to code gravity and velocity?
  }
}
