function preload() {
  img = loadImage("pictures/grass.jpg");
  apple = loadImage("pictures/apple.png");
  myFont = loadFont("fonts/pixel.ttf");
  sadface = loadImage("pictures/sad face.png");
}

let gameover = "YOU DIED!";
let myFont;
let restart = "Press Spacebar to Play Again";
let snake;
let rez = 20;
let food;
let w;
let h;
let score=0

function setup() {
  createCanvas(500,500);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(7);
  snake = new Snake();
  foodLocation();

}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  }
  if (keyCode === 32) {
    clear();
    setup();
    loop();
  }
}

function draw() {
  scale(rez);
  background(img);
  textSize(0.8);
  textFont(myFont);
  text('SCORE:'+ score,0.5,1.5);
  image(apple, food.x, food.y, 1.2, 1.2);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  
  if (snake.endGame()) {
    
    background(255, 0, 0);
    push();
    scale(0.15);
    image(sadface,47,14);
    pop();
    
    textSize(2);
    textFont(myFont);
    fill(255);
    text(gameover, 3.5, 16);

    textSize(0.8);
    textFont(myFont);
    fill(255);
    text(restart, 1.5, 18);
    keyPressed();
  
    noLoop();
    score = 0
  }
}
