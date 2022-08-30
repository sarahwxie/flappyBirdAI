class Pipe {
  constructor(){
    this.width = 100;
    this.pipegap = 200;
    this.height = floor(random(canvas.height - this.pipegap - 30));
    this.x = canvas.width
  }

  show(){
    fill(0, 204, 0);

    image(bottomPipeSprite, this.x, canvas.height - this.height);
    image(topPipeSprite, this.x,  canvas.height - this.height - this.pipegap - 800);
  }

  update(){
    this.x -=panSpeed;
  }

  offscreen(){
    if (this.x < -canvas.width) {
      return true;
    } else {
      return false;
    }
  }

  hits(player){
    // check to see if its hit a pipe
    var hitTop = (player.y - 20) < (canvas.height - this.height - this.pipegap);
    var hitBottom = (player.y + 20) > (canvas.height - this.height);

    // check if it's in the pipe's x value
    var correctX =  (player.x > this.x && player.x < this.x + this.width);
    // note: notice how it isn't this.x < player.x < this.x + this.width
    // this is because you need to use the && (the operations don't work like that)

    if ((hitTop && correctX) || (hitBottom && correctX)){
      return true;
    } else {
      return false;
    }
  }

  passedByPlayer(player){
      // if right side of the pipe is at the players x value, add 1 to the score
      if (this.x + this.width == player.x) {
        player.score += 1;
      }
  }

}
