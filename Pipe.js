class Pipe {
  constructor(){
    this.width = 100;
    this.height = floor(random(canvas.height - 100));
    this.x = canvas.width;
  }

  show(){
    fill(0, 204, 0);
    rect(this.x, canvas.height - this.height, this.x + width, canvas.height);
  }

  update(){
    this.x +=panSpeed;
  }

}
