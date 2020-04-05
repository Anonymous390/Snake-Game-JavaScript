var snake;
var resolution = 20;
var apple;
var wid;
var hig;

function setup() {
    var canvas = createCanvas(400, 400);
    wid = floor(width / resolution);
    hig = floor(height / resolution);
    frameRate(7);
    snake = new Snake();
    locationOfApple();
}

function locationOfApple() {
    var x = floor(random(wid));
    var y = floor(random(hig));
    apple = createVector(x, y);

}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        snake.setDir(-1, 0);
      } 
      else if (keyCode === RIGHT_ARROW) {
        snake.setDir(1, 0);
      } 
      else if (keyCode === DOWN_ARROW) {
        snake.setDir(0, 1);
      } 
      else if (keyCode === UP_ARROW) {
        snake.setDir(0, -1);
      } 
}

function draw() {
    background(51);
    scale(resolution);
    if (snake.eat(apple)) {
        locationOfApple();
    }
    snake.update();
    snake.display();


    if (snake.gameOver()) {
        text("GMAE OVER", 200, 200);
        noLoop();
    }

    noStroke();
    fill(255, 255, 0);
    rect(apple.x, apple.y, 1, 1);
}