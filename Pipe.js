class Pipe {
  constructor(){
    this.width = 100;
    this.height = floor(random(canvas.height - 230));
    this.x = canvas.width
  }

  show(){
    fill(0, 204, 0);
    rect(this.x, canvas.height - this.height, this.width, this.height);
    rect(this.x, 0, this.width, canvas.height - this.height - 200);
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
    var hitTop = (player.y - 20) < (canvas.height - this.height - 200);
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

}
