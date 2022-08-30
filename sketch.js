var panSpeed = 5; // the horizontal velocity
var gravity = 0.6;
var pipeDistance = 70;
var player;
var pipes = [];

var birdSprite;
var topPipeSprite;
var bottomPipeSprite;
var backgroundSprite;
var groundSprite;




function preload() {
  birdSprite = loadImage("images/fatBird.png");
  topPipeSprite = loadImage("images/full pipe top.png");
  bottomPipeSprite = loadImage("images/full pipe bottom.png");
  backgroundSprite = loadImage("images/background.png");
  groundSprite = loadImage("images/groundPiece.png");

}

function setup() {
  // mimics the autoplay policy
  mic = new p5.AudioIn();
  mic.start();
  getAudioContext().resume();

  // creates the canvas
  window.canvas = createCanvas(600,800);

  // start the player in the middle of the canvas
  player = new Player(canvas.width / 3, canvas.height / 2);

  // initialize the first pipe
  pipes.push(new Pipe());

  // initialize the ground
  ground = new Ground();

}

// the draw function iterates over and over
function draw(){
  background(173,216,230);
  player.update();
  player.show();
  ground.update();
  ground.show();

  // ensure that the pipe apears every amount of frames
  if (frameCount % pipeDistance == 0){
    pipes.push(new Pipe());
  }

  // draw the pipes
  // since we splice from the beginning of the array, we need to start from the
  // end of the array
  for (var i = pipes.length-1; i >= 0; i--){
    pipes[i].show();
    pipes[i].update();

    // collision detection
    if (pipes[i].hits(player) ) {
      player.die();
    }

    // this function is for when the pipe goes offscreen
    if (pipes[i].offscreen()){
      // splice deletes an element off an array
      pipes.splice(i, 1);
    }
  }
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
