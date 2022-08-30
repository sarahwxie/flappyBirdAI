var panSpeed = 5; // the horizontal velocity
var gravity = 5;
var player;


function setup() {
  // mimics the autoplay policy
  mic = new p5.AudioIn();
  mic.start();
  getAudioContext().resume();

  // creates the canvas
  window.canvas = createCanvas(600,800);

  // start it in the middle of the canvas
  player = new Player(200, canvas.height / 2);



}

// the draw function iterates over and over
function draw(){
  background(173,216,230);
  player.update();
  player.show();
}

// creates a function that causes the bird to flap
function keyPressed(){
  switch(key) {
    // he codes it so abstractly, as if the solution is already created
    // then creates the solution in other files
    // makes large problems easier to break down.
    case ' ':
      player.flap();
      break;
  }
}
