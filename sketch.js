
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var ground;
var bananaGroup;
var survivalTime;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
 
}



function setup() {
  createCanvas(600,600);
  
  ground = createSprite(300,450,600,10);
  ground.velocityX = 3;
  ground.x = ground.width/2;
  
  monkey = createSprite(100,430,10,10);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.1;
 
  
  

  bananaGroup = createGroup();
  survivalTime = 0;
  
}


function draw() {
  background("white");

  if(keyDown("space") && monkey.y >= 400) {
  monkey.velocityY= -19;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (ground.x > 0){
      ground.x = ground.width/2;
    }
  
  spawnBananas();
  spawnObstacles();
  
  drawSprites();
  monkey.collide(ground);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime,100,50);
}

function spawnBananas() {
if(frameCount % 80 == 0) {
var banana = createSprite(600,20,10,10);
  banana.velocityX = -6;
  
   banana.y = Math.round(random(120,200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.lifetime = 100;
  
  bananaGroup.add(banana);
  
}

}

function spawnObstacles() {
if(frameCount % 300 == 0) {
var obstacles = createSprite(600,430,10,10);
  obstacles.velocityX = -6;
  obstacles.addImage(obstacleImage);
  obstacles.scale = 0.1;
  obstacles.lifetime = 100;
}
}


