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
    this.score = 0;
    // this one means that the fall rotation is -3.1415... / 6
    this.fallRotation = -PI / 6;
  }

  // displays the player at the current position
  show(){
    // push and pop together create a new drawing state
    push();
    // translate displaces this entire drawing state to be at the desired position on the board
    translate(this.x - this.size / 2 - 8 + birdSprite.width / 2, this.y - this.size / 2 + birdSprite.height / 2);

    // based on the velocity, draw different sprites
    if (this.velY < 3) {
      rotate(-PI / 6);
      this.fallRotation = -PI / 6;
    } else if (this.velY <= 7) {
      this.fallRotation += PI / 8.0;

      // by incrementing fallRotation we get the "rotating" effect
      // instead of the "teleporting" effect
      this.fallRotation = constrain(this.fallRotation, -PI / 6, PI / 2);
      rotate(this.fallRotation);
      // rotate(map(this.velY, 10, 25, -PI / 6, PI / 2));
    } else {
      rotate(PI / 2);
    }
    image(birdSprite, -birdSprite.width / 2, -birdSprite.height / 2);
    pop();

    // display the score at the top center of the screen
    fill(0, 0, 0);
    textSize(32);
    text(str(this.score), 10, 30);


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
